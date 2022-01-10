import{_ as n,r as t,c as l,a as r,w as o,e as s,o as p,d as e,b as a}from"./app.6f31ad5d.js";const I='{"title":"\u4E3A Github Page \u96C6\u6210 Travis CI","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5199\u5728\u524D\u9762","slug":"\u5199\u5728\u524D\u9762"},{"level":2,"title":"\u4F7F\u7528 Travis CI \u7684\u8FC7\u7A0B\uFF1A","slug":"\u4F7F\u7528-travis-ci-\u7684\u8FC7\u7A0B\uFF1A"},{"level":2,"title":"\u914D\u7F6E GITHUB_TOKEN","slug":"\u914D\u7F6E-github-token"},{"level":2,"title":"\u542F\u7528 Github Pages","slug":"\u542F\u7528-github-pages"}],"relativePath":"learns/deploy/add-travis-ci.md","lastUpdated":1641819438371}',c={},b=s('',9),u=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[a(`bunlanguage: node_js
node_js:
  - lts/*
install:
  - `),e("span",{class:"token function"},"yarn"),a(),e("span",{class:"token function"},"install"),a(`
before_script:
  - `),e("span",{class:"token function"},"rm"),a(` -rf docs/.vitepress/dist
  - node bin/deploy.js
script:
  - `),e("span",{class:"token function"},"yarn"),a(` build
  - `),e("span",{class:"token assign-left variable"},"ENV"),e("span",{class:"token operator"},"="),a("prod "),e("span",{class:"token function"},"yarn"),a(` vitepress build docs
  - node bin/append-meta.js
deploy:
  provider: pages
  skip_cleanup: `),e("span",{class:"token boolean"},"true"),a(`
  local_dir: docs/.vitepress/dist
  github_token: `),e("span",{class:"token variable"},"$GITHUB_TOKEN"),a(`
  keep_history: `),e("span",{class:"token boolean"},"false"),a(`
  on:
    branch: master
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br")])],-1),h=s('',6);function d(g,_,m,v,T,f){const i=t("code-block");return p(),l("div",null,[b,r(i,{showAction:!1},{default:o(()=>[u]),_:1}),h])}var C=n(c,[["render",d]]);export{I as __pageData,C as default};
