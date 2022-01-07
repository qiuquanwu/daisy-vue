<template>
  <button :class="classStr" :disabled="disabled">
    <Component v-if="hasLeftIcon" :is="icon" class="inline-block w-6 h-6 mr-2 stroke-current" />
    <slot></slot>
    <Component v-if="hasRightIcon" :is="icon" class="inline-block w-6 h-6 ml-2 stroke-current" />
  </button>
</template>
<script>
import { defineComponent as DC } from 'vue';
export default DC({
  name: 'DButton',
});
</script>
<script setup lang="ts">
import { computed, isVNode } from 'vue';
import type { DefineComponent, VNode } from 'vue';
import type { ComputedRef } from 'vue';
import type { ButtonSize, ButtonType } from '../types';
import { ERROR_MESSAGE } from '../cfg';
type IconType = DefineComponent | VNode;
interface ButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  outline?: boolean;
  size?: ButtonSize;
  icon?: IconType;
  iconPostion?: 'left' | 'right';
}
const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  outline: false,
  size: 'normal',
  iconPostion: 'left',
});

const { type, disabled, outline, size, icon, iconPostion } = props;

const isIconType = (value: Object): boolean => {
  return Object.keys(value).includes('render') || isVNode(value);
};
const lang = 'zh';
if (icon && !isIconType(icon)) {
  throw new Error(ERROR_MESSAGE[lang].IS_NOT_ICONTYPE);
}

const hasLeftIcon = computed<boolean>(() => {
  return icon && iconPostion === 'left';
});
const hasRightIcon = computed<boolean>(() => {
  return icon && iconPostion === 'right';
});
/**
 * 动态获取按钮样式
 */
const typeCls: string = new Map<string, string>([
  ['primary', 'btn-primary'],
  ['secondary', 'btn-secondary'],
  ['accent', 'btn-accent'],
  ['ghost', 'btn-ghost'],
  ['link', 'btn-link'],
  ['info', 'btn-info'],
  ['success', 'btn-success'],
  ['warning', 'btn-warning'],
  ['error', 'btn-error'],
]).get(type);
/**
 * 动态处理按钮大小
 */
const sizeCls: string = new Map<string, string>([
  ['large', 'btn-lg'],
  ['small', 'btn-sm'],
  ['tiny', 'btn-xs'],
]).get(size);
/**
 * @return string 返回计算后的class
 */
const classStr: ComputedRef<string> = computed<string>(() => {
  let res: string[] = ['btn'];
  outline && res.push('btn-outline');
  type && res.push(typeCls);
  size && size !== 'normal' && res.push(sizeCls);
  return res.join(' ');
});
</script>
