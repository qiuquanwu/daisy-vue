<template>
  <y-button type="primary">Primary</y-button>
  <y-button type="primary" outline>Outline</y-button>
  <y-button>Default</y-button>
  <y-button dashed>Dashed</y-button>
  <y-button type="link">Text</y-button>
  <y-button type="link" href="/" target="__blank">Render a tag</y-button>
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
