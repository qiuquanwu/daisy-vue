const env = process.env.ENV || 'dev';
const routes = require('./routes.json');

module.exports = {
  lang: 'zh-CN',
  title: 'daisy-vue',
  base: env === 'dev' ? '/' : '/daisy-vue/',
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
    repo: 'Luoyangs/yoga-ui',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: false,
    nav: [
      { text: '首页', link: '/getting-started', activeMatch: '^/getting-started$' },
      { text: '组件', link: '/components/index', activeMatch: '^/components/' },
      { text: 'utils', link: '/utils/index', activeMatch: '^/utils/' },
      {
        text: 'Reference',
        link: '/learns/index',
        activeMatch: '^/learns/',
      },
    ],
    sidebar: {
      '/getting-started': [],
      '/learns': getLearnSidebar(),
      '/utils': [],
      '/components': getGuideSidebar(),
      '/': [],
    },
  },
};

function getGuideSidebar() {
  const forms = [
    // { text: '图标 Icon', link: '/components/icon' },
    { text: '按钮 Button', link: '/components/button' },

    { text: '提示 Alert', link: '/components/alert' },
    // { text: '单选框 Radio', link: '/components/radio' },
    // { text: '复选框 Checkbox', link: '/components/checkbox' },
    // { text: '开关 Switch', link: '/components/switch' },
    // { text: '输入框 Input', link: '/components/input' },
    // { text: '表单 Form', link: '/components/form' },
  ];
  const messages = [
    { text: '安装', link: '/components/popper' },
    { text: '切换主题', link: '/components/tooltip' },
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
