<template>
  <y-button dashed>Dashed</y-button>
  <y-button dashed :icon="AddIcon">Upload</y-button>
  <y-button type="primary" dashed>Dashed</y-button>
  <y-button type="primary" dashed :icon="AddIcon">Upload</y-button>
</template>

<script>
import { defineComponent } from "vue";
import AddIcon from "./add.svg";

export default defineComponent({
  name: "Dashed",
  setup() {
    return {
      AddIcon,
    };
  },
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
