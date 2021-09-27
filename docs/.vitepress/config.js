const env = process.env.ENV || 'dev';

module.exports = {
  lang: "zh-CN",
  title: "yui",
  base: env === 'dev' ? "/" : "/yoga-ui/",
  description: "Vue.js 3 Component Library",

  vite: {
    define: {
      "process.env.BUILD": '"web"', // for vuelidate works
    },
  },

  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(require("./code-wrapper-plugin"));
    },
  },
  themeConfig: {
    repo: "Luoyangs/yoga-ui",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    nav: [
      { text: 'Components', link: '/', activeMatch: '^/$|^/guide/' },
      { text: 'Utils', link: '/utils/index', activeMatch: '^/utils/' },
      {
        text: 'Reference',
        link: '/learns/index',
        activeMatch: '^/learns/'
      },
    ],
    sidebar: {
      "/learns": getLearnSidebar(),
      "/utils": [],
      "/": getGuideSidebar(),
    },
  },
};

function getGuideSidebar() {
  return [
    {
      text: "INTRODUCE",
      children: [
        { text: "Home", link: "/" },
        { text: "Getting Started", link: "/getting-started" },
      ],
    },
    {
      text: "COMPONENTS",
      children: [
        { text: "Icon", link: "/components/icon" },
        { text: "Button", link: "/components/button" },
        { text: "Radio", link: "/components/radio" },
        { text: "Form", link: "/components/form" },
      ],
    },
  ];
}

function getLearnSidebar() {
  return [
    {
      text: "部署",
      children: [
        { text: "部署", link: "/learns/deploy/test" },
      ],
    },
    {
      text: "JavaScript",
      children: [
        { text: "JavaScript基础", link: "/learns/javascript/base" },
      ],
    },
  ];
}
