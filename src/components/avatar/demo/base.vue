<template>
  <h3>基本使用</h3>
  <d-avatar :src="src" size="large"></d-avatar>
  <d-avatar :src="src"></d-avatar>
  <d-avatar :src="src" size="small"></d-avatar>
  <d-avatar :src="src" size="tiny"></d-avatar>
  <h3>自定义大小</h3>
  <d-avatar :src="src" :size="[100, 60]"></d-avatar>
  <h3>圆形</h3>
  <d-avatar :src="src" size="large" circle></d-avatar>
  <d-avatar :src="src" circle></d-avatar>
  <d-avatar :src="src" size="small" circle></d-avatar>
  <d-avatar :src="src" size="tiny" circle></d-avatar>
  <h3>在线标记</h3>
  <d-avatar :src="src" online size="large" circle></d-avatar>
  <d-avatar :src="src" :online="false"></d-avatar>
  <d-avatar :src="src" online size="tiny"></d-avatar>
  <d-avatar :src="src" :size="[60, 60]" online></d-avatar>
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
  margin-left: 1em;
}
h3 {
  margin-top: 1em;
}
</style>
