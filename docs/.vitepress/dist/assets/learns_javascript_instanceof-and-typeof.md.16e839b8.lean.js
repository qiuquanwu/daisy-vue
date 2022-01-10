import{_ as c,r as l,c as p,a as t,w as o,e,d as n,b as s,o as u}from"./app.6f31ad5d.js";const K='{"title":"instanceof \u548C typeof \u7684\u5B9E\u73B0\u539F\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"typeof \u5B9E\u73B0\u539F\u7406","slug":"typeof-\u5B9E\u73B0\u539F\u7406"},{"level":2,"title":"instanceof \u64CD\u4F5C\u7B26\u7684\u5B9E\u73B0\u539F\u7406","slug":"instanceof-\u64CD\u4F5C\u7B26\u7684\u5B9E\u73B0\u539F\u7406"},{"level":3,"title":"Object instanceof Object","slug":"object-instanceof-object"},{"level":3,"title":"Foo instanceof Foo","slug":"foo-instanceof-foo"},{"level":3,"title":"Foo instanceof Object","slug":"foo-instanceof-object"},{"level":3,"title":"Foo instanceof Function","slug":"foo-instanceof-function"}],"relativePath":"learns/javascript/instanceof-and-typeof.md","lastUpdated":1641819438382}',i={},r=e('',5),k=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'abc'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"typeof"),s(" s "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'object'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true"),s(`
s `),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),b=e("",5),m=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// TypeError: Right-hand side of 'instanceof' is not an object"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br")])],-1),f=n("p",null,"null \u76F4\u63A5\u88AB\u5224\u65AD\u4E3A\u4E0D\u662F object\uFF0C\u8FD9\u4E5F\u662F JavaScript \u7684\u5386\u53F2\u9057\u7559 bug",-1),d=n("p",null,"\u56E0\u6B64\u5728\u7528 typeof \u6765\u5224\u65AD\u53D8\u91CF\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u9700\u8981\u6CE8\u610F\uFF0C\u6700\u597D\u662F\u7528 typeof \u6765\u5224\u65AD\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF08\u5305\u62EC symbol\uFF09\uFF0C\u907F\u514D\u5BF9 null \u7684\u5224\u65AD",-1),_=n("p",null,"\u8FD8\u6709\u4E00\u4E2A\u4E0D\u9519\u7684\u5224\u65AD\u7C7B\u578B\u7684\u65B9\u6CD5\uFF0C\u5C31\u662F Object.prototype.toString\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u65B9\u6CD5\u6765\u5BF9\u4E00\u4E2A\u53D8\u91CF\u7684\u7C7B\u578B\u6765\u8FDB\u884C\u6BD4\u8F83\u51C6\u786E\u7684\u5224\u65AD",-1),h=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "[object Number]"'),s(`

`),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'hi'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "[object String]"'),s(`

`),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" a"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hi'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "[object Object]"'),s(`

`),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "[object Array]"'),s(`

`),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "[object Boolean]"'),s(`

`),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "[object Function]"'),s(`

`),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "[object Null]"'),s(`

`),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "[object Undefined]"'),s(`

`),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Symbol"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "[object Symbol]"'),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br")])],-1),y=n("h2",{id:"instanceof-\u64CD\u4F5C\u7B26\u7684\u5B9E\u73B0\u539F\u7406",tabindex:"-1"},[s("instanceof \u64CD\u4F5C\u7B26\u7684\u5B9E\u73B0\u539F\u7406 "),n("a",{class:"header-anchor",href:"#instanceof-\u64CD\u4F5C\u7B26\u7684\u5B9E\u73B0\u539F\u7406","aria-hidden":"true"},"#")],-1),j=n("p",null,"\u4E4B\u524D\u6211\u4EEC\u63D0\u5230\u4E86 instanceof \u6765\u5224\u65AD\u5BF9\u8C61\u7684\u5177\u4F53\u7C7B\u578B\uFF0C\u5176\u5B9E instanceof \u4E3B\u8981\u7684\u4F5C\u7528\u5C31\u662F\u5224\u65AD\u4E00\u4E2A\u5B9E\u4F8B\u662F\u5426\u5C5E\u4E8E\u67D0\u79CD\u7C7B\u578B",-1),g=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token function-variable function"},"person"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"let"),s(" nicole "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"person"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
nicole `),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"person"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),w=n("p",null,"instanceof \u4E5F\u53EF\u4EE5\u5224\u65AD\u4E00\u4E2A\u5B9E\u4F8B\u662F\u5426\u662F\u5176\u7236\u7C7B\u578B\u6216\u8005\u7956\u5148\u7C7B\u578B\u7684\u5B9E\u4F8B\u3002",-1),F=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token function-variable function"},"person"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token function-variable function"},"programmer"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
programmer`),n("span",{class:"token punctuation"},"."),s("prototype "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"person"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"let"),s(" nicole "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"programmer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
nicole `),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"person"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true"),s(`
nicole `),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"programmer"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br")])],-1),V=n("p",null,"\u8FD9\u662F instanceof \u7684\u7528\u6CD5\uFF0C\u4F46\u662F instanceof \u7684\u539F\u7406\u662F\u4EC0\u4E48\u5462\uFF1F",-1),O=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"new_instance_of"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("leftVaule"),n("span",{class:"token punctuation"},","),s(" rightVaule")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" rightProto "),n("span",{class:"token operator"},"="),s(" rightVaule"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u53D6\u53F3\u8868\u8FBE\u5F0F\u7684 prototype \u503C"),s(`
  leftVaule `),n("span",{class:"token operator"},"="),s(" leftVaule"),n("span",{class:"token punctuation"},"."),s("__proto__"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u53D6\u5DE6\u8868\u8FBE\u5F0F\u7684__proto__\u503C"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("leftVaule "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("leftVaule "),n("span",{class:"token operator"},"==="),s(" rightProto"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    leftVaule `),n("span",{class:"token operator"},"="),s(" leftVaule"),n("span",{class:"token punctuation"},"."),s("__proto__"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br")])],-1),v=n("p",null,"\u5176\u5B9E instanceof \u4E3B\u8981\u7684\u5B9E\u73B0\u539F\u7406\u5C31\u662F\u53EA\u8981\u53F3\u8FB9\u53D8\u91CF\u7684 prototype \u5728\u5DE6\u8FB9\u53D8\u91CF\u7684\u539F\u578B\u94FE\u4E0A\u5373\u53EF\u3002\u56E0\u6B64\uFF0Cinstanceof \u5728\u67E5\u627E\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u904D\u5386\u5DE6\u8FB9\u53D8\u91CF\u7684\u539F\u578B\u94FE\uFF0C\u76F4\u5230\u627E\u5230\u53F3\u8FB9\u53D8\u91CF\u7684 prototype\uFF0C\u5982\u679C\u67E5\u627E\u5931\u8D25\uFF0C\u5219\u4F1A\u8FD4\u56DE false\uFF0C\u544A\u8BC9\u6211\u4EEC\u5DE6\u8FB9\u53D8\u91CF\u5E76\u975E\u662F\u53F3\u8FB9\u53D8\u91CF\u7684\u5B9E\u4F8B\u3002",-1),S=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"Foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

Object `),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true"),s(`
Function `),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"Function"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true"),s(`
Function `),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true"),s(`
Foo `),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"Foo"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// false"),s(`
Foo `),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true"),s(`
Foo `),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"Function"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br")])],-1),A=e('',4),T=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[s("leftValue "),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},"."),s("__proto__ "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Function"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},";"),s(`
rightValue `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u7B2C\u4E00\u6B21\u5224\u65AD"),s(`
leftValue `),n("span",{class:"token operator"},"!="),s(" rightValue"),n("span",{class:"token punctuation"},";"),s(`
leftValue `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Function"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),s("__proto__ "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u7B2C\u4E8C\u6B21\u5224\u65AD"),s(`
leftValue `),n("span",{class:"token operator"},"==="),s(" rightValue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u8FD4\u56DE true"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br")])],-1),x=n("p",null,"Function instanceof Function \u548C Function instanceof Object \u7684\u8FD0\u884C\u8FC7\u7A0B\u4E0E Object instanceof Object \u7C7B\u4F3C",-1),N=n("h3",{id:"foo-instanceof-foo",tabindex:"-1"},[s("Foo instanceof Foo "),n("a",{class:"header-anchor",href:"#foo-instanceof-foo","aria-hidden":"true"},"#")],-1),P=n("p",null,[s("Foo \u51FD\u6570\u7684 prototype \u5C5E\u6027\u662F Foo.prototype\uFF0C\u800C Foo \u7684 "),n("strong",null,"proto"),s(" \u5C5E\u6027\u662F Function.prototype\uFF0C\u7531\u56FE\u53EF\u77E5\uFF0CFoo \u7684\u539F\u578B\u94FE\u4E0A\u5E76\u6CA1\u6709 Foo.prototype \uFF0C\u56E0\u6B64 Foo instanceof Foo \u4E5F\u5C31\u8FD4\u56DE false \u3002")],-1),C=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"("),s("leftValue "),n("span",{class:"token operator"},"="),s(" Foo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("rightValue "),n("span",{class:"token operator"},"="),s(" Foo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
leftValue `),n("span",{class:"token operator"},"="),s(" Foo"),n("span",{class:"token punctuation"},"."),s("__proto "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Function"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},";"),s(`
rightValue `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Foo"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u7B2C\u4E00\u6B21\u5224\u65AD"),s(`
leftValue `),n("span",{class:"token operator"},"!="),s(" rightValue"),n("span",{class:"token punctuation"},";"),s(`
leftValue `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Function"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),s("__proto__ "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u7B2C\u4E8C\u6B21\u5224\u65AD"),s(`
leftValue `),n("span",{class:"token operator"},"!="),s(" rightValue"),n("span",{class:"token punctuation"},";"),s(`
leftValue `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u7B2C\u4E09\u6B21\u5224\u65AD"),s(`
leftValue `),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u8FD4\u56DE false"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br")])],-1),I=n("h3",{id:"foo-instanceof-object",tabindex:"-1"},[s("Foo instanceof Object "),n("a",{class:"header-anchor",href:"#foo-instanceof-object","aria-hidden":"true"},"#")],-1),E=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"("),s("leftValue "),n("span",{class:"token operator"},"="),s(" Foo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("rightValue "),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
leftValue `),n("span",{class:"token operator"},"="),s(" Foo"),n("span",{class:"token punctuation"},"."),s("__proto__ "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Function"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},";"),s(`
rightValue `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u7B2C\u4E00\u6B21\u5224\u65AD"),s(`
leftValue `),n("span",{class:"token operator"},"!="),s(" rightValue"),n("span",{class:"token punctuation"},";"),s(`
leftValue `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Function"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),s("__proto__ "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u7B2C\u4E8C\u6B21\u5224\u65AD"),s(`
leftValue `),n("span",{class:"token operator"},"==="),s(" rightValue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u8FD4\u56DE true"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br")])],-1),B=n("h3",{id:"foo-instanceof-function",tabindex:"-1"},[s("Foo instanceof Function "),n("a",{class:"header-anchor",href:"#foo-instanceof-function","aria-hidden":"true"},"#")],-1),D=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"("),s("leftValue "),n("span",{class:"token operator"},"="),s(" Foo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("rightValue "),n("span",{class:"token operator"},"="),s(" Function"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
leftValue `),n("span",{class:"token operator"},"="),s(" Foo"),n("span",{class:"token punctuation"},"."),s("__proto__ "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Function"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},";"),s(`
rightValue `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Function"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u7B2C\u4E00\u6B21\u5224\u65AD"),s(`
leftValue `),n("span",{class:"token operator"},"==="),s(" rightValue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u8FD4\u56DE true"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br")])],-1);function R($,J,q,U,z,G){const a=l("code-block");return u(),p("div",null,[r,t(a,{showAction:!1},{default:o(()=>[k]),_:1}),b,t(a,{showAction:!1},{default:o(()=>[m]),_:1}),f,d,_,t(a,{showAction:!1},{default:o(()=>[h]),_:1}),y,j,t(a,{showAction:!1},{default:o(()=>[g]),_:1}),w,t(a,{showAction:!1},{default:o(()=>[F]),_:1}),V,t(a,{showAction:!1},{default:o(()=>[O]),_:1}),v,t(a,{showAction:!1},{default:o(()=>[S]),_:1}),A,t(a,{showAction:!1},{default:o(()=>[T]),_:1}),x,N,P,t(a,{showAction:!1},{default:o(()=>[C]),_:1}),I,t(a,{showAction:!1},{default:o(()=>[E]),_:1}),B,t(a,{showAction:!1},{default:o(()=>[D]),_:1})])}var L=c(i,[["render",R]]);export{K as __pageData,L as default};
