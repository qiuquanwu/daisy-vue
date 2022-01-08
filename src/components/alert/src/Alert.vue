<template>
  <div :class="classStr">
    <div class="flex-1">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">          
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>                
    </svg>  -->
      <Component :is="iconCpd" class="w-6 h-6 mx-2 stroke-current" />
      <label>
        <slot></slot>
      </label>
    </div>
    <div class="flex-none">
      <slot name="end"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ComputedRef } from "vue";
import type { AlertType } from "../types";
import { createIcon } from "../../icon/createIcon";
import { IconType } from "../../icon/types";
import error from "../../svg/error.svg";
import info from "../../svg/info.svg";
import warning from "../../svg/warning.svg";
import success from "../../svg/success.svg";
interface AlertProps {
  type?: AlertType;
  icon?: IconType;
}
const props = withDefaults(defineProps<AlertProps>(), { type: "default" });
const { type, icon } = props;
const typeCls: string = new Map<string, string>([
  ["info", "alert-info"],
  ["success", "alert-success"],
  ["warning", "alert-warning"],
  ["error", "alert-error"],
]).get(type);
const typeIcon: string = new Map<string, string>([
  ["default", info],
  ["info", info],
  ["success", success],
  ["warning", warning],
  ["error", error],
]).get(type);

const iconCpd = computed<IconType>(() => {
  let iconPath = icon ? icon : typeIcon;
  return createIcon(iconPath);
});
const classStr: ComputedRef<string> = computed<string>(() => {
  let res: string[] = ["alert"];
  type && res.push(typeCls);
  return res.join(" ");
});
</script>
