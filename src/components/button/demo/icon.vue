<template>
  <y-button type="primary" :icon="AddIcon">Add</y-button>
  <y-button :icon="AddIcon">Add</y-button>
  <y-button :icon="AddIcon"></y-button>
  <y-button :suffix-icon="AddIcon">More</y-button>
  <y-button type="link" :icon="AddIcon">Text Button</y-button>
  <y-button type="link" :suffix-icon="AddIcon">More</y-button>
</template>

<script>
import { defineComponent } from "vue";
import AddIcon from "./add.svg";

export default defineComponent({
  name: "Base",
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
