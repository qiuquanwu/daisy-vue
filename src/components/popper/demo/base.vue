<template>
  <y-popper>
    <template #trigger>
      <y-button>Hover</y-button>
    </template>
    popper content
  </y-popper>
  <y-popper :show-arrow="false">
    <template #trigger>
      <y-button style="margin-left: 12px">No Arrow</y-button>
    </template>
    popper content
  </y-popper>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Base',
});
</script>
