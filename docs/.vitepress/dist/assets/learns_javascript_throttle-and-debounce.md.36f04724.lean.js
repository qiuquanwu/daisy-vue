import{_ as o,r as c,c as p,a as t,w as e,e as l,d as n,b as s,o as u}from"./app.6f31ad5d.js";const S='{"title":"\u9632\u6296\u548C\u8282\u6D41","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9632\u6296","slug":"\u9632\u6296"},{"level":2,"title":"\u8282\u6D41","slug":"\u8282\u6D41"}],"relativePath":"learns/javascript/throttle-and-debounce.md","lastUpdated":1641819438397}',r={},i=l('',7),k=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// func\u662F\u7528\u6237\u4F20\u5165\u9700\u8981\u9632\u6296\u7684\u51FD\u6570"),s(`
`),n("span",{class:"token comment"},"// wait\u662F\u7B49\u5F85\u65F6\u95F4"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"debounce"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("func"),n("span",{class:"token punctuation"},","),s(" wait "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"50")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u7F13\u5B58\u4E00\u4E2A\u5B9A\u65F6\u5668id"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" timer "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// \u8FD9\u91CC\u8FD4\u56DE\u7684\u51FD\u6570\u662F\u6BCF\u6B21\u7528\u6237\u5B9E\u9645\u8C03\u7528\u7684\u9632\u6296\u51FD\u6570"),s(`
  `),n("span",{class:"token comment"},"// \u5982\u679C\u5DF2\u7ECF\u8BBE\u5B9A\u8FC7\u5B9A\u65F6\u5668\u4E86\u5C31\u6E05\u7A7A\u4E0A\u4E00\u6B21\u7684\u5B9A\u65F6\u5668"),s(`
  `),n("span",{class:"token comment"},"// \u5F00\u59CB\u4E00\u4E2A\u65B0\u7684\u5B9A\u65F6\u5668\uFF0C\u5EF6\u8FDF\u6267\u884C\u7528\u6237\u4F20\u5165\u7684\u65B9\u6CD5"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token operator"},"..."),s("args")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("timer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"clearTimeout"),n("span",{class:"token punctuation"},"("),s("timer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    timer `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"func"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(" args"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" wait"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u4E0D\u96BE\u770B\u51FA\u5982\u679C\u7528\u6237\u8C03\u7528\u8BE5\u51FD\u6570\u7684\u95F4\u9694\u5C0F\u4E8Ewait\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0A\u4E00\u6B21\u7684\u65F6\u95F4\u8FD8\u672A\u5230\u5C31\u88AB\u6E05\u9664\u4E86\uFF0C\u5E76\u4E0D\u4F1A\u6267\u884C\u51FD\u6570"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br")])],-1),b=n("p",null,"\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7248\u7684\u9632\u6296\uFF0C\u4F46\u662F\u6709\u7F3A\u9677\uFF0C\u8FD9\u4E2A\u9632\u6296\u53EA\u80FD\u5728\u6700\u540E\u8C03\u7528\u3002\u4E00\u822C\u7684\u9632\u6296\u4F1A\u6709 immediate \u9009\u9879\uFF0C\u8868\u793A\u662F\u5426\u7ACB\u5373\u8C03\u7528\u3002\u8FD9\u4E24\u8005\u7684\u533A\u522B\uFF0C\u4E3E\u4E2A\u6817\u5B50\u6765\u8BF4\uFF1A",-1),m=n("ul",null,[n("li",null,"\u4F8B\u5982\u5728\u641C\u7D22\u5F15\u64CE\u641C\u7D22\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F53\u7136\u662F\u5E0C\u671B\u7528\u6237\u8F93\u5165\u5B8C\u6700\u540E\u4E00\u4E2A\u5B57\u624D\u8C03\u7528\u67E5\u8BE2\u63A5\u53E3\uFF0C\u8FD9\u4E2A\u65F6\u5019\u9002\u7528\u5EF6\u8FDF\u6267\u884C\u7684\u9632\u6296\u51FD\u6570\uFF0C\u5B83\u603B\u662F\u5728\u4E00\u8FDE\u4E32\uFF08\u95F4\u9694\u5C0F\u4E8E wait \u7684\uFF09\u51FD\u6570\u89E6\u53D1\u4E4B\u540E\u8C03\u7528\u3002"),n("li",null,"\u4F8B\u5982\u7528\u6237\u7ED9 interviewMap \u70B9 star \u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u7528\u6237\u70B9\u7B2C\u4E00\u4E0B\u7684\u65F6\u5019\u5C31\u53BB\u8C03\u7528\u63A5\u53E3\uFF0C\u5E76\u4E14\u6210\u529F\u4E4B\u540E\u6539\u53D8 star \u6309\u94AE\u7684\u6837\u5B50\uFF0C\u7528\u6237\u5C31\u53EF\u4EE5\u7ACB\u9A6C\u5F97\u5230\u53CD\u9988\u662F\u5426 star \u6210\u529F\u4E86\uFF0C\u8FD9\u4E2A\u60C5\u51B5\u9002\u7528\u7ACB\u5373\u6267\u884C\u7684\u9632\u6296\u51FD\u6570\uFF0C\u5B83\u603B\u662F\u5728\u7B2C\u4E00\u6B21\u8C03\u7528\uFF0C\u5E76\u4E14\u4E0B\u4E00\u6B21\u8C03\u7528\u5FC5\u987B\u4E0E\u524D\u4E00\u6B21\u8C03\u7528\u7684\u65F6\u95F4\u95F4\u9694\u5927\u4E8E wait \u624D\u4F1A\u89E6\u53D1\u3002")],-1),d=n("p",null,"\u4E0B\u9762\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E2A\u5E26\u6709\u7ACB\u5373\u6267\u884C\u9009\u9879\u7684\u9632\u6296\u51FD\u6570",-1),f=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * \u9632\u6296\u51FD\u6570\uFF0C\u8FD4\u56DE\u51FD\u6570\u8FDE\u7EED\u8C03\u7528\u65F6\uFF0C\u7A7A\u95F2\u65F6\u95F4\u5FC5\u987B\u5927\u4E8E\u6216\u7B49\u4E8E wait\uFF0Cfunc \u624D\u4F1A\u6267\u884C
 *
 * @param  {function} func        \u56DE\u8C03\u51FD\u6570
 * @param  {number}   wait        \u8868\u793A\u65F6\u95F4\u7A97\u53E3\u7684\u95F4\u9694
 * @param  {boolean}  immediate   \u8BBE\u7F6E\u4E3Ature\u65F6\uFF0C\u662F\u5426\u7ACB\u5373\u8C03\u7528\u51FD\u6570
 * @return {function}             \u8FD4\u56DE\u5BA2\u6237\u8C03\u7528\u51FD\u6570
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"debounce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("func"),n("span",{class:"token punctuation"},","),s(" wait "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(" immediate "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" timer"),n("span",{class:"token punctuation"},","),s(" context"),n("span",{class:"token punctuation"},","),s(" args"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"// \u5EF6\u8FDF\u6267\u884C\u51FD\u6570"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"later"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
    `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u5EF6\u8FDF\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u6E05\u7A7A\u7F13\u5B58\u7684\u5B9A\u65F6\u5668\u5E8F\u53F7"),s(`
      timer `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// \u5EF6\u8FDF\u6267\u884C\u7684\u60C5\u51B5\u4E0B\uFF0C\u51FD\u6570\u4F1A\u5728\u5EF6\u8FDF\u51FD\u6570\u4E2D\u6267\u884C"),s(`
      `),n("span",{class:"token comment"},"// \u4F7F\u7528\u5230\u4E4B\u524D\u7F13\u5B58\u7684\u53C2\u6570\u548C\u4E0A\u4E0B\u6587"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("immediate"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"func"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},","),s(" args"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        context `),n("span",{class:"token operator"},"="),s(" args "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" wait"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"// \u8FD9\u91CC\u8FD4\u56DE\u7684\u51FD\u6570\u662F\u6BCF\u6B21\u5B9E\u9645\u8C03\u7528\u7684\u51FD\u6570"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token operator"},"..."),s("params")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u5982\u679C\u6CA1\u6709\u521B\u5EFA\u5EF6\u8FDF\u6267\u884C\u51FD\u6570\uFF08later\uFF09\uFF0C\u5C31\u521B\u5EFA\u4E00\u4E2A"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("timer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      timer `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"later"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// \u5982\u679C\u662F\u7ACB\u5373\u6267\u884C\uFF0C\u8C03\u7528\u51FD\u6570"),s(`
      `),n("span",{class:"token comment"},"// \u5426\u5219\u7F13\u5B58\u53C2\u6570\u548C\u8C03\u7528\u4E0A\u4E0B\u6587"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("immediate"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"func"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(" params"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        context `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},";"),s(`
        args `),n("span",{class:"token operator"},"="),s(" params"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token comment"},"// \u5982\u679C\u5DF2\u6709\u5EF6\u8FDF\u6267\u884C\u51FD\u6570\uFF08later\uFF09\uFF0C\u8C03\u7528\u7684\u65F6\u5019\u6E05\u9664\u539F\u6765\u7684\u5E76\u91CD\u65B0\u8BBE\u5B9A\u4E00\u4E2A"),s(`
      `),n("span",{class:"token comment"},"// \u8FD9\u6837\u505A\u5EF6\u8FDF\u51FD\u6570\u4F1A\u91CD\u65B0\u8BA1\u65F6"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"clearTimeout"),n("span",{class:"token punctuation"},"("),s("timer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      timer `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"later"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br")])],-1),w=n("p",null,"\u6574\u4F53\u51FD\u6570\u5B9E\u73B0\u7684\u4E0D\u96BE\uFF0C\u603B\u7ED3\u4E00\u4E0B\u3002",-1),y=n("ul",null,[n("li",null,"\u5BF9\u4E8E\u6309\u94AE\u9632\u70B9\u51FB\u6765\u8BF4\u7684\u5B9E\u73B0\uFF1A\u5982\u679C\u51FD\u6570\u662F\u7ACB\u5373\u6267\u884C\u7684\uFF0C\u5C31\u7ACB\u5373\u8C03\u7528\uFF0C\u5982\u679C\u51FD\u6570\u662F\u5EF6\u8FDF\u6267\u884C\u7684\uFF0C\u5C31\u7F13\u5B58\u4E0A\u4E0B\u6587\u548C\u53C2\u6570\uFF0C\u653E\u5230\u5EF6\u8FDF\u51FD\u6570\u4E2D\u53BB\u6267\u884C\u3002\u4E00\u65E6\u6211\u5F00\u59CB\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u53EA\u8981\u6211\u5B9A\u65F6\u5668\u8FD8\u5728\uFF0C\u4F60\u6BCF\u6B21\u70B9\u51FB\u6211\u90FD\u91CD\u65B0\u8BA1\u65F6\u3002\u4E00\u65E6\u4F60\u70B9\u7D2F\u4E86\uFF0C\u5B9A\u65F6\u5668\u65F6\u95F4\u5230\uFF0C\u5B9A\u65F6\u5668\u91CD\u7F6E\u4E3A null\uFF0C\u5C31\u53EF\u4EE5\u518D\u6B21\u70B9\u51FB\u4E86\u3002"),n("li",null,"\u5BF9\u4E8E\u5EF6\u65F6\u6267\u884C\u51FD\u6570\u6765\u8BF4\u7684\u5B9E\u73B0\uFF1A\u6E05\u9664\u5B9A\u65F6\u5668 ID\uFF0C\u5982\u679C\u662F\u5EF6\u8FDF\u8C03\u7528\u5C31\u8C03\u7528\u51FD\u6570")],-1),_=n("h2",{id:"\u8282\u6D41",tabindex:"-1"},[s("\u8282\u6D41 "),n("a",{class:"header-anchor",href:"#\u8282\u6D41","aria-hidden":"true"},"#")],-1),h=n("p",null,"\u9632\u6296\u52A8\u548C\u8282\u6D41\u672C\u8D28\u662F\u4E0D\u4E00\u6837\u7684\u3002\u9632\u6296\u52A8\u662F\u5C06\u591A\u6B21\u6267\u884C\u53D8\u4E3A\u6700\u540E\u4E00\u6B21\u6267\u884C\uFF0C\u8282\u6D41\u662F\u5C06\u591A\u6B21\u6267\u884C\u53D8\u6210\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u6267\u884C\u3002",-1),g=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * underscore \u8282\u6D41\u51FD\u6570\uFF0C\u8FD4\u56DE\u51FD\u6570\u8FDE\u7EED\u8C03\u7528\u65F6\uFF0Cfunc \u6267\u884C\u9891\u7387\u9650\u5B9A\u4E3A \u6B21 / wait
 *
 * @param  {function}   func      \u56DE\u8C03\u51FD\u6570
 * @param  {number}     wait      \u8868\u793A\u65F6\u95F4\u7A97\u53E3\u7684\u95F4\u9694
 * @param  {object}     options   \u5982\u679C\u60F3\u5FFD\u7565\u5F00\u59CB\u51FD\u6570\u7684\u7684\u8C03\u7528\uFF0C\u4F20\u5165{leading: false}\u3002
 *                                \u5982\u679C\u60F3\u5FFD\u7565\u7ED3\u5C3E\u51FD\u6570\u7684\u8C03\u7528\uFF0C\u4F20\u5165{trailing: false}
 *                                \u4E24\u8005\u4E0D\u80FD\u5171\u5B58\uFF0C\u5426\u5219\u51FD\u6570\u4E0D\u80FD\u6267\u884C
 * @return {function}             \u8FD4\u56DE\u5BA2\u6237\u8C03\u7528\u51FD\u6570
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"throttle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("func"),n("span",{class:"token punctuation"},","),s(" wait"),n("span",{class:"token punctuation"},","),s(" options")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" context"),n("span",{class:"token punctuation"},","),s(" args"),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" timeout "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// \u4E4B\u524D\u7684\u65F6\u95F4\u6233"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" previous "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// \u5982\u679C options \u6CA1\u4F20\u5219\u8BBE\u4E3A\u7A7A\u5BF9\u8C61"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("options"),n("span",{class:"token punctuation"},")"),s(" options "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// \u5B9A\u65F6\u5668\u56DE\u8C03\u51FD\u6570"),s(`
  `),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"later"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u82E5\u8BBE\u5B9A\u4E86\u5F00\u59CB\u8FB9\u754C\u4E0D\u6267\u884C\u9009\u9879\uFF0C\u4E0A\u6B21\u6267\u884C\u65F6\u95F4\u59CB\u7EC8\u4E3A0"),s(`
    previous `),n("span",{class:"token operator"},"="),s(" options"),n("span",{class:"token punctuation"},"."),s("leading "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"+"),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// \u7F6E\u7A7A\u4E00\u662F\u4E3A\u4E86\u9632\u6B62\u5185\u5B58\u6CC4\u6F0F\uFF0C\u4E8C\u662F\u4E3A\u4E86\u4E0B\u9762\u7684\u5B9A\u65F6\u5668\u5224\u65AD"),s(`
    timeout `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    result `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"func"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},","),s(" args"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("timeout"),n("span",{class:"token punctuation"},")"),s(" context "),n("span",{class:"token operator"},"="),s(" args "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u83B7\u5F97\u5F53\u524D\u65F6\u95F4\u6233"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" now "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"+"),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// \u9996\u6B21\u6267\u884C\u65F6\uFF0C\u5982\u679C\u8BBE\u5B9A\u4E86\u5F00\u59CB\u8FB9\u754C\u4E0D\u6267\u884C\u9009\u9879\uFF0C\u5C06\u4E0A\u6B21\u6267\u884C\u65F6\u95F4\u8BBE\u5B9A\u4E3A\u5F53\u524D\u65F6\u95F4\u3002"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("previous "),n("span",{class:"token operator"},"&&"),s(" options"),n("span",{class:"token punctuation"},"."),s("leading "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(" previous "),n("span",{class:"token operator"},"="),s(" now"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// \u8BA1\u7B97\u5269\u4F59\u65F6\u95F4"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" remaining "),n("span",{class:"token operator"},"="),s(" wait "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token punctuation"},"("),s("now "),n("span",{class:"token operator"},"-"),s(" previous"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    context `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},";"),s(`
    args `),n("span",{class:"token operator"},"="),s(" arguments"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// \u5EF6\u8FDF\u65F6\u95F4\u95F4\u9694remaining\u5C0F\u4E8E\u7B49\u4E8E0\uFF0C\u8868\u793A\u4E0A\u6B21\u6267\u884C\u81F3\u6B64\u6240\u95F4\u9694\u65F6\u95F4\u5DF2\u7ECF\u8D85\u8FC7\u4E00\u4E2A\u65F6\u95F4\u7A97\u53E3"),s(`
    `),n("span",{class:"token comment"},"// remaining\u5927\u4E8E\u65F6\u95F4\u7A97\u53E3wait\uFF0C\u8868\u793A\u5BA2\u6237\u7AEF\u7CFB\u7EDF\u65F6\u95F4\u88AB\u8C03\u6574\u8FC7"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("remaining "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" remaining "),n("span",{class:"token operator"},">"),s(" wait"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u5982\u679C\u5B58\u5728\u5B9A\u65F6\u5668\u5C31\u6E05\u7406\u6389\u5426\u5219\u4F1A\u8C03\u7528\u4E8C\u6B21\u56DE\u8C03"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("timeout"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"clearTimeout"),n("span",{class:"token punctuation"},"("),s("timeout"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        timeout `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      previous `),n("span",{class:"token operator"},"="),s(" now"),n("span",{class:"token punctuation"},";"),s(`
      result `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"func"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},","),s(" args"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("timeout"),n("span",{class:"token punctuation"},")"),s(" context "),n("span",{class:"token operator"},"="),s(" args "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"//\u5982\u679C\u5EF6\u8FDF\u6267\u884C\u4E0D\u5B58\u5728\uFF0C\u4E14\u6CA1\u6709\u8BBE\u5B9A\u7ED3\u5C3E\u8FB9\u754C\u4E0D\u6267\u884C\u9009\u9879"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("timeout "),n("span",{class:"token operator"},"&&"),s(" options"),n("span",{class:"token punctuation"},"."),s("trailing "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      timeout `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),s("later"),n("span",{class:"token punctuation"},","),s(" remaining"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br")])],-1);function v(x,T,A,j,D,V){const a=c("code-block");return u(),p("div",null,[i,t(a,{showAction:!1},{default:e(()=>[k]),_:1}),b,m,d,t(a,{showAction:!1},{default:e(()=>[f]),_:1}),w,y,_,h,t(a,{showAction:!1},{default:e(()=>[g]),_:1})])}var C=o(r,[["render",v]]);export{S as __pageData,C as default};
