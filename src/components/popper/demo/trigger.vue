<template>
  <y-popper trigger="hover">
    <template #trigger>
      <y-button style="margin-left: 12px">Hover</y-button>
    </template>
    popper content
  </y-popper>
  <y-popper trigger="click">
    <template #trigger>
      <y-button style="margin-left: 12px">Click</y-button>
    </template>
    popper content
  </y-popper>
  <y-popper trigger="focus">
    <template #trigger>
      <y-button style="margin-left: 12px">Focus</y-button>
    </template>
    popper content
  </y-popper>
  <y-popper :visible="visible">
    <template #trigger>
      <y-button style="margin-left: 12px" @click="visible = !visible">Manual</y-button>
    </template>
    popper content
  </y-popper>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Trigger',
  setup() {
    const visible = ref(false);

    return {
      visible,
    };
  },
});
</script>
