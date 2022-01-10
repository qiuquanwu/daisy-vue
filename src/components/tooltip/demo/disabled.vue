<template>
  <y-checkbox v-model="disabled">disabled</y-checkbox>
  <y-tooltip :disabled="!disabled">
    <y-button style="margin: 0 12px">{{ disabled ? 'disabled' : 'enabled' }}</y-button>
    <template #content>
      <span
        >这里是一个复杂的content, 里面有链接<y-button size="small" type="link" target="_blank" href="www.baidu.com"
          >百度一下</y-button
        ></span
      >
    </template>
  </y-tooltip>

  <y-tooltip v-if="disabled">
    <y-button>disabled</y-button>
    <template #content>
      <span
        >这里是一个复杂的content, 里面有链接<y-button size="small" type="link" target="_blank" href="www.baidu.com"
          >百度一下</y-button
        ></span
      >
    </template>
  </y-tooltip>
  <y-button v-else>enabled</y-button>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Disabled',
  setup() {
    const disabled = ref(false);

    return {
      disabled,
    };
  },
});
</script>
