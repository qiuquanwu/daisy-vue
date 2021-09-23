import DefaultTheme from "vitepress/theme";
import CodeBlock from "../components/code-block.vue";
import CodeWrapper from "../components/code-wrapper.vue";
import * as components from "../../../dist/yui.es.js";
import "../../../dist/yui.css";
import "./custom.css";

console.log("components", components);

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component(CodeBlock.name, CodeBlock);
    app.component(CodeWrapper.name, CodeWrapper);
    Object.keys(components).forEach((key) => {
      const component = components[key];
      if (component && component.name) {
        app.component(component.name, component);
      }
    });
  },
};
