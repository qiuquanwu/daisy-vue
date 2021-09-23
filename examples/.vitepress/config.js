module.exports = {
  lang: "zh-CN",
  title: "yui",
  base: "/yoga-ui/",
  description: "Vue.js 3 Component Library",

  vite: {
    define: {
      "process.env.BUILD": '"web"', // for vuelidate works
    },
  },

  markdown: {
    lineNumbers: true,
    anchor: { permalink: true },
    config: (md) => {
      md.use(require("./code-wrapper-plugin"));
    },
  },
  themeConfig: {
    repo: "Luoyangs/yoga-ui",
    docsRepo: "Luoyangs/yoga-ui",
    docsDir: "examples",
    docsBranch: "master",
    editLinks: true,
    sidebar: {
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
