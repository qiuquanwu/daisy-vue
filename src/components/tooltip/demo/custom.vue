<template>
  <y-tooltip v-model="visible">
    <y-button @click="updateVisible">Custom</y-button>
    <template #content>
      <span>这里是一个复杂的content, 里面有链接<y-button size="small" type="link" target="_blank" href="www.baidu.com">百度一下</y-button></span>
    </template>
  </y-tooltip>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Custom",
  setup() {
    const visible = ref(false);
    const updateVisible = () => {
      visible.value = !visible.value;
    }

    return {
      visible,
      updateVisible,
    };
  }
});
</script>
