<template>
  <y-button disabled type="primary">Primary</y-button>
  <y-button disabled type="primary" outline>Outline</y-button>
  <y-button disabled>Default</y-button>
  <y-button disabled dashed>Dashed</y-button>
  <y-button disabled type="link">Text</y-button>
  <y-button disabled type="link" href="/" target="__blank">Render a tag</y-button>
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
