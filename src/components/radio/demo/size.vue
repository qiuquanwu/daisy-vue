<template>
  <y-radio-group v-model="type" type="outline">
    <y-radio value="solid">Solid</y-radio>
    <y-radio value="outline">Outline</y-radio>
  </y-radio-group>

  <y-radio-group v-model="radioValue" :type="type" size="large" @change="handleValueChange">
    <y-radio value="a">RadioA</y-radio>
    <y-radio value="b">RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
  <y-radio-group v-model="radioValue" :type="type" @change="handleValueChange">
    <y-radio value="a">RadioA</y-radio>
    <y-radio value="b">RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
  <y-radio-group v-model="radioValue" :type="type" size="small" @change="handleValueChange">
    <y-radio value="a">RadioA</y-radio>
    <y-radio value="b">RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'Size',
  setup() {
    const type = ref('solid');
    const radioValue = ref(null);

    const handleValueChange = (value) => {
      console.log('value', value);
    };

    const handleUpdateModel = (value) => {
      console.log('value', value);
      radioValue2.value = value;
    };

    return {
      type,
      radioValue,
      handleValueChange,
      handleUpdateModel,
    };
  },
});
</script>
<style lang="scss" scoped>
.yoga-radio-group {
  margin-bottom: 12px;
}
</style>
