import { ExtractPropTypes, PropType } from 'vue';
import { Placement } from '@popperjs/core';
export declare const tooltipProps: {
  modelValue: {
    type: BooleanConstructor;
    default: any;
    validator: (value: any) => boolean;
  };
  tabindex: {
    type: (StringConstructor | NumberConstructor)[];
    default: string;
  };
  showArrow: {
    type: BooleanConstructor;
    default: boolean;
  };
  placement: {
    type: PropType<Placement>;
    default: string;
  };
  arrowOffset: {
    type: NumberConstructor;
    default: number;
  };
  appendToBody: {
    type: BooleanConstructor;
    default: boolean;
  };
  autoClose: {
    type: NumberConstructor;
    default: number;
  };
  content: {
    type: StringConstructor;
    default: string;
  };
  class: ObjectConstructor;
  style: ObjectConstructor;
  hideAfter: {
    type: NumberConstructor;
    default: number;
  };
  showAfter: {
    type: NumberConstructor;
    default: number;
  };
  disabled: BooleanConstructor;
  theme: {
    type: PropType<import('../popper/types').Theme>;
    default: import('../popper/types').Theme;
  };
  enterable: {
    type: BooleanConstructor;
    default: boolean;
  };
  offset: {
    type: NumberConstructor;
    default: number;
  };
  popperClass: {
    type: StringConstructor;
    default: string;
  };
  popperStyle: {
    type: ObjectConstructor;
    default: () => import('vue').CSSProperties;
  };
  pure: BooleanConstructor;
  popperOptions: {
    type: PropType<Partial<import('@popperjs/core').Options>>;
    default: () => Partial<import('@popperjs/core').Options>;
  };
  strategy: {
    type: PropType<import('@popperjs/core').PositioningStrategy>;
    default: import('@popperjs/core').PositioningStrategy;
  };
  transition: {
    type: StringConstructor;
    default: string;
  };
  trigger: {
    type: PropType<import('../popper/types').Trigger>;
    default: import('../popper/types').Trigger;
  };
  visible: {
    type: BooleanConstructor;
    default: any;
  };
  stopPopperMouseEvent: {
    type: BooleanConstructor;
    default: boolean;
  };
  gpuAcceleration: {
    type: BooleanConstructor;
    default: boolean;
  };
  fallbackPlacements: {
    type: PropType<Placement[]>;
    default: () => Placement[];
  };
};
export declare type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
