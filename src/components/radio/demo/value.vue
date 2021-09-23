<template>
  <y-radio name="radio-demo" v-model="radioValue" @change="handleValueChange">
    RadioA
  </y-radio>
  <y-radio name="radio-demo" v-model="radioValue" @change="handleValueChange">
    RadioB
  </y-radio>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Basic",
  setup() {
    const radioValue = ref(false);

    const handleValueChange = (value) => {
      console.log("value", value);
    };

    return {
      radioValue,
      handleValueChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.yoga-button {
  margin-right: 12px;
}
.btn-wrap {
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  padding: 14px 24px;
  margin-left: 16px;
  border-radius: 4px;
}
</style>
