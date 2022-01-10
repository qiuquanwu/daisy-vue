import { EmitType } from '@components/popper/types';
declare const _default: import('vue').DefineComponent<
  {
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
      type: import('vue').PropType<import('@components/popper/types').Theme>;
      default: import('@components/popper/types').Theme;
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
      type: import('vue').PropType<import('@popperjs/core').Placement>;
      default: import('@popperjs/core').Placement;
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
      type: import('vue').PropType<Partial<import('@popperjs/core').Options>>;
      default: () => Partial<import('@popperjs/core').Options>;
    };
    showArrow: {
      type: BooleanConstructor;
      default: boolean;
    };
    strategy: {
      type: import('vue').PropType<import('@popperjs/core').PositioningStrategy>;
      default: import('@popperjs/core').PositioningStrategy;
    };
    transition: {
      type: StringConstructor;
      default: string;
    };
    trigger: {
      type: import('vue').PropType<import('@components/popper/types').Trigger>;
      default: import('@components/popper/types').Trigger;
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
      type: import('vue').PropType<import('@popperjs/core').Placement[]>;
      default: () => import('@popperjs/core').Placement[];
    };
  },
  import('@components/popper/types').IPopperState,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  EmitType[],
  'update:visible' | 'after-enter' | 'after-leave' | 'before-enter' | 'before-leave',
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<
    {
      arrowOffset?: unknown;
      appendToBody?: unknown;
      autoClose?: unknown;
      content?: unknown;
      class?: unknown;
      style?: unknown;
      hideAfter?: unknown;
      showAfter?: unknown;
      disabled?: unknown;
      theme?: unknown;
      enterable?: unknown;
      offset?: unknown;
      placement?: unknown;
      popperClass?: unknown;
      popperStyle?: unknown;
      pure?: unknown;
      popperOptions?: unknown;
      showArrow?: unknown;
      strategy?: unknown;
      transition?: unknown;
      trigger?: unknown;
      visible?: unknown;
      stopPopperMouseEvent?: unknown;
      gpuAcceleration?: unknown;
      fallbackPlacements?: unknown;
    } & {
      disabled: boolean;
      trigger: import('@components/popper/types').Trigger;
      placement: import('@popperjs/core').Placement;
      strategy: import('@popperjs/core').PositioningStrategy;
      arrowOffset: number;
      appendToBody: boolean;
      autoClose: number;
      content: string;
      hideAfter: number;
      showAfter: number;
      theme: import('@components/popper/types').Theme;
      enterable: boolean;
      offset: number;
      popperClass: string;
      popperStyle: Record<string, any>;
      pure: boolean;
      popperOptions: Partial<import('@popperjs/core').Options>;
      showArrow: boolean;
      transition: string;
      stopPopperMouseEvent: boolean;
      gpuAcceleration: boolean;
      fallbackPlacements: import('@popperjs/core').Placement[];
    } & {
      class?: Record<string, any>;
      style?: Record<string, any>;
      visible?: boolean;
    }
  > & {
    'onUpdate:visible'?: (...args: any[]) => any;
    'onAfter-enter'?: (...args: any[]) => any;
    'onAfter-leave'?: (...args: any[]) => any;
    'onBefore-enter'?: (...args: any[]) => any;
    'onBefore-leave'?: (...args: any[]) => any;
  },
  {
    disabled: boolean;
    trigger: import('@components/popper/types').Trigger;
    placement: import('@popperjs/core').Placement;
    strategy: import('@popperjs/core').PositioningStrategy;
    arrowOffset: number;
    appendToBody: boolean;
    autoClose: number;
    content: string;
    hideAfter: number;
    showAfter: number;
    theme: import('@components/popper/types').Theme;
    enterable: boolean;
    offset: number;
    popperClass: string;
    popperStyle: Record<string, any>;
    pure: boolean;
    popperOptions: Partial<import('@popperjs/core').Options>;
    showArrow: boolean;
    transition: string;
    visible: boolean;
    stopPopperMouseEvent: boolean;
    gpuAcceleration: boolean;
    fallbackPlacements: import('@popperjs/core').Placement[];
  }
>;
export default _default;
