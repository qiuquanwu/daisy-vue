# Icon

## Icons

<code-wrapper>
<IconIcons />

```vue
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
```

</code-wrapper>

<script>
import IconIcons from '../../src/components/icon/demo/icons.vue';
export default {
	components: {
		IconIcons
	}
}
</script>

## API
