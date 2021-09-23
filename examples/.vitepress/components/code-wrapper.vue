<template>
  <div class="code-wrapper">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CodeWrapper",
});
</script>

<style lang="scss" scoped>
.code-wrapper {
  padding: 16px 24px;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
}
</style>
