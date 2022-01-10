// src/components/xxx/demo/index.md
module.exports.demoIndex = {
  path: 'src/components/{{component}}/demo/index.md',
  temp: `# {{COMPONENT}}

<!-- base -->
`,
};

// src/components/xxx/demo/base.vue
module.exports.demoBase = {
  path: 'src/components/{{component}}/demo/base.vue',
  temp: `<template>
  <d-{{component}}></d-{{component}}>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Base",
});
</script>
`,
};

// docs/components/xxx.md
module.exports.demoDoc = {
  path: 'docs/components/{{component}}.md',
  temp: '',
};

// src/components/xx/types.ts
module.exports.componentType = {
  path: 'src/components/{{component}}/types.ts',
  temp: `import { ExtractPropTypes } from "vue";

export const {{CAMEL_CASE_COMPONENT}}Props = {

};

export type {{COMPONENT}}Props = ExtractPropTypes<typeof {{CAMEL_CASE_COMPONENT}}Props>;
`,
};

// src/components/xx/styles/xx.scss
module.exports.componentStyle = {
  path: 'src/components/{{component}}/styles/{{component}}.scss',
  temp: '',
};

// src/components/xx/src/xxx.tsx
module.exports.componentSrc = {
  path: 'src/components/{{component}}/src/{{component}}.tsx',
  temp: `import { h, defineComponent, PropType, SetupContext } from "vue";
import { {{CAMEL_CASE_COMPONENT}}Props, {{COMPONENT}}Props } from "../types";

export default defineComponent({
  name: "D{{COMPONENT}}",
  props: {{CAMEL_CASE_COMPONENT}}Props,
  setup(props: {{COMPONENT}}Props, { slots }: SetupContext) {

  },
  render() {
    return <div>{{component}}</div>;
  }
});
`,
};

// src/components/xx/index.ts
module.exports.componentIndex = {
  path: 'src/components/{{component}}/index.ts',
  temp: `import {{COMPONENT}} from "./src/{{component}}";
import "./styles/{{component}}.scss";

export { {{COMPONENT}} };
`,
};

// src/components/xx/README.md
module.exports.componentReadme = {
  path: 'src/components/{{component}}/README.md',
  temp: `## API

### {{COMPONENT}} props
`,
};

// src/components/index.ts
module.exports.component = {
  path: 'src/components/index.ts',
  event: 'update',
  temp: 'export * from "./{{component}}";',
};

// src/index.ts
module.exports.index = {
  path: 'src/index.ts',
  event: 'update',
  temp: '  {{COMPONENT}},',
};
