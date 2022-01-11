const env = process.env.ENV || 'dev';
const routes = require('./routes.json');

module.exports = {
  lang: 'zh-CN',
  title: 'daisy-vue',
  base: env === 'dev' ? '/' : 'daisy-vue/',
  description: 'Vue.js 3 Component Library',

  vite: {
    define: {
      'process.env.BUILD': '"web"', // for vuelidate works
    },
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3] },
    config: (md) => {
      md.use(require('./code-wrapper-plugin'));
      const render = md.render;
      const wrappedRender = (src) => {
        if (src.toLowerCase().indexOf('[[toc]]') === -1) {
          src = '[[toc]]\n' + src;
        }

        md.__data = {};
        const html = render.call(md, src);
        const matches = html.match(/<h1 id="([a-zA-Z-]+)"/); // 获取当前页面h1标签id
        if (matches) {
          return `<div class="page-container ${matches[1]}-pages">${html}</div>`;
        }
        return html;
      };
      md.render = wrappedRender;
      return md;
    },
  },
  themeConfig: {
    repo: 'qiuquanwu/daisy-vue',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: false,
    nav: [
      { text: '首页', link: '/getting-started', activeMatch: '^/getting-started$' },
      { text: '组件', link: '/components/index', activeMatch: '^/components/' },
      { text: 'utils', link: '/utils/index', activeMatch: '^/utils/' },
    ],
    sidebar: {
      '/getting-started': [],
      '/utils': [],
      '/components': getGuideSidebar(),
      '/': [],
    },
  },
};

function getGuideSidebar() {
  const forms = [
    { text: '按钮 Button', link: '/components/button' },
    { text: '提示 Alert', link: '/components/alert' },
    { text: '图标 Icon', link: '/components/icon' },
    { text: '头像 Avatar', link: '/components/avatar' },
  ];
  const messages = [
    { text: '起步', link: '/components/index' },
    { text: '切换主题', link: '/components/theme' },
  ];

  return [
    {
      text: '使用教程 (' + messages.length + ')',
      children: messages,
    },
    {
      text: '基本组件 (' + forms.length + ')',
      children: forms,
    },
  ];
}

function getLearnSidebar() {
  return routes;
}
