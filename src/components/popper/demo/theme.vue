<template>
  <y-popper theme="dark">
    <template #trigger>
      <y-button>Dark</y-button>
    </template>
    popper content
  </y-popper>
  <y-popper theme="light">
    <template #trigger>
      <y-button style="margin-left: 12px;">Light</y-button>
    </template>
    popper content
  </y-popper>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Theme",
});
</script>
