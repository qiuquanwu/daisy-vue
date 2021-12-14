const env = process.env.ENV || "dev";
const routes = require("./routes.json");

module.exports = {
  lang: "zh-CN",
  title: "yoga-ui",
  base: env === "dev" ? "/" : "/yoga-ui/",
  description: "Vue.js 3 Component Library",

  vite: {
    define: {
      "process.env.BUILD": '"web"', // for vuelidate works
    },
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3] },
    config: (md) => {
      md.use(require("./code-wrapper-plugin"));
      const render = md.render
      const wrappedRender = (src) => {
        if (src.toLowerCase().indexOf('[[toc]]') === -1) {
          src = '[[toc]]\n' + src;
        }

        md.__data = {}
        const html = render.call(md, src)
        const matches = html.match(/<h1 id="([a-zA-Z-]+)"/) // 获取当前页面h1标签id
        if (matches) {
          return `<div class="page-container ${matches[1]}-pages">${html}</div>`
        }
        return html
      };
      md.render = wrappedRender;
      return md;
    },
  },
  themeConfig: {
    repo: "Luoyangs/yoga-ui",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: false,
    nav: [
      { text: "Quick Start", link: "/getting-started", activeMatch: "^/getting-started$" },
      { text: "Components", link: "/components/index", activeMatch: "^/components/" },
      { text: "Utils", link: "/utils/index", activeMatch: "^/utils/" },
      {
        text: "Reference",
        link: "/learns/index",
        activeMatch: "^/learns/"
      },
    ],
    sidebar: {
      "/getting-started": [],
      "/learns": getLearnSidebar(),
      "/utils": [],
      "/components": getGuideSidebar(),
      "/": [],
    },
  },
};

function getGuideSidebar() {
  const forms = [
    { text: "图标 Icon", link: "/components/icon" },
    { text: "按钮 Button", link: "/components/button" },
    { text: "单选框 Radio", link: "/components/radio" },
    { text: "复选框 Checkbox", link: "/components/checkbox" },
    { text: "开关 Switch", link: "/components/switch" },
    { text: "输入框 Input", link: "/components/input" },
    { text: "表单 Form", link: "/components/form" },
  ];
  const messages = [
    { text: '定位引擎 Popper', link: "/components/popper" },
    { text: '文字提示 Tooltip', link: "/components/tooltip" },
  ];

  return [
    {
      text: "表单组件 (" + forms.length + ")",
      children: forms,
    },
    {
      text: "展示组件 (" + messages.length + ")",
      children: messages,
    },
  ];
}

function getLearnSidebar() {
  return routes;
}
