<template>
  <y-input
    placeholder="Please input number"
    restriction="number">
  </y-input>
  <y-input
    placeholder="Please input number"
    restriction-type="value"
    :restriction="restriction">
  </y-input>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Restriction",

  setup() {
    const restriction = (val) =>{
      return /^.{1,3}$/.test(val);
    };

    return {
      restriction,
    };
  }
});
</script>
