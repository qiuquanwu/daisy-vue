import{_ as o,r as c,c as p,a as t,w as e,e as l,d as n,o as u,b as s}from"./app.6f31ad5d.js";const U='{"title":"\u9759\u6001\u4F5C\u7528\u57DF\u4E0E\u52A8\u6001\u4F5C\u7528\u57DF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F5C\u7528\u57DF","slug":"\u4F5C\u7528\u57DF"},{"level":2,"title":"\u9759\u6001\u4F5C\u7528\u57DF\u4E0E\u52A8\u6001\u4F5C\u7528\u57DF","slug":"\u9759\u6001\u4F5C\u7528\u57DF\u4E0E\u52A8\u6001\u4F5C\u7528\u57DF-1"}],"relativePath":"learns/javascript/static-scope-and-auto-scrope.md","lastUpdated":1641819438396}',i={},r=l('',8),k=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"bar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function"},"bar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 1"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br")])],-1),b=n("p",null,"\u5047\u8BBE JavaScript \u91C7\u7528\u9759\u6001\u4F5C\u7528\u57DF\uFF0C\u8BA9\u6211\u4EEC\u5206\u6790\u4E0B\u6267\u884C\u8FC7\u7A0B\uFF1A",-1),d=n("p",null,"\u6267\u884C foo \u51FD\u6570\uFF0C\u5148\u4ECE foo \u51FD\u6570\u5185\u90E8\u67E5\u627E\u662F\u5426\u6709\u5C40\u90E8\u53D8\u91CF value\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u5C31\u6839\u636E\u4E66\u5199\u7684\u4F4D\u7F6E\uFF0C\u67E5\u627E\u4E0A\u9762\u4E00\u5C42\u7684\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F value \u7B49\u4E8E 1\uFF0C\u6240\u4EE5\u7ED3\u679C\u4F1A\u6253\u5370 1\u3002",-1),m=n("p",null,"\u5047\u8BBE JavaScript \u91C7\u7528\u52A8\u6001\u4F5C\u7528\u57DF\uFF0C\u8BA9\u6211\u4EEC\u5206\u6790\u4E0B\u6267\u884C\u8FC7\u7A0B\uFF1A",-1),f=n("p",null,"\u6267\u884C foo \u51FD\u6570\uFF0C\u4F9D\u7136\u662F\u4ECE foo \u51FD\u6570\u5185\u90E8\u67E5\u627E\u662F\u5426\u6709\u5C40\u90E8\u53D8\u91CF value\u3002\u5982\u679C\u6CA1\u6709\uFF0C\u5C31\u4ECE\u8C03\u7528\u51FD\u6570\u7684\u4F5C\u7528\u57DF\uFF0C\u4E5F\u5C31\u662F bar \u51FD\u6570\u5185\u90E8\u67E5\u627E value \u53D8\u91CF\uFF0C\u6240\u4EE5\u7ED3\u679C\u4F1A\u6253\u5370 2\u3002",-1),_=n("p",null,"\u524D\u9762\u6211\u4EEC\u5DF2\u7ECF\u8BF4\u4E86\uFF0CJavaScript \u91C7\u7528\u7684\u662F\u9759\u6001\u4F5C\u7528\u57DF\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u4F8B\u5B50\u7684\u7ED3\u679C\u662F 1\u3002",-1),h=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"bar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function"},"bar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 2"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br")])],-1),v=n("p",null,"\u6700\u540E\uFF0C\u8BA9\u6211\u4EEC\u770B\u4E00\u4E2A\u300AJavaScript \u6743\u5A01\u6307\u5357\u300B\u4E2D\u7684\u4F8B\u5B50\uFF1A",-1),w=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" scope "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'global scope'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"checkscope"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" scope "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'local scope'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" scope"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function"},"checkscope"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// local scope"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br")])],-1),g=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" scope "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'global scope'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"checkscope"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" scope "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'local scope'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" scope"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" f"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function"},"checkscope"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// local scope"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br")])],-1),y=n("p",null,"\u867D\u7136\u4E24\u6BB5\u4EE3\u7801\u6267\u884C\u7684\u7ED3\u679C\u4E00\u6837\uFF0C\u4F46\u662F\u4E24\u6BB5\u4EE3\u7801\u7A76\u7ADF\u6709\u54EA\u4E9B\u4E0D\u540C\u5462\uFF1F",-1),S=n("p",null,"\u7B54\u6848\u5C31\u662F\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u7684\u53D8\u5316\u4E0D\u4E00\u6837\u3002",-1),C=n("p",null,"\u8BA9\u6211\u4EEC\u6A21\u62DF\u7B2C\u4E00\u6BB5\u4EE3\u7801\uFF1A",-1),x=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[s("ECStack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"<"),s("checkscope"),n("span",{class:"token operator"},">"),s(" functionContext"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ECStack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"<"),s("f"),n("span",{class:"token operator"},">"),s(" functionContext"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ECStack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ECStack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br")])],-1),A=n("p",null,"\u8BA9\u6211\u4EEC\u6A21\u62DF\u7B2C\u4E8C\u6BB5\u4EE3\u7801\uFF1A",-1),j=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[s("ECStack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"<"),s("checkscope"),n("span",{class:"token operator"},">"),s(" functionContext"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ECStack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ECStack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"<"),s("f"),n("span",{class:"token operator"},">"),s(" functionContext"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ECStack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br")])],-1),E=n("p",null,"\u518D\u770B\u770B\u4E0B\u9762\u8FD9\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50",-1),T=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" scope "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'global scope'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" scope"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"checkscope"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" scope "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'local scope'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"return"),s(" f"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function"},"checkscope"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// global scope"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br")])],-1),J=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(" scope "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'global scope'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" scope"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"checkscope"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" scope "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'local scope'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function"},"checkscope"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// global scope"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br")])],-1);function V(N,$,B,P,D,I){const a=c("code-block");return u(),p("div",null,[r,t(a,{showAction:!1},{default:e(()=>[k]),_:1}),b,d,m,f,_,t(a,{showAction:!1},{default:e(()=>[h]),_:1}),v,t(a,{showAction:!1},{default:e(()=>[w]),_:1}),t(a,{showAction:!1},{default:e(()=>[g]),_:1}),y,S,C,t(a,{showAction:!1},{default:e(()=>[x]),_:1}),A,t(a,{showAction:!1},{default:e(()=>[j]),_:1}),E,t(a,{showAction:!1},{default:e(()=>[T]),_:1}),t(a,{showAction:!1},{default:e(()=>[J]),_:1})])}var q=o(i,[["render",V]]);export{U as __pageData,q as default};
