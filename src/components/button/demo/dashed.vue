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
