<template>
  <y-input></y-input>
  <y-input type="password"></y-input>
  <y-input type="textarea"></y-input>
  <y-input type="textarea" autosize></y-input>
  <y-input type="textarea" :autosize="autosizeConfig"></y-input>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Type",

  setup() {
    const autosizeConfig = reactive({
      minRows: 3,
      maxRows: 6,
    });

    return {
      autosizeConfig,
    };
  }
});
</script>
