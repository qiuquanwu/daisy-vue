import type { DefineComponent, VNode } from 'vue';
export interface SvgIconProps {
  src: string;
  width?: number;
  height?: number;
  fill?: string;
}
export type IconType = DefineComponent | VNode | String | string;
