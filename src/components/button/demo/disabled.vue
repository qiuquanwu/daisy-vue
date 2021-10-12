<template>
  <y-button disabled type="primary">Primary</y-button>
  <y-button disabled type="primary" outline>Outline</y-button>
  <y-button disabled>Default</y-button>
  <y-button disabled dashed>Dashed</y-button>
  <y-button disabled type="link">Text</y-button>
  <span class="btn-wrap">
    <y-button disabled ghost>Ghost</y-button>
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
