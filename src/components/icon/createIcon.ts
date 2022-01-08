import { h } from "vue";
import { IconType } from "./types"
import { Icon } from ".";
export const createIcon = (icon: IconType): IconType => {
    return typeof icon === "string"
        ? h(Icon, { src: icon, fill: "currentColor" }, null)
        : icon;
}