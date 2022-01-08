<template>
  <icon :src="AddIcon" />
</template>

<script>
import { defineComponent } from "vue";
import AddIcon from "./add.svg";

export default defineComponent({
  name: "Icons",
  setup() {
    return {
      AddIcon,
    };
  },
});
</script>

<style lang="scss" scoped>
.yoga-icon {
  width: 16px;
  height: 16px;
}
</style>
