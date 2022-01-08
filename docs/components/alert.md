# Alert

## 基础使用

<code-wrapper>
<BaseAlert/>
```vue
<template>
  <Alert>Lorem ipsum dolor sit amet, consectetur adip!</Alert>
  <Alert type="info">Lorem ipsum dolor sit amet, consectetur adip!</Alert>
  <Alert type="success">Lorem ipsum dolor sit amet, consectetur adip!</Alert>
  <Alert type="warning">Lorem ipsum dolor sit amet, consectetur adip!</Alert>
  <Alert type="error">Lorem ipsum dolor sit amet, consectetur adip!</Alert>
  <Alert type="error" :icon="error">自定义图标</Alert>
</template>
<script setup>
import { Alert } from "../index";
import code from "./code.svg";
</script>

<style scoped>
.alert {
  margin-top: 12px;
}
</style>
```

</code-wrapper>

<script>
import BaseAlert from '../../src/components/alert/demo/base.vue';
export default {
	components: {
	  BaseAlert
	}
}
</script>