declare const _default: import('vue').DefineComponent<
  {
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
      type: import('vue').PropType<import('@popperjs/core').Placement>;
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
      type: import('vue').PropType<import('../../popper/types').Theme>;
      default: import('../../popper/types').Theme;
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
      type: import('vue').PropType<Partial<import('@popperjs/core').Options>>;
      default: () => Partial<import('@popperjs/core').Options>;
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
      type: import('vue').PropType<import('../../popper/types').Trigger>;
      default: import('../../popper/types').Trigger;
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
  {
    popperProps: import('vue').ComputedRef<{
      showArrow: boolean;
      placement: import('@popperjs/core').Placement;
      arrowOffset: number;
      appendToBody: boolean;
      autoClose: number;
      class?: Record<string, any>;
      style?: Record<string, any>;
      hideAfter: number;
      showAfter: number;
      disabled: boolean;
      theme: import('../../popper/types').Theme;
      enterable: boolean;
      offset: number;
      popperClass: string;
      popperStyle: Record<string, any>;
      pure: boolean;
      popperOptions: Partial<import('@popperjs/core').Options>;
      strategy: import('@popperjs/core').PositioningStrategy;
      transition: string;
      trigger: import('../../popper/types').Trigger;
      visible?: boolean;
      stopPopperMouseEvent: boolean;
      gpuAcceleration: boolean;
      fallbackPlacements: import('@popperjs/core').Placement[];
    }>;
    onUpdateVisible: (value: boolean) => void;
  },
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  import('vue').EmitsOptions,
  'update:modelValue',
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<
    {
      modelValue?: unknown;
      tabindex?: unknown;
      showArrow?: unknown;
      placement?: unknown;
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
      popperClass?: unknown;
      popperStyle?: unknown;
      pure?: unknown;
      popperOptions?: unknown;
      strategy?: unknown;
      transition?: unknown;
      trigger?: unknown;
      visible?: unknown;
      stopPopperMouseEvent?: unknown;
      gpuAcceleration?: unknown;
      fallbackPlacements?: unknown;
    } & {
      disabled: boolean;
      trigger: import('../../popper/types').Trigger;
      placement: import('@popperjs/core').Placement;
      strategy: import('@popperjs/core').PositioningStrategy;
      arrowOffset: number;
      appendToBody: boolean;
      autoClose: number;
      content: string;
      hideAfter: number;
      showAfter: number;
      theme: import('../../popper/types').Theme;
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
      tabindex: string | number;
    } & {
      class?: Record<string, any>;
      style?: Record<string, any>;
      modelValue?: boolean;
      visible?: boolean;
    }
  >,
  {
    modelValue: boolean;
    disabled: boolean;
    trigger: import('../../popper/types').Trigger;
    placement: import('@popperjs/core').Placement;
    strategy: import('@popperjs/core').PositioningStrategy;
    arrowOffset: number;
    appendToBody: boolean;
    autoClose: number;
    content: string;
    hideAfter: number;
    showAfter: number;
    theme: import('../../popper/types').Theme;
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
    tabindex: string | number;
  }
>;
export default _default;
