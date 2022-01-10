<template>
  <y-input prefix-label="UserName"></y-input>
  <y-input :prefix-icon="MaleIcon"></y-input>
  <y-input><template v-slot:prefix>用户名</template></y-input>
  <y-input suffix-label="@baidu.com"></y-input>
  <y-input :suffix-icon="SearchIcon"></y-input>
  <y-input><template v-slot:suffix>RMB</template></y-input>
</template>

<script>
import { defineComponent } from 'vue';
import MaleIcon from './male.svg';
import SearchIcon from './search.svg';

export default defineComponent({
  name: 'PrefixAndSuffix',

  setup() {
    return {
      MaleIcon,
      SearchIcon,
    };
  },
});
</script>
