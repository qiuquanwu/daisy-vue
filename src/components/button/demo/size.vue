<template>
  <y-button type="primary" size="small">small</y-button>
  <y-button type="primary" size="normal">normal</y-button>
  <y-button type="primary" size="large">large</y-button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Size",
});
</script>

<style lang="scss" scoped>
.yoga-button {
  margin-right: 12px;
}
.btn-wrap {
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  padding: 14px 24px;
  margin-left: 16px;
  border-radius: 4px;
}
</style>
