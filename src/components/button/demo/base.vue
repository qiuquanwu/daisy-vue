<template>
  <y-button type="primary">Primary</y-button>
  <y-button type="primary" outline>Outline</y-button>
  <y-button>Default</y-button>
  <y-button dashed>Dashed</y-button>
  <y-button type="link">Text</y-button>
  <span class="btn-wrap">
    <y-button ghost>Ghost</y-button>
  </span>
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
