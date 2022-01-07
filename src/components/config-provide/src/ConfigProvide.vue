<template>
  <slot></slot>
</template>

<script setup lang="ts">
interface ConfigProps {
  lang?: 'zh' | 'en';
}

const props = withDefaults(defineProps<ConfigProps>(), { lang: 'zh' });
</script>
