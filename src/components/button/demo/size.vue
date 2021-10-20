<template>
  <div class="simple-box">
    <y-button type="primary" size="small">small</y-button>
    <y-button type="primary" size="normal">normal</y-button>
    <y-button type="primary" size="large">large</y-button>
  </div>
  <div class="simple-box">
    <y-button type="primary" :icon="AddIcon" size="small">small</y-button>
    <y-button type="primary" :icon="AddIcon" size="normal">normal</y-button>
    <y-button type="primary" :icon="AddIcon" size="large">large</y-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AddIcon from "./add.svg";

export default defineComponent({
  name: "Size",
  setup() {
    return {
      AddIcon,
    };
  },
});
</script>
