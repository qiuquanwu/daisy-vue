<template>
  <y-checkbox v-model="disabled">Disabled</y-checkbox>
  <y-popper :disabled="disabled">
    <template #trigger>
      <y-button>Hover</y-button>
    </template>
    popper content
  </y-popper>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Disabled",
  setup() {
    const disabled = ref(false);

    return {
      disabled
    };
  }
});
</script>
