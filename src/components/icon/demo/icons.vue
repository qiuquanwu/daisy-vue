<template>
  <!-- if you used tailwindcss -->
  <icon :src="AddIcon" class="w-6 h-6" />
  <br />
  <icon :src="AddIcon" style="height: 1.5rem; height: 1.5rem" />
</template>

<script>
import { defineComponent } from 'vue';
import AddIcon from './add.svg';

export default defineComponent({
  name: 'Icons',
  setup() {
    return {
      AddIcon,
    };
  },
});
</script>
