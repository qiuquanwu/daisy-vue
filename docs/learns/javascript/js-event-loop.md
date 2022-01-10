# JavaScript 运行机制详解：再谈 Event Loop

## 一、为什么 JavaScript 是单线程？

JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么 JavaScript 不能有多个线程呢？这样能提高效率啊。

JavaScript 的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

所以，为了避免复杂性，从一诞生，JavaScript 就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM。所以，这个新标准并没有改变 JavaScript 单线程的本质。

## 二、任务队列

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。

如果排队是因为计算量大，CPU 忙不过来，倒也算了，但是很多时候 CPU 是闲着的，因为 IO 设备（输入输出设备）很慢（比如 Ajax 操作从网络读取数据），不得不等着结果出来，再往下执行。

JavaScript 语言的设计者意识到，这时主线程完全可以不管 IO 设备，挂起处于等待中的任务，先运行排在后面的任务。等到 IO 设备返回了结果，再回过头，把挂起的任务继续执行下去。

于是，所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

具体来说，异步执行的运行机制如下。（同步执行也是如此，因为它可以被视为没有异步任务的异步执行。）

- (1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。

- （2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

- （3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

- （4）主线程不断重复上面的第三步。

> 只要主线程空了，就会去读取"任务队列"，这就是 JavaScript 的运行机制。这个过程会不断重复。

## 三、事件和回调函数

**"任务队列"是一个事件的队列**（也可以理解成消息的队列），IO 设备完成一项任务，就在"任务队列"中添加一个事件，表示相关的异步任务可以进入"执行栈"了。主线程读取"任务队列"，就是读取里面有哪些事件。

"任务队列"中的事件，除了 IO 设备的事件以外，还包括一些用户产生的事件（比如鼠标点击、页面滚动等等）。只要指定过回调函数，这些事件发生时就会进入"任务队列"，等待主线程读取。

所谓"回调函数"（callback），就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。

"任务队列"是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。主线程的读取过程基本上是自动的，只要执行栈一清空，"任务队列"上第一位的事件就自动进入主线程。但是，**由于存在后文提到的"定时器"功能，主线程首先要检查一下执行时间，某些事件只有到了规定的时间，才能返回主线程。**

## 四、Event Loop

主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为 Event Loop（事件循环）。

## 五、定时器

除了放置异步任务的事件，"任务队列"还可以放置定时事件，即指定某些代码在多少时间之后执行。这叫做"定时器"（timer）功能，也就是定时执行的代码。

定时器功能主要由 setTimeout()和 setInterval()这两个函数来完成，**它们的内部运行机制完全一样**，区别在于前者指定的代码是一次性执行，后者则为反复执行。以下主要讨论 setTimeout()。

setTimeout()接受两个参数，第一个是回调函数，第二个是推迟执行的毫秒数。

> 如果将 setTimeout()的第二个参数设为 0，就表示当前代码执行完（执行栈清空）以后，立即执行（0 毫秒间隔）指定的回调函数。

```js
setTimeout(function () {
  console.log(1);
}, 0);
console.log(2);
```

上面代码的执行结果总是 2，1，因为只有在执行完第二行以后，系统才会去执行"任务队列"中的回调函数。

总之，**setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行**，也就是说，尽可能早得执行。它在"任务队列"的尾部添加一个事件，因此要等到同步任务和"任务队列"现有的事件都处理完，才会得到执行。

HTML5 标准规定了 setTimeout()的第二个参数的最小值（最短间隔），不得低于 4 毫秒，如果低于这个值，就会自动增加。在此之前，老版本的浏览器都将最短间隔设为 10 毫秒。另外，对于那些 DOM 的变动（尤其是涉及页面重新渲染的部分），通常不会立即执行，而是每 16 毫秒执行一次。这时使用 requestAnimationFrame()的效果要好于 setTimeout()。

> 需要注意的是，setTimeout()只是将事件插入了"任务队列"，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。要是当前代码耗时很长，有可能要等很久，所以并没有办法保证，回调函数一定会在 setTimeout()指定的时间执行。

## 六、Node.js 的 Event Loop

Node.js 也是单线程的 Event Loop，但是它的运行机制不同于浏览器环境。

除了 setTimeout 和 setInterval 这两个方法，Node.js 还提供了另外两个与"任务队列"有关的方法：process.nextTick 和 setImmediate。它们可以帮助我们加深对"任务队列"的理解。

process.nextTick 方法可以在当前"执行栈"的尾部----下一次 Event Loop（主线程读取"任务队列"）之前----触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。setImmediate 方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一次 Event Loop 时执行，这与 setTimeout(fn, 0)很像。请看下面的例子

```js
process.nextTick(function A() {
  console.log(1);
  process.nextTick(function B() {
    console.log(2);
  });
});

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0);
// 1
// 2
// TIMEOUT FIRED
```

上面代码中，**由于 process.nextTick 方法指定的回调函数，总是在当前"执行栈"的尾部触发**，所以不仅函数 A 比 setTimeout 指定的回调函数 timeout 先执行，而且函数 B 也比 timeout 先执行。这说明，如果有多个 process.nextTick 语句（不管它们是否嵌套），将全部在当前"执行栈"执行

现在，再看 setImmediate。

```js
setImmediate(function A() {
  console.log(1);
  setImmediate(function B() {
    console.log(2);
  });
});

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0);
```

上面代码中，**setImmediate 与 setTimeout(fn,0)各自添加了一个回调函数 A 和 timeout，都是在下一次 Event Loop 触发**。那么，哪个回调函数先执行呢？答案是不确定。运行结果可能是 1--TIMEOUT FIRED--2，也可能是 TIMEOUT FIRED--1--2。

> 令人困惑的是，Node.js 文档中称，setImmediate 指定的回调函数，总是排在 setTimeout 前面。实际上，这种情况只发生在递归调用的时候。

```js
setImmediate(function () {
  setImmediate(function A() {
    console.log(1);
    setImmediate(function B() {
      console.log(2);
    });
  });

  setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
  }, 0);
});
// 1
// TIMEOUT FIRED
// 2
```

上面代码中，setImmediate 和 setTimeout 被封装在一个 setImmediate 里面，它的运行结果总是 1--TIMEOUT FIRED--2，这时函数 A 一定在 timeout 前面触发。至于 2 排在 TIMEOUT FIRED 的后面（即函数 B 在 timeout 后面触发），是因为 setImmediate 总是将事件注册到下一轮 Event Loop，所以函数 A 和 timeout 是在同一轮 Loop 执行，而函数 B 在下一轮 Loop 执行。

我们由此得到了 process.nextTick 和 setImmediate 的一个重要区别：**多个 process.nextTick 语句总是在当前"执行栈"一次执行完，多个 setImmediate 可能则需要多次 loop 才能执行完**。事实上，这正是 Node.js 10.0 版添加 setImmediate 方法的原因，否则像下面这样的递归调用 process.nextTick，将会没完没了，主线程根本不会去读取"事件队列"！

```js
process.nextTick(function foo() {
  process.nextTick(foo);
});
```

> 事实上，现在要是你写出递归的 process.nextTick，Node.js 会抛出一个警告，要求你改成 setImmediate。

另外，由于 process.nextTick 指定的回调函数是在本次"事件循环"触发，而 setImmediate 指定的是在下次"事件循环"触发，所以很显然，前者总是比后者发生得早，而且执行效率也高（因为不用检查"任务队列"）。

来源：http://www.ruanyifeng.com/blog/2014/10/event-loop.html
