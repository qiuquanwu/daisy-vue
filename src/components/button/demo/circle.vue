<template>
  <y-button type="primary" circle :icon="AddIcon"></y-button>
  <y-button type="primary" outline circle :icon="AddIcon"></y-button>
  <y-button circle :icon="AddIcon"></y-button>
  <y-button dashed circle :icon="AddIcon"></y-button>
  <y-button type="primary" dashed circle :icon="AddIcon"></y-button>
</template>

<script>
import { defineComponent } from "vue";
import AddIcon from "./add.svg";

export default defineComponent({
  name: "Circle",
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
</style>
