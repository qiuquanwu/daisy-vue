<template>
  <d-alert>Lorem ipsum dolor sit amet, consectetur adip!</d-alert>
  <d-alert type="info">Lorem ipsum dolor sit amet, consectetur adip!</d-alert>
  <d-alert type="success">Lorem ipsum dolor sit amet, consectetur adip!</d-alert>
  <d-alert type="warning">Lorem ipsum dolor sit amet, consectetur adip!</d-alert>
  <d-alert type="error">Lorem ipsum dolor sit amet, consectetur adip!</d-alert>
  <d-alert :icon="code" fill="currentColor"
    >自定义图标+插槽
    <template #end>
      <button class="mr-2 btn btn-sm btn-ghost">Cancel</button>
      <button class="btn btn-sm btn-primary">Apply</button>
    </template>
  </d-alert>
</template>
<script setup>
import code from "./code.svg";
</script>
