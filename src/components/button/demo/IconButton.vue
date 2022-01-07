<template>
  <h3>左侧</h3>
  <Button :icon="Close">默认按钮</Button>
  <Button type="primary" :icon="Close" outline>主按钮</Button>
  <Button type="secondary" :icon="Close"> 副按钮</Button>
  <Button type="accent" :icon="Close">accent</Button>
  <h3>右侧</h3>
  <Button type="info" outline :icon="ArrowLeft" icon-postion="right"> 信息</Button>
  <Button type="success" :icon="ArrowLeft" icon-postion="right">成功</Button>
  <Button type="warning" :icon="ArrowLeft" icon-postion="right">警告</Button>
  <Button type="error" :icon="icon" icon-postion="right">错误</Button>
  <Button type="error" :icon="CodeIcon">错误</Button>
</template>
<script setup>
import Button from '../src/Button.vue';
import Close from '../../icons/Close.vue';
import ArrowLeft from '../../icons/ArrowLeft.vue';
import { h } from 'vue';
import CodeIcon from './code.svg';
let icon = h(ArrowLeft, {}, null);
</script>
