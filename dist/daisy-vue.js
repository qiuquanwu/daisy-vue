/**
 * Vue 3 Component UI Library 1.0.0
 * (c) 2022
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["daisy-vue"] = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var version = "1.0.0";

  console.log('pkg', version);
  function create({ componentPrefix = '', components = [] } = {}) {
      const installTargets = [];
      function registerComponent(app, name, component) {
          const registered = app.component(componentPrefix + name);
          if (!registered) {
              app.component(componentPrefix + name, component);
          }
      }
      function install(app) {
          if (installTargets.includes(app))
              return;
          installTargets.push(app);
          components.forEach((component) => {
              registerComponent(app, component.name, component);
          });
      }
      return {
          version,
          install,
          componentPrefix,
      };
  }

  function copySvgAttrs(svgEle) {
      const svgAttrs = {};
      if (svgEle && svgEle.attributes) {
          const attrs = svgEle.attributes;
          for (let i = attrs.length - 1; i >= 0; i--) {
              svgAttrs[attrs[i].name] = attrs[i].value;
          }
      }
      return svgAttrs;
  }
  function filterAttrs(attrs) {
      return Object.keys(attrs).reduce((result, key) => {
          if (attrs[key] !== false && attrs[key] !== null && attrs[key] !== undefined) {
              result[key] = attrs[key];
          }
          return result;
      }, {});
  }
  function download(url) {
      return makePromiseState(new Promise((resolve, reject) => {
          const request = new XMLHttpRequest();
          request.open('GET', url, true);
          request.onload = () => {
              if (request.status >= 200 && request.status < 400) {
                  try {
                      const parser = new DOMParser();
                      const result = parser.parseFromString(request.responseText, 'text/xml');
                      const svgEle = result.getElementsByTagName('svg')[0];
                      if (svgEle) {
                          resolve(svgEle);
                      }
                      else {
                          reject(new Error('Loaded file is not valid SVG'));
                      }
                  }
                  catch (error) {
                      reject(error);
                  }
              }
          };
          request.onerror = reject;
          request.send();
      }));
  }
  function makePromiseState(promise) {
      // 如果一个Promise已经就绪，不允许更改它的状态
      if (promise.isPending) {
          return promise;
      }
      let isPending = true;
      const result = promise.then((v) => {
          isPending = false;
          return v;
      }, (e) => {
          isPending = false;
          return e;
      });
      result.isPending = function getIsPending() {
          return isPending;
      };
      return result;
  }

  const cache = {};
  var Icon = vue.defineComponent({
      name: 'Icon',
      inheritAttrs: false,
      props: {
          src: {
              type: String,
              required: true,
          },
      },
      data() {
          return {
              svgEle: null,
          };
      },
      watch: {
          src: {
              handler(svgSrc) {
                  this.$nextTick(() => {
                      this.getSource(svgSrc);
                  });
              },
              immediate: true,
          },
      },
      methods: {
          async getSource(svgSrc) {
              if (!cache[svgSrc]) {
                  // download
                  cache[svgSrc] = download(svgSrc);
              }
              try {
                  this.svgEle = await cache[svgSrc];
                  this.$nextTick(() => {
                      // this.$emit('loaded');
                  });
              }
              catch (err) {
                  delete cache[svgSrc];
                  this.svgEle = null;
                  // this.$emit('error', err);
              }
          },
      },
      render() {
          const { svgEle } = this;
          if (!svgEle) {
              return null;
          }
          const svg = vue.h('svg', {
              ...copySvgAttrs(svgEle),
              ...filterAttrs(this.$attrs),
              innerHTML: svgEle.cloneNode(true).innerHTML,
          });
          return vue.h('i', {}, svg);
      },
  });

  const _hoisted_1$1 = ["disabled"];
  var script$1 = /*#__PURE__*/ vue.defineComponent({
      props: {
          type: { type: null, required: false },
          disabled: { type: Boolean, required: false, default: false },
          outline: { type: Boolean, required: false, default: false },
          size: { type: null, required: false, default: 'normal' },
          icon: { type: null, required: false },
          iconPostion: { type: String, required: false, default: 'left' }
      },
      setup(__props) {
          const props = __props;
          const { type, disabled, outline, size, icon, iconPostion } = props;
          /**
           * 判断icon是否合理
           * @param value
           * @return boolean
           */
          // 获取语言
          // const lang = inject<string>("lang") ? inject<string>("lang") : "zh";
          /**
           * 返回计算后的icon
           * @return IconType
           */
          const iconCpd = vue.computed(() => {
              return typeof icon === 'string' ? vue.h(Icon, { src: icon, fill: 'currentColor' }, null) : icon;
          });
          //判断大小是不是Small或者Tiny
          const isSmallOrTiny = (size) => {
              return ['small', 'tiny'].includes(size);
          };
          const iconClass = vue.computed(() => {
              // inline-block w-6 h-6 mr-2 stroke-current
              let res = ['inline-block', 'stroke-current'];
              if (isSmallOrTiny(size)) {
                  res.push('w-4 h-4');
                  if (hasLeftIcon.value) {
                      res.push('mr-1');
                  }
                  else {
                      res.push('ml-1');
                  }
              }
              else {
                  res.push('w-6 h-6');
                  if (hasLeftIcon.value) {
                      res.push('mr-2');
                  }
                  else {
                      res.push('ml-2');
                  }
              }
              return res.join(' ');
          });
          const hasLeftIcon = vue.computed(() => {
              return icon && iconPostion === 'left';
          });
          const hasRightIcon = vue.computed(() => {
              return icon && iconPostion === 'right';
          });
          /**
           * 动态获取按钮样式
           */
          const typeCls = new Map([
              ['primary', 'btn-primary'],
              ['secondary', 'btn-secondary'],
              ['accent', 'btn-accent'],
              ['ghost', 'btn-ghost'],
              ['link', 'btn-link'],
              ['info', 'btn-info'],
              ['success', 'btn-success'],
              ['warning', 'btn-warning'],
              ['error', 'btn-error'],
          ]).get(type);
          /**
           * 动态处理按钮大小
           */
          const sizeCls = new Map([
              ['large', 'btn-lg'],
              ['small', 'btn-sm'],
              ['tiny', 'btn-xs'],
          ]).get(size);
          /**
           * @return string 返回计算后的class
           */
          const classStr = vue.computed(() => {
              let res = ['btn'];
              outline && res.push('btn-outline');
              type && res.push(typeCls);
              size && size !== 'normal' && res.push(sizeCls);
              return res.join(' ');
          });
          return (_ctx, _cache) => {
              return (vue.openBlock(), vue.createElementBlock("button", {
                  class: vue.normalizeClass(vue.unref(classStr)),
                  disabled: vue.unref(disabled)
              }, [
                  (vue.unref(hasLeftIcon))
                      ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(iconCpd)), {
                          key: 0,
                          class: vue.normalizeClass(vue.unref(iconClass))
                      }, null, 8 /* PROPS */, ["class"]))
                      : vue.createCommentVNode("v-if", true),
                  vue.renderSlot(_ctx.$slots, "default"),
                  (vue.unref(hasRightIcon))
                      ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(iconCpd)), {
                          key: 1,
                          class: vue.normalizeClass(vue.unref(iconClass))
                      }, null, 8 /* PROPS */, ["class"]))
                      : vue.createCommentVNode("v-if", true)
              ], 10 /* CLASS, PROPS */, _hoisted_1$1));
          };
      }
  });

  script$1.__file = "src/components/button/src/Button.vue";

  script$1.name = 'd-button';

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   * IMPORTANT: all calls of this function must be prefixed with
   * \/\*#\_\_PURE\_\_\*\/
   * So that rollup can tree-shake them if necessary.
   */

  (process.env.NODE_ENV !== 'production')
      ? Object.freeze({})
      : {};
  (process.env.NODE_ENV !== 'production') ? Object.freeze([]) : [];
  const isArray = Array.isArray;

  const avatarProps = {
      src: {
          type: String,
          required: true,
      },
      size: {
          type: [String, Array],
          default: 'default',
      },
      circle: {
          type: Boolean,
          default: false,
      },
      online: {
          type: Boolean,
          default: undefined,
      },
  };

  var avatar = vue.defineComponent({
      name: 'DAvatar',
      props: avatarProps,
      setup(props, { slots }) {
          return () => {
              const { src, size, circle, online } = props;
              const style = vue.computed(() => {
                  if (typeof size === 'string') {
                      let num = new Map([
                          ['large', 6],
                          ['default', 5],
                          ['small', 4],
                          ['tiny', 3],
                      ]).get(size);
                      return {
                          height: num + 'rem',
                          width: num + 'rem',
                      };
                  }
                  else if (isArray(size) && size.length === 2) {
                      return {
                          height: size[0] + 'px',
                          width: size[1] + 'px',
                      };
                  }
                  return {};
              });
              // console.log(style.value);
              const classCls = vue.computed(() => {
                  let temp = [];
                  circle ? temp.push('rounded-full') : temp.push('rounded-btn');
                  return temp.join(' ');
              });
              const mainCls = vue.computed(() => {
                  let temp = ['avatar'];
                  if (typeof online === 'boolean') {
                      online ? temp.push('online') : temp.push('offline');
                  }
                  return temp.join(' ');
              });
              return (vue.h("div", { class: mainCls.value },
                  vue.h("div", { class: classCls.value, style: style.value },
                      vue.h("img", { src: src }))));
          };
      },
  });

  const createIcon = (icon) => {
      return typeof icon === 'string' ? vue.h(Icon, { src: icon, fill: 'currentColor' }, null) : icon;
  };

  var error = "data:image/svg+xml,%3Csvg%20t%3D%221641641111331%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%221221%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M512%20720m-48%200a48%2048%200%201%200%2096%200%2048%2048%200%201%200-96%200Z%22%20p-id%3D%221222%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M480%20416v184c0%204.4%203.6%208%208%208h48c4.4%200%208-3.6%208-8V416c0-4.4-3.6-8-8-8h-48c-4.4%200-8%203.6-8%208z%22%20p-id%3D%221223%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M955.7%20856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6%205.3-27.7%2016l-416%20720C56%20877.4%2071.4%20904%2096%20904h832c24.6%200%2040-26.6%2027.7-48z%20m-783.5-27.9L512%20239.9l339.8%20588.2H172.2z%22%20p-id%3D%221224%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";

  var info = "data:image/svg+xml,%3Csvg%20t%3D%221641641300423%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%224318%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M925.007405%20706.493669c-9.007141-8.121981-23.219841-18.370393-42.243103-30.456662-5.865591-3.725858-9.318226-10.111289-9.238408-17.07898l0.031722-2.539846c0.60989-51.78134%201.529843-130.034589-12.19167-209.543434-16.686031-96.679923-51.42216-172.286901-103.242386-224.720088-40.829917-41.314964-92.434226-68.674079-154.064888-81.818447-3.056616-19.094894-12.19781-36.341696-26.516934-49.569976-17.135262-15.8285-40.165792-24.546046-64.846914-24.546046-24.679076%200-47.709605%208.718569-64.844867%2024.546046-14.31503%2013.222139-23.455201%2030.463826-26.514887%2049.552579-61.343113%2013.07069-112.581078%2040.223097-152.97302%2081.204463-117.15014%20118.866225-114.199948%20322.050834-112.614847%20431.207929l0.085958%205.973038c0.099261%206.963599-3.508917%2013.56597-9.417487%2017.231453-19.403932%2012.038174-33.983999%2022.151509-43.334971%2030.05655-24.833595%2020.99415-39.076994%2051.64831-39.076994%2084.102467%200%2028.354791%2023.067368%2051.42216%2051.42216%2051.42216l277.239232%200c0.540306%2065.73412%2054.174853%20119.045303%20120.032794%20119.045303s119.492488-53.312206%20120.032794-119.045303l275.389094%200c29.375028%200%2053.272297-23.898293%2053.272297-53.272297C961.390034%20757.14221%20948.130032%20727.34558%20925.007405%20706.493669zM512.693802%20106.235556c14.58723%200%2027.973098%204.945639%2037.694507%2013.925151%204.253884%203.929496%207.624654%208.439206%2010.070356%2013.418614-15.392572-1.550309-31.31317-2.334161-47.76384-2.334161-16.395412%200-32.256658%200.775666-47.586808%202.308579C473.319026%20117.106138%20491.085668%20106.235556%20512.693802%20106.235556zM512.695848%20920.54579c-43.792389%200-79.464843-35.363416-80.005149-79.029938l160.010297%200C592.160691%20885.183398%20556.488237%20920.54579%20512.695848%20920.54579zM908.117736%20801.500487%20115.422799%20801.500487c-6.28924%200-11.406794-5.117554-11.406794-11.406794%200-20.652366%209.073656-40.169885%2024.896017-53.543474%207.752568-6.553253%2021.099551-15.755846%2038.59911-26.614148%2017.772782-11.026124%2028.628014-30.875195%2028.331255-51.798736l-0.085958-5.986341c-1.500167-103.306854-4.29277-295.599392%20101.104699-402.537959%2051.240011-51.990095%20123.857912-78.352509%20215.832673-78.352509%2092.148723%200%20165.147294%2026.586518%20216.96752%2079.022775%2045.958728%2046.502104%2077.003791%20114.936729%2092.27152%20203.39848%2013.098319%2075.896574%2012.20395%20151.944598%2011.611455%20202.266703l-0.029676%202.541893c-0.246617%2020.922519%2010.143011%2040.107463%2027.78788%2051.321876%2016.656355%2010.584056%2029.764907%2019.958564%2036.906561%2026.39823%2014.722306%2013.276375%2023.165606%2032.242332%2023.165606%2052.033074C921.375691%20795.553031%20915.427212%20801.500487%20908.117736%20801.500487z%22%20p-id%3D%224319%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M450.672236%20213.276455c-24.200168%200-58.362222%2022.532179-82.263585%2043.620473-19.808138%2017.477047-54.381561%2053.168943-63.362096%2095.835695-2.275833%2010.812253%204.644787%2021.423939%2015.45704%2023.698748%201.38965%200.292666%202.774183%200.433882%204.140297%200.433882%209.260921%200%2017.575284-6.467295%2019.558451-15.890922%204.823865-22.910802%2023.295566-49.909713%2050.681286-74.070996%2026.590612-23.462365%2049.811476-33.610492%2055.788607-33.610492%2011.048637%200%2020.007683-8.958022%2020.007683-20.007683C470.679919%20222.234477%20461.720873%20213.276455%20450.672236%20213.276455z%22%20p-id%3D%224320%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";

  var warning = "data:image/svg+xml,%3Csvg%20t%3D%221641782762578%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222253%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M512%2032C246.912%2032%2032%20246.912%2032%20512c0%20265.088%20214.912%20480%20480%20480%20265.088%200%20480-214.912%20480-480%200-265.088-214.912-480-480-480z%20m0%20896C282.24%20928%2096%20741.76%2096%20512S282.24%2096%20512%2096s416%20186.24%20416%20416-186.24%20416-416%20416z%22%20p-id%3D%222254%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M512%20384a32%2032%200%200%200-32%2032v352a32%2032%200%200%200%2064%200V416a32%2032%200%200%200-32-32zM464%20272a48%2048%200%201%200%2096%200%2048%2048%200%201%200-96%200z%22%20p-id%3D%222255%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";

  var success = "data:image/svg+xml,%3Csvg%20t%3D%221641641226364%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222847%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M878.08%20731.274667a32%2032%200%200%201-54.88-32.938667A360.789333%20360.789333%200%200%200%20874.666667%20512c0-200.298667-162.368-362.666667-362.666667-362.666667S149.333333%20311.701333%20149.333333%20512s162.368%20362.666667%20362.666667%20362.666667a360.789333%20360.789333%200%200%200%20186.314667-51.445334%2032%2032%200%200%201%2032.928%2054.88A424.778667%20424.778667%200%200%201%20512%20938.666667C276.362667%20938.666667%2085.333333%20747.637333%2085.333333%20512S276.362667%2085.333333%20512%2085.333333s426.666667%20191.029333%20426.666667%20426.666667c0%2078.293333-21.152%20153.568-60.586667%20219.274667zM374.581333%20489.450667l84.341334%2083.989333%20190.432-190.72a32%2032%200%200%201%2045.290666%2045.226667l-213.013333%20213.333333a32%2032%200%200%201-45.226667%200.064l-106.986666-106.549333a32%2032%200%201%201%2045.162666-45.344z%22%20p-id%3D%222848%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";

  const _hoisted_1 = { class: "flex-1" };
  const _hoisted_2 = { class: "flex-none" };
  var script = /*#__PURE__*/ vue.defineComponent({
      props: {
          type: { type: null, required: false, default: 'default' },
          icon: { type: null, required: false }
      },
      setup(__props) {
          const props = __props;
          const { type, icon } = props;
          const typeCls = new Map([
              ['info', 'alert-info'],
              ['success', 'alert-success'],
              ['warning', 'alert-warning'],
              ['error', 'alert-error'],
          ]).get(type);
          const typeIcon = new Map([
              ['default', info],
              ['info', info],
              ['success', success],
              ['warning', warning],
              ['error', error],
          ]).get(type);
          const iconCpd = vue.computed(() => {
              let iconPath = icon ? icon : typeIcon;
              return createIcon(iconPath);
          });
          const classStr = vue.computed(() => {
              let res = ['alert'];
              type && res.push(typeCls);
              return res.join(' ');
          });
          return (_ctx, _cache) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                  class: vue.normalizeClass(vue.unref(classStr))
              }, [
                  vue.createElementVNode("div", _hoisted_1, [
                      vue.createCommentVNode(" <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" class=\"w-6 h-6 mx-2 stroke-current\">          \r\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"></path>                \r\n    </svg>  "),
                      (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(iconCpd)), { class: "w-6 h-6 mx-2 stroke-current" })),
                      vue.createElementVNode("label", null, [
                          vue.renderSlot(_ctx.$slots, "default")
                      ])
                  ]),
                  vue.createElementVNode("div", _hoisted_2, [
                      vue.renderSlot(_ctx.$slots, "end")
                  ])
              ], 2 /* CLASS */));
          };
      }
  });

  script.__file = "src/components/alert/src/Alert.vue";

  script.name = 'd-alert';

  // {{COMPONENT}}

  var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DButton: script$1,
    Icon: Icon,
    Avatar: avatar,
    Alert: script
  });

  create({
      components: Object.keys(components).map((key) => components[key]),
  });

  exports.Alert = script;
  exports.Avatar = avatar;
  exports.DButton = script$1;
  exports.Icon = Icon;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
