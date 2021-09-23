# Radio

## Basic

<code-wrapper>
<RadioBasic />

```vue
<template>
  <y-radio v-model="radioValue" @change="handleValueChange"> RadioA </y-radio>
  <y-radio
    :modelValue="radioValue2"
    @update:modelValue="handleUpdateModel"
    @change="handleValueChange"
  >
    RadioA
  </y-radio>

  <div class="line">
    <y-radio
      name="radio-demo"
      value="boy"
      v-model="radioValue3"
      @change="handleValueChange"
    >
      RadioA
    </y-radio>
    <y-radio
      name="radio-demo"
      value="girl"
      v-model="radioValue3"
      @change="handleValueChange"
    >
      RadioB
    </y-radio>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Basic",
  setup() {
    const radioValue = ref(null);
    const radioValue2 = ref(null);
    const radioValue3 = ref("");

    const handleValueChange = (value) => {
      console.log("value", value);
    };

    const handleUpdateModel = (value) => {
      console.log("value", value);
      radioValue2.value = value;
    };

    return {
      radioValue,
      radioValue2,
      radioValue3,
      handleValueChange,
      handleUpdateModel,
    };
  },
});
</script>

<style lang="scss" scoped>
.yoga-radio {
  margin-right: 12px;
}
</style>
```

</code-wrapper>

<script>
import RadioBasic from '../../src/components/radio/demo/basic.vue';
export default {
	components: {
		RadioBasic
	}
}
</script>

## API
