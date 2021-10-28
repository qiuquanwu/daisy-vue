<template>
  <y-switch size="large"></y-switch>
  <y-switch size="normal"></y-switch>
  <y-switch size="small"></y-switch>
  <y-switch size="large" active-text="开" inactive-text="关"></y-switch>
  <y-switch size="normal" active-text="开" inactive-text="关"></y-switch>
  <y-switch size="small" active-text="开" inactive-text="关"></y-switch>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Base",
  setup() {
    const switchValue = ref(false);
    const switchValue2 = ref(true);
    const handleValueChange = value => {
      console.log('value:', value)
      switchValue2.value = value;
    }
    return {
      switchValue,
      switchValue2,
      handleValueChange,
    };
  }
});
</script>
