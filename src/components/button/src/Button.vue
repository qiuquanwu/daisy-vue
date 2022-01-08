<template>
  <button :class="classStr" :disabled="disabled">
    <Component v-if="hasLeftIcon" :is="iconCpd" :class="iconClass" />
    <slot></slot>
    <Component v-if="hasRightIcon" :is="iconCpd" :class="iconClass" />
  </button>
</template>
<script setup lang="ts">
import { computed, h, isVNode, inject } from "vue";
import type { ComputedRef } from "vue";
import type { ButtonSize, ButtonType } from "../types";
import { ERROR_MESSAGE } from "../cfg";
import { Icon } from "../../icon";
import type { IconType } from "../../icon/types";
interface ButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  outline?: boolean;
  size?: ButtonSize;
  icon?: IconType;
  iconPostion?: "left" | "right";
}
const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  outline: false,
  size: "normal",
  iconPostion: "left",
});

const { type, disabled, outline, size, icon, iconPostion } = props;
/**
 * 判断icon是否合理
 * @param value
 * @return boolean
 */
const isIconType = (value: Object): boolean => {
  return (
    Object.keys(value).includes("render") || isVNode(value) || typeof icon === "string"
  );
};
// 获取语言
const lang = inject<string>("lang") ? inject<string>("lang") : "zh";

if (icon && !isIconType(icon)) {
  throw new Error(ERROR_MESSAGE[lang].IS_NOT_ICONTYPE);
}
/**
 * 返回计算后的icon
 * @return IconType
 */
const iconCpd = computed<IconType>(() => {
  return typeof icon === "string"
    ? h(Icon, { src: icon, fill: "currentColor" }, null)
    : icon;
});
//判断大小是不是Small或者Tiny
const isSmallOrTiny = (size) => {
  return ["small", "tiny"].includes(size);
};

const iconClass: ComputedRef<string> = computed<string>(() => {
  // inline-block w-6 h-6 mr-2 stroke-current
  let res: string[] = ["inline-block", "stroke-current"];
  if (isSmallOrTiny(size)) {
    res.push("w-4 h-4");
    if (hasLeftIcon.value) {
      res.push("mr-1");
    } else {
      res.push("ml-1");
    }
  } else {
    res.push("w-6 h-6");
    if (hasLeftIcon.value) {
      res.push("mr-2");
    } else {
      res.push("ml-2");
    }
  }
  return res.join(" ");
});

const hasLeftIcon = computed<boolean>(() => {
  return icon && iconPostion === "left";
});
const hasRightIcon = computed<boolean>(() => {
  return icon && iconPostion === "right";
});
/**
 * 动态获取按钮样式
 */
const typeCls: string = new Map<string, string>([
  ["primary", "btn-primary"],
  ["secondary", "btn-secondary"],
  ["accent", "btn-accent"],
  ["ghost", "btn-ghost"],
  ["link", "btn-link"],
  ["info", "btn-info"],
  ["success", "btn-success"],
  ["warning", "btn-warning"],
  ["error", "btn-error"],
]).get(type);
/**
 * 动态处理按钮大小
 */
const sizeCls: string = new Map<string, string>([
  ["large", "btn-lg"],
  ["small", "btn-sm"],
  ["tiny", "btn-xs"],
]).get(size);
/**
 * @return string 返回计算后的class
 */
const classStr: ComputedRef<string> = computed<string>(() => {
  let res: string[] = ["btn"];
  outline && res.push("btn-outline");
  type && res.push(typeCls);
  size && size !== "normal" && res.push(sizeCls);
  return res.join(" ");
});
</script>
