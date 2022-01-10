# Icon （图标）

## Icons

<code-wrapper>
<IconIcons />

```vue
<template>
  <!-- if you used tailwindcss -->
  <icon :src="AddIcon" class="w-6 h-6" />
  <br />
  <icon :src="AddIcon" style="height:1.5rem;height:1.5rem" />
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
```

</code-wrapper>

<script setup>
import IconIcons from '../../src/components/icon/demo/icons.vue';
</script>
<style lang="scss">
button {
  margin-top: 12px;
  margin-right: 12px;
}
.btn-wrap {
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  padding: 14px 24px;
  border-radius: 4px;
}
</style>

## API
