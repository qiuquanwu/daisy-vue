import * as components from './dist/daisy-vue.es.js'
import "./dist/daisy-vue.es.css"

const install = (app) => {
    Object.keys(components).forEach((key) => {
        const component = components[key];
        if (component && component.name) {
            app.component(component.name, component);
        }
    });
}
export default {
    install,
    ...components
}