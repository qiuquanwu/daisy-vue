<template>
  <y-switch disabled></y-switch>
  <y-switch :modelValue="true" disabled></y-switch>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Disabled",
});
</script>
