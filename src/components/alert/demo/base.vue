<template>
  <Alert>Lorem ipsum dolor sit amet, consectetur adip!</Alert>
  <Alert type="info">Lorem ipsum dolor sit amet, consectetur adip!</Alert>
  <Alert type="success">Lorem ipsum dolor sit amet, consectetur adip!</Alert>
  <Alert type="warning">Lorem ipsum dolor sit amet, consectetur adip!</Alert>
  <Alert type="error">Lorem ipsum dolor sit amet, consectetur adip!</Alert>
  <Alert type="error" :icon="code" fill="currentColor"
    >自定义图标+插槽
    <template #end>
      <button class="mr-2 btn btn-sm btn-ghost">Cancel</button>
      <button class="btn btn-sm btn-primary">Apply</button>
    </template>
  </Alert>
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
