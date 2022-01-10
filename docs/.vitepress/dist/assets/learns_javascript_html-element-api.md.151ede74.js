import{_ as l,r as c,c as p,a as e,w as a,e as o,d as n,b as t,o as i}from"./app.6f31ad5d.js";const G='{"title":"\u91CD\u5B66\u4E4B JavaScript HTML Element \u5E38\u7528 API \u89E3\u6790","description":"","frontmatter":{},"headers":[{"level":2,"title":"offsetHeight, offsetWidth","slug":"offsetheight-offsetwidth"},{"level":3,"title":"\u4F7F\u7528\u65B9\u6CD5","slug":"\u4F7F\u7528\u65B9\u6CD5"},{"level":2,"title":"offsetLeft, offsetTop","slug":"offsetleft-offsettop"},{"level":2,"title":"offsetParent","slug":"offsetparent"},{"level":2,"title":"Element\u200B","slug":"element\u200B"},{"level":3,"title":"scroll\u200BLeft","slug":"scroll\u200Bleft"},{"level":3,"title":"scrollTop","slug":"scrolltop"},{"level":3,"title":"scroll\u200BWidth","slug":"scroll\u200Bwidth"},{"level":3,"title":"scrollHeight","slug":"scrollheight"},{"level":3,"title":"clientLeft","slug":"clientleft"},{"level":3,"title":"clientTop","slug":"clienttop"},{"level":3,"title":"clientWidth","slug":"clientwidth"},{"level":3,"title":"clientHeight","slug":"clientheight"}],"relativePath":"learns/javascript/html-element-api.md","lastUpdated":1641819438381}',r={},u=o('<p><div class="table-of-contents"><ul><li><a href="#offsetheight-offsetwidth">offsetHeight, offsetWidth</a><ul><li><a href="#\u4F7F\u7528\u65B9\u6CD5">\u4F7F\u7528\u65B9\u6CD5</a></li></ul></li><li><a href="#offsetleft-offsettop">offsetLeft, offsetTop</a></li><li><a href="#offsetparent">offsetParent</a></li><li><a href="#element\u200B">Element\u200B</a><ul><li><a href="#scroll\u200Bleft">scroll\u200BLeft</a></li><li><a href="#scrolltop">scrollTop</a></li><li><a href="#scroll\u200Bwidth">scroll\u200BWidth</a></li><li><a href="#scrollheight">scrollHeight</a></li><li><a href="#clientleft">clientLeft</a></li><li><a href="#clienttop">clientTop</a></li><li><a href="#clientwidth">clientWidth</a></li><li><a href="#clientheight">clientHeight</a></li></ul></li></ul></div></p><h1 id="\u91CD\u5B66\u4E4B-javascript-html-element-\u5E38\u7528-api-\u89E3\u6790" tabindex="-1">\u91CD\u5B66\u4E4B JavaScript HTML Element \u5E38\u7528 API \u89E3\u6790 <a class="header-anchor" href="#\u91CD\u5B66\u4E4B-javascript-html-element-\u5E38\u7528-api-\u89E3\u6790" aria-hidden="true">#</a></h1><h2 id="offsetheight-offsetwidth" tabindex="-1">offsetHeight, offsetWidth <a class="header-anchor" href="#offsetheight-offsetwidth" aria-hidden="true">#</a></h2><p>HTMLElement.offsetHeight \u662F\u4E00\u4E2A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u5B83\u8FD4\u56DE\u8BE5\u5143\u7D20\u7684\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u9AD8\u5EA6\u5305\u542B\u8BE5\u5143\u7D20\u7684\u5782\u76F4\u5185\u8FB9\u8DDD\u548C\u8FB9\u6846\uFF0C\u4E14\u662F\u4E00\u4E2A\u6574\u6570\u3002</p><p>HTMLElement.offsetWidth \u662F\u4E00\u4E2A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5143\u7D20\u7684\u5E03\u5C40\u5BBD\u5EA6\u3002\u4E00\u4E2A\u5178\u578B\u7684\uFF08\u8BD1\u8005\u6CE8\uFF1A\u5404\u6D4F\u89C8\u5668\u7684 offsetWidth \u53EF\u80FD\u6709\u6240\u4E0D\u540C\uFF09offsetWidth \u662F\u6D4B\u91CF\u5305\u542B\u5143\u7D20\u7684\u8FB9\u6846(border)\u3001\u6C34\u5E73\u7EBF\u4E0A\u7684\u5185\u8FB9\u8DDD(padding)\u3001\u7AD6\u76F4\u65B9\u5411\u6EDA\u52A8\u6761(scrollbar)\uFF08\u5982\u679C\u5B58\u5728\u7684\u8BDD\uFF09\u3001\u4EE5\u53CA CSS \u8BBE\u7F6E\u7684\u5BBD\u5EA6(width)\u7684\u503C\u3002</p><p>\u901A\u5E38\uFF0C\u5143\u7D20\u7684 offsetHeight \u662F\u4E00\u79CD\u5143\u7D20 CSS \u9AD8\u5EA6\u7684\u8861\u91CF\u6807\u51C6\uFF0C\u5305\u62EC\u5143\u7D20\u7684\u8FB9\u6846\u3001\u5185\u8FB9\u8DDD\u548C\u5143\u7D20\u7684\u6C34\u5E73\u6EDA\u52A8\u6761\uFF08\u5982\u679C\u5B58\u5728\u4E14\u6E32\u67D3\u7684\u8BDD\uFF09\uFF0C\u4E0D\u5305\u542B:before \u6216:after \u7B49\u4F2A\u7C7B\u5143\u7D20\u7684\u9AD8\u5EA6\u3002</p><p>\u5BF9\u4E8E\u6587\u6863\u7684 body \u5BF9\u8C61\uFF0C\u5B83\u5305\u62EC\u4EE3\u66FF\u5143\u7D20\u7684 CSS \u9AD8\u5EA6\u7EBF\u6027\u603B\u542B\u91CF\u9AD8\u3002\u6D6E\u52A8\u5143\u7D20\u7684\u5411\u4E0B\u5EF6\u4F38\u5185\u5BB9\u9AD8\u5EA6\u662F\u88AB\u5FFD\u7565\u7684\u3002</p><blockquote><p>\u8FD9\u4E2A\u5C5E\u6027\u503C\u4F1A\u88AB\u56DB\u820D\u4E94\u5165\u4E3A\u6574\u6570\u503C\uFF0C\u5982\u679C\u4F60\u9700\u8981\u4E00\u4E2A\u6D6E\u70B9\u6570\u503C\uFF0C\u8BF7\u7528 element.getBoundingClientRect()</p></blockquote>',8),d=n("div",{class:"language-html line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
  `),n("span",{class:"token selector"},"#myDIV"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 250px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 400px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 15px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 5px solid red"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t(" lightblue"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token comment"},"/* box-sizing: content-box; */"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("myDIV"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b")]),n("span",{class:"token punctuation"},">")]),t("Information about this div:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  Height: 250px`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  Width: 400px`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  padding: 10px`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  margin: 15px`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  border: 5px`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"onclick"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value javascript language-javascript"},[n("span",{class:"token function"},"myFunction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Try it"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
  `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"myFunction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"var"),t(" elmnt "),n("span",{class:"token operator"},"="),t(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'myDIV'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"var"),t(" txt "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'Height including padding and border: '"),t(),n("span",{class:"token operator"},"+"),t(" elmnt"),n("span",{class:"token punctuation"},"."),t("offsetHeight "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"'px<br>'"),n("span",{class:"token punctuation"},";"),t(`
    txt `),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token string"},"'Width including padding and border: '"),t(),n("span",{class:"token operator"},"+"),t(" elmnt"),n("span",{class:"token punctuation"},"."),t("offsetWidth "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"'px<br>'"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"var"),t(" rect "),n("span",{class:"token operator"},"="),t(" elmnt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBoundingClientRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    txt `),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token string"},"'Width from getBoundingClientRect():'"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token punctuation"},"("),t("rect"),n("span",{class:"token punctuation"},"."),t("right "),n("span",{class:"token operator"},"-"),t(" rect"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"'px<br>'"),n("span",{class:"token punctuation"},";"),t(`
    txt `),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token string"},"'Height from getBoundingClientRect():'"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token punctuation"},"("),t("rect"),n("span",{class:"token punctuation"},"."),t("bottom "),n("span",{class:"token operator"},"-"),t(" rect"),n("span",{class:"token punctuation"},"."),t("top"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"'px'"),n("span",{class:"token punctuation"},";"),t(`

    document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'demo'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("innerHTML "),n("span",{class:"token operator"},"="),t(" txt"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br")])],-1),h=n("blockquote",null,[n("p",null,"\u4F46\u662F\uFF0C\u5B83\u4F1A\u53D7\u5230 box-sizing \u5C5E\u6027\u7684\u5E72\u6270\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u76F8\u5F53\u4E8E box-sizing: content-box;")],-1),k=n("h3",{id:"\u4F7F\u7528\u65B9\u6CD5",tabindex:"-1"},[t("\u4F7F\u7528\u65B9\u6CD5 "),n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u65B9\u6CD5","aria-hidden":"true"},"#")],-1),f=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),t(" intElemOffsetHeight "),n("span",{class:"token operator"},"="),t(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),t("id_attribute_value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("offsetHeight"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"var"),t(" intElemOffsetWidth "),n("span",{class:"token operator"},"="),t(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),t("id_attribute_value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("offsetWidth"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),m=n("h2",{id:"offsetleft-offsettop",tabindex:"-1"},[t("offsetLeft, offsetTop "),n("a",{class:"header-anchor",href:"#offsetleft-offsettop","aria-hidden":"true"},"#")],-1),b=n("p",null,"HTMLElement.offsetLeft \u662F\u4E00\u4E2A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u8FD4\u56DE\u5F53\u524D\u5143\u7D20\u5DE6\u4E0A\u89D2\u76F8\u5BF9\u4E8E HTMLElement.offsetParent \u8282\u70B9\u7684\u5DE6\u8FB9\u754C\u504F\u79FB\u7684\u50CF\u7D20\u503C\u3002",-1),g=n("p",null,"\u5BF9\u5757\u7EA7\u5143\u7D20\u6765\u8BF4\uFF0CoffsetTop\u3001offsetLeft\u3001offsetWidth \u53CA offsetHeight \u63CF\u8FF0\u4E86\u5143\u7D20\u76F8\u5BF9\u4E8E offsetParent \u7684\u8FB9\u754C\u6846\u3002",-1),_=n("p",null,"\u7136\u800C\uFF0C\u5BF9\u4E8E\u53EF\u88AB\u622A\u65AD\u5230\u4E0B\u4E00\u884C\u7684\u884C\u5185\u5143\u7D20\uFF08\u5982 span\uFF09\uFF0CoffsetTop \u548C offsetLeft \u63CF\u8FF0\u7684\u662F\u7B2C\u4E00\u4E2A\u8FB9\u754C\u6846\u7684\u4F4D\u7F6E\uFF08\u4F7F\u7528 Element.getClientRects() \u6765\u83B7\u53D6\u5176\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF09\uFF0C\u800C offsetWidth \u548C offsetHeight \u63CF\u8FF0\u7684\u662F\u8FB9\u754C\u6846\u7684\u5C3A\u5BF8\uFF08\u4F7F\u7528 Element.getBoundingClientRect \u6765\u83B7\u53D6\u5176\u4F4D\u7F6E\uFF09\u3002\u56E0\u6B64\uFF0C\u4F7F\u7528 offsetLeft\u3001offsetTop\u3001offsetWidth\u3001offsetHeight \u6765\u5BF9\u5E94 left\u3001top\u3001width \u548C height \u7684\u4E00\u4E2A\u76D2\u5B50\u5C06\u4E0D\u4F1A\u662F\u6587\u672C\u5BB9\u5668 span \u7684\u76D2\u5B50\u8FB9\u754C\u3002",-1),v=n("div",{class:"language-html line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
  `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 300px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),t("blue"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-style"),n("span",{class:"token punctuation"},":"),t("solid"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"border-width"),n("span",{class:"token punctuation"},":"),t("1"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
`),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("Short span. "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("long"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Long span that wraps withing this div."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
  `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("box"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),t(" red"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-width"),n("span",{class:"token punctuation"},":"),t(" 1"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"border-style"),n("span",{class:"token punctuation"},":"),t(" solid"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"z-index"),n("span",{class:"token punctuation"},":"),t(" 10")]),n("span",{class:"token punctuation"},'"')])]),t(`
`),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
  `),n("span",{class:"token keyword"},"var"),t(" box "),n("span",{class:"token operator"},"="),t(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'box'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"var"),t(" long "),n("span",{class:"token operator"},"="),t(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'long'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token comment"},"//"),t(`
  `),n("span",{class:"token comment"},"// long.offsetLeft\u8FD9\u4E2A\u503C\u5C31\u662Fspan\u7684offsetLeft."),t(`
  `),n("span",{class:"token comment"},"// span\u662F\u4E2A\u884C\u5185\u5143\u7D20\uFF0C\u5B83\u6CA1\u6709absolute\u5B9A\u4F4D\uFF0C\u4F46\u8FD8\u662F\u9ED8\u8BA4offsetParent\u5C31\u662F\u7236\u5143\u7D20\uFF0C\u800C\u4E0D\u662F\u6839"),t(`
  `),n("span",{class:"token comment"},"//"),t(`

  box`),n("span",{class:"token punctuation"},"."),t("style"),n("span",{class:"token punctuation"},"."),t("left "),n("span",{class:"token operator"},"="),t(" long"),n("span",{class:"token punctuation"},"."),t("offsetLeft "),n("span",{class:"token operator"},"+"),t(" document"),n("span",{class:"token punctuation"},"."),t("body"),n("span",{class:"token punctuation"},"."),t("scrollLeft "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"'px'"),n("span",{class:"token punctuation"},";"),t(`
  box`),n("span",{class:"token punctuation"},"."),t("style"),n("span",{class:"token punctuation"},"."),t("top "),n("span",{class:"token operator"},"="),t(" long"),n("span",{class:"token punctuation"},"."),t("offsetTop "),n("span",{class:"token operator"},"+"),t(" document"),n("span",{class:"token punctuation"},"."),t("body"),n("span",{class:"token punctuation"},"."),t("scrollTop "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"'px'"),n("span",{class:"token punctuation"},";"),t(`
  box`),n("span",{class:"token punctuation"},"."),t("style"),n("span",{class:"token punctuation"},"."),t("width "),n("span",{class:"token operator"},"="),t(" long"),n("span",{class:"token punctuation"},"."),t("offsetWidth "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"'px'"),n("span",{class:"token punctuation"},";"),t(`
  box`),n("span",{class:"token punctuation"},"."),t("style"),n("span",{class:"token punctuation"},"."),t("height "),n("span",{class:"token operator"},"="),t(" long"),n("span",{class:"token punctuation"},"."),t("offsetHeight "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"'px'"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br")])],-1),w=o('<p><img src="https://developer.mozilla.org/@api/deki/files/790/=OffsetLeft.jpg" alt="img"></p><h2 id="offsetparent" tabindex="-1">offsetParent <a class="header-anchor" href="#offsetparent" aria-hidden="true">#</a></h2><p>HTMLElement.offsetParent \u662F\u4E00\u4E2A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u6700\u8FD1\u7684\uFF08closest\uFF0C\u6307\u5305\u542B\u5C42\u7EA7\u4E0A\u7684\u6700\u8FD1\uFF09\u5305\u542B\u8BE5\u5143\u7D20\u7684\u5B9A\u4F4D\u5143\u7D20\u3002\u5982\u679C\u6CA1\u6709\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u5219 offsetParent \u4E3A\u6700\u8FD1\u7684 table, table cell \u6216\u6839\u5143\u7D20\uFF08\u6807\u51C6\u6A21\u5F0F\u4E0B\u4E3A html\uFF1Bquirks \u6A21\u5F0F\u4E0B\u4E3A body\uFF09\u3002\u5F53\u5143\u7D20\u7684 style.display \u8BBE\u7F6E\u4E3A &quot;none&quot; \u65F6\uFF0CoffsetParent \u8FD4\u56DE null\u3002offsetParent \u5F88\u6709\u7528\uFF0C\u56E0\u4E3A offsetTop \u548C offsetLeft \u90FD\u662F\u76F8\u5BF9\u4E8E\u5176\u5185\u8FB9\u8DDD\u8FB9\u754C\u7684\u3002</p><h2 id="element\u200B" tabindex="-1">Element\u200B <a class="header-anchor" href="#element\u200B" aria-hidden="true">#</a></h2><h3 id="scroll\u200Bleft" tabindex="-1">scroll\u200BLeft <a class="header-anchor" href="#scroll\u200Bleft" aria-hidden="true">#</a></h3><p>The Element.scrollLeft property gets or sets the number of pixels that an element&#39;s content is scrolled from its left edge.</p><p>If the element&#39;s direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position (at the start of the scrolled content), and then increasingly negative as you scroll towards the end of the content.</p>',7),y=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// Get the number of pixels scrolled"),t(`
`),n("span",{class:"token keyword"},"var"),t(" sLeft "),n("span",{class:"token operator"},"="),t(" element"),n("span",{class:"token punctuation"},"."),t("scrollLeft"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br")])],-1),T=n("p",null,"sLeft is an integer representing the number of pixels that element has been scrolled from the left edge.",-1),x=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// Set the number of pixels scrolled"),t(`
element`),n("span",{class:"token punctuation"},"."),t("scrollLeft "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br")])],-1),L=n("p",null,"scrollLeft can be specified as any integer value. However:",-1),H=n("ul",null,[n("li",null,"If the element can't be scrolled (e.g., it has no overflow), scrollLeft is set to 0."),n("li",null,"If specified as a value less than 0 (greater than 0 for right-to-left elements), scrollLeft is set to 0."),n("li",null,"If specified as a value greater than the maximum that the content can be scrolled, scrollLeft is set to the maximum.")],-1),E=n("h3",{id:"scrolltop",tabindex:"-1"},[t("scrollTop "),n("a",{class:"header-anchor",href:"#scrolltop","aria-hidden":"true"},"#")],-1),I=n("p",null,"The Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.",-1),S=n("p",null,"An element's scrollTop value is a measurement of the distance from the element's top to its topmost visible content. When an element's content does not generate a vertical scrollbar, then its scrollTop value is 0.",-1),W=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// Get the number of pixels scrolled."),t(`
`),n("span",{class:"token keyword"},"var"),t(" intElemScrollTop "),n("span",{class:"token operator"},"="),t(" someElement"),n("span",{class:"token punctuation"},"."),t("scrollTop"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br")])],-1),q=n("p",null,"After running this code, intElemScrollTop is an integer corresponding to the number of pixels that the element's content has been scrolled upwards.",-1),C=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// Set the number of pixels scrolled."),t(`
element`),n("span",{class:"token punctuation"},"."),t("scrollTop "),n("span",{class:"token operator"},"="),t(" intValue"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br")])],-1),A=o('<p>scrollTop can be set to any integer value, with certain caveats:</p><ul><li>If the element can&#39;t be scrolled (e.g. it has no overflow or if the element has a property of &quot;non-scrollable&quot;), scrollTop is 0.</li><li>scrollTop doesn&#39;t respond to negative values; instead, it sets itself back to 0.</li><li>If set to a value greater than the maximum available for the element, scrollTop settles itself to the maximum value.</li></ul><h3 id="scroll\u200Bwidth" tabindex="-1">scroll\u200BWidth <a class="header-anchor" href="#scroll\u200Bwidth" aria-hidden="true">#</a></h3><p>The Element.scrollWidth read-only property is a measurement of the width of an element&#39;s content, including content not visible on the screen due to overflow.</p><p>The scrollWidth value is equal to the minimum width the element would require in order to fit all the content in the viewport without using a horizontal scrollbar. The width is measured in the same way as clientWidth: <code>it includes the element&#39;s padding, but not its border, margin or vertical scrollbar (if present).</code> It can also include the width of pseudo-elements such as ::before or ::after. If the element&#39;s content can fit without a need for horizontal scrollbar, its scrollWidth is equal to clientWidth</p><blockquote><p>This property will round the value to an integer. If you need a fractional value, use element.getBoundingClientRect().</p></blockquote><h3 id="scrollheight" tabindex="-1">scrollHeight <a class="header-anchor" href="#scrollheight" aria-hidden="true">#</a></h3><p>The Element.scrollHeight read-only property is a measurement of the height of an element&#39;s content, including content not visible on the screen due to overflow.</p><p>The scrollHeight value is equal to the minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar. The height is measured in the same way as clientHeight: <code>it includes the element&#39;s padding, but not its border, margin or horizontal scrollbar (if present). </code>It can also include the height of pseudo-elements such as ::before or ::after. If the element&#39;s content can fit without a need for vertical scrollbar, its scrollHeight is equal to clientHeight</p><blockquote><p>This property will round the value to an integer. If you need a fractional value, use Element.getBoundingClientRect().</p></blockquote><p>\u5224\u65AD\u662F\u5426\u6EDA\u52A8\u5230\u5E95\u90E8</p>',11),P=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// Determine if an element has been totally scrolled"),t(`
element`),n("span",{class:"token punctuation"},"."),t("scrollHeight "),n("span",{class:"token operator"},"-"),t(" element"),n("span",{class:"token punctuation"},"."),t("scrollTop "),n("span",{class:"token operator"},"==="),t(" element"),n("span",{class:"token punctuation"},"."),t("clientHeight"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token comment"},"// When the container does not scroll, but has overflowing children, these checks determine if the container can scroll:"),t(`
window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getComputedStyle"),n("span",{class:"token punctuation"},"("),t("element"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("overflowY "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'visible'"),n("span",{class:"token punctuation"},";"),t(`
window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getComputedStyle"),n("span",{class:"token punctuation"},"("),t("element"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("overflowY "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'hidden'"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br")])],-1),B=o('<h3 id="clientleft" tabindex="-1">clientLeft <a class="header-anchor" href="#clientleft" aria-hidden="true">#</a></h3><p>The width of the left border of an element in pixels. It includes the width of the vertical scrollbar if the text direction of the element is right\u2013to\u2013left and if there is an overflow causing a left vertical scrollbar to be rendered. <code>clientLeft does not include the left margin or the left padding. clientLeft is read-only.</code></p><p>Gecko-based applications support clientLeft starting with Gecko 1.9 (Firefox 3, implemented in bug 111207). This property is not supported in Firefox 2 and earlier.</p><h3 id="clienttop" tabindex="-1">clientTop <a class="header-anchor" href="#clienttop" aria-hidden="true">#</a></h3><p>The width of the top border of an element in pixels. It is a read-only, integer property of element.</p><p>As it happens, all that lies between the two locations (offsetTop and client area top) is the element&#39;s border. This is because the offsetTop indicates the location of the top of the border (not the margin) while the client area starts immediately below the border, (client area includes padding.) Therefore, the clientTop value will always equal the integer portion of the .getComputedStyle() value for &quot;border-top-width&quot;. (Actually might be Math.round(parseFloat()).) For example, if the computed &quot;border-top-width&quot; is zero, then clientTop is also zero.</p><h3 id="clientwidth" tabindex="-1">clientWidth <a class="header-anchor" href="#clientwidth" aria-hidden="true">#</a></h3><p>The Element.clientWidth property is zero for inline elements and elements with no CSS; otherwise, it&#39;s the inner width of an element in pixels. <code>It includes padding but excludes borders, margins, and vertical scrollbars (if present).</code></p><p>intElemClientWidth is an integer corresponding to the clientWidth of element in pixels. The clientWidth property is read\u2013only. <img src="https://developer.mozilla.org/@api/deki/files/185/=Dimensions-client.png" alt="img"></p><h3 id="clientheight" tabindex="-1">clientHeight <a class="header-anchor" href="#clientheight" aria-hidden="true">#</a></h3><p>The Element.clientHeight read-only property is zero for elements with no CSS or inline layout boxes; otherwise, it&#39;s the inner height of an element in pixels. It includes padding but excludes borders, margins, and horizontal scrollbars (if present).</p><p>clientHeight can be calculated as: CSS height + CSS padding - height of horizontal scrollbar (if present).</p><blockquote><p>This property will round the value to an integer. If you need a fractional value, use element.getBoundingClientRect().</p></blockquote>',13);function V(j,z,R,D,M,N){const s=c("code-block");return i(),p("div",null,[u,e(s,{showAction:!1},{default:a(()=>[d]),_:1}),h,k,e(s,{showAction:!1},{default:a(()=>[f]),_:1}),m,b,g,_,e(s,{showAction:!1},{default:a(()=>[v]),_:1}),w,e(s,{showAction:!1},{default:a(()=>[y]),_:1}),T,e(s,{showAction:!1},{default:a(()=>[x]),_:1}),L,H,E,I,S,e(s,{showAction:!1},{default:a(()=>[W]),_:1}),q,e(s,{showAction:!1},{default:a(()=>[C]),_:1}),A,e(s,{showAction:!1},{default:a(()=>[P]),_:1}),B])}var $=l(r,[["render",V]]);export{G as __pageData,$ as default};
