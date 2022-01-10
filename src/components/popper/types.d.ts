import type { ComputedRef, CSSProperties, ExtractPropTypes, PropType, Ref, WritableComputedRef } from 'vue';
import { Options, Placement, PositioningStrategy, Instance as PopperInstance } from '@popperjs/core';
import { Nullable, RefElement } from '@base';
export declare enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}
export declare type EmitType = 'update:visible' | 'after-enter' | 'after-leave' | 'before-enter' | 'before-leave';
export declare type Offset = [number, number] | number;
export declare type TriggerType = 'click' | 'hover' | 'focus';
export declare type Trigger = TriggerType | TriggerType[];
export declare const popperProps: {
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
    type: PropType<Theme>;
    default: Theme;
  };
  enterable: {
    type: BooleanConstructor;
    default: boolean;
  };
  offset: {
    type: NumberConstructor;
    default: number;
  };
  placement: {
    type: PropType<Placement>;
    default: Placement;
  };
  popperClass: {
    type: StringConstructor;
    default: string;
  };
  popperStyle: {
    type: ObjectConstructor;
    default: () => CSSProperties;
  };
  pure: BooleanConstructor;
  popperOptions: {
    type: PropType<Partial<Options>>;
    default: () => Partial<Options>;
  };
  showArrow: {
    type: BooleanConstructor;
    default: boolean;
  };
  strategy: {
    type: PropType<PositioningStrategy>;
    default: PositioningStrategy;
  };
  transition: {
    type: StringConstructor;
    default: string;
  };
  trigger: {
    type: PropType<Trigger>;
    default: Trigger;
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
export declare type PopperProps = ExtractPropTypes<typeof popperProps>;
export interface PopperEvent {
  onClick?: (e: Event) => void;
  onMouseenter?: (e: Event) => void;
  onMouseleave?: (e: Event) => void;
  onFocus?: (e: Event) => void;
  onBlur?: (e: Event) => void;
}
export interface IPopperState {
  popperId: string;
  popperRef: Ref<RefElement>;
  computedPopperStyle: Ref<CSSProperties>;
  popperInstance: Nullable<PopperInstance>;
  events: PopperEvent;
  visibility: WritableComputedRef<boolean>;
  arrowRef: Ref<RefElement>;
  triggerRef: Ref<RefElement>;
  isManualMode: ComputedRef<boolean>;
  initPopper: () => void;
  hide: () => void;
  show: () => void;
  update: () => void;
  doDestroy: (forceDestroy?: boolean) => void;
  onPopperMouseEnter: () => void;
  onPopperMouseLeave: () => void;
  onAfterEnter: () => void;
  onAfterLeave: () => void;
  onBeforeEnter: () => void;
  onBeforeLeave: () => void;
}
export interface PopperState {
  visible: boolean;
  computedPopperStyle: CSSProperties;
}
