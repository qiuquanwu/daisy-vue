# Avatar

<!-- base -->
## 基础
<code-wrapper>
<Base/>

```vue
<template>
  <d-avatar :src="src" size="large"></d-avatar>
  <d-avatar :src="src"></d-avatar>
  <d-avatar :src="src" size="small"></d-avatar>
  <d-avatar :src="src" size="tiny"></d-avatar>
  <!-- 自定义大小 -->
  <d-avatar :src="src" :size="[100, 60]"></d-avatar>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Base',
  setup() {
    let src = 'http://daisyui.com/tailwind-css-component-profile-1@94w.png';
    return { src };
  },
});
</script>
<style>
.avatar {
  padding-left: 1em;
}
</style>

```

</code-wrapper>


<script setup>
  import Base from "../../src/components/avatar/demo/base.vue"
</script>
