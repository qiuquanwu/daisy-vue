# 关于 Object 的 getter 和 setter

对于对象 o 有 N 个属性，不修改下面代码，编写一段程序获取到对象 o 的所有属性

```js
var foo = (function () {
  var o = {
    a: 1,
    b: 2,
    /**更多属性**/
  };
  return function (key) {
    return o[key];
  };
})();
```

对象 o 只是函数作用域中的一个局部变量，而对外提供的唯一接口 foo(key)可以获取到对象 o 单独的某个 key 对应的 value，如：foo('a')返回 1。但是这里要求获取一个未知属性个数对象 o 的所有属性。

在解题之前先来了解一下解析需要用到的技术。

## Object 的 getter，setter

在 javascript 中，对象有两个特殊的“属性”。这两个东西可以分别给对象的某个属性进行监听，在获取/设置该对象的该属性的时候执行某些事件，就像 DOM 中的事件监听一样，能够在你单击/双击/...各种操作的时候执行该方法，并且在这个函数中的 this 指向该对象。话不多说，直接上代码：

```js
var test = {
  get o() {
    console.log('监听到正在获取属性o的值');
    return this._o;
  },
  set o(v) {
    console.log('监听到正在设置属性o的值为：' + v);
    this._o = v;
    return this._o;
  },
};

test.o = 14; // 监听到正在设置属性o的值为：14
console.log(test.o); // 监听到正在获取属性o的值
```

可以看到，结果完全如预期所料。这里用\_o 为了避免在 set 的时候会设置属性 o 然后 set 方法就会无限循环的执行导致崩溃报错。看到这里或者会说，这个和题目有几毛钱的关系，别急，接着看 getter 和 setter 的另外两种声明方式。

## Object.prototype.**defineGetter**和 Object.prototype.**defineSetter**

上面的声明方式无法对已经存在的对象进行 getter 和 setter“属性”的添加，只能在对象声明的时候设置。

```js
var test = {};

test.__defineGetter__('o', function () {
  console.log('监听到正在获取属性o的值');
  return this._o;
});

test.__defineSetter__('o', function (v) {
  console.log('监听到正在设置属性o的值为：' + v);
  this._o = v;
  return this._o;
});

test.o = 14; // 监听到正在设置属性o的值为：14
console.log(test.o); // 监听到正在获取属性o的值
```

:::warning
但是，这两种方法已经不推荐使用，而且随着浏览器更新会慢慢抛弃不再支持这两种写法。这里提出来只是阔展一下视野的。
:::

## Object.defineProperty

给对象添加对象属性特性描述，主要就是是否可枚举修改删除设置等以及 value/getter/setter 等设置，其他就不多说，再说就走远了，来看看 getter/setter 的使用：

```js
var test = {};
Object.defineProperty(test, 'o', {
  get() {
    console.log('监听到正在获取属性o的值');
    return this._o;
  },
  set(v) {
    console.log('监听到正在设置属性o的值为：' + v);
    this._o = v;
    return this._o;
  },
});

test.o = 14; // 监听到正在设置属性o的值为：14
console.log(test.o); // 监听到正在获取属性o的值
```

这个才是 JS 标准支持的方式。另外在扩展一下 Object.defineProperties，复数形式，也就是可以一次性设置多个。

```js
var test = {};

Object.defineProperties(test, {
  o: {
    get() {},
    set(v) {},
  },
  p: {
    get() {},
    set(v) {},
  },
});
```

## 分析

根据题目我们可以知道在调用 foo(key)的时候，函数 foo 会调用对象 o 并且返回 o[key]的值。这里会对对象进行一个取值操作，我们只需要给对象 o 添加一个 self 属性的 getter 监听，在 foo('self')的时候执行并且返回 this，上面也已经说了，**getter/setter 函数中，this 是指向对象本身的**。

那么问题又来了，怎么给对象 o 添加 self 属性的 getter 监听。

另外一个知识点---原型。我们都知道**所有对象的构造函数都是 Object**，而对对象取某个属性的时候自生没有就会去原型链上找，也就是我们只需要给 Object.prototype 添加一个 self 属性的 getter 监听并且放回 this。

```js
Object.defineProperty(Object.prototype, 'self', {
  get() {
    return this;
  },
});

var o = foo('self');
console.log(Object.keys(o)); // ['a', 'b']
```

## 修正

上面的做法已经基本上能解决问题了，但还不完善。如果对象 o 自生存在 self 属性，那么在获取的时候就不会去其原型链上查找，这里我们必须要定一个唯一的属性。

这里就可以用到 ES6 新增加的第 7 种数据类型 Symbol。

```js
var key = Symbol();
Object.defineProperty(Object.prototype, key, {
  get() {
    return this;
  },
});

var o = foo(key);
console.log(Object.keys(o)); // ['a', 'b']
```
