declare const _default: import('vue').DefineComponent<
  {
    modelValue: {
      type: BooleanConstructor;
      default: any;
    };
    disabled: BooleanConstructor;
    activeText: StringConstructor;
    inactiveText: StringConstructor;
    size: {
      type: import('vue').PropType<import('../../../base').YUISize>;
      default: string;
      validator: (value?: string) => boolean;
    };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  import('vue').EmitsOptions,
  'update:modelValue' | 'change',
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<
    {
      modelValue?: unknown;
      disabled?: unknown;
      activeText?: unknown;
      inactiveText?: unknown;
      size?: unknown;
    } & {
      disabled: boolean;
      size: import('../../../base').YUISize;
    } & {
      modelValue?: boolean;
      activeText?: string;
      inactiveText?: string;
    }
  >,
  {
    modelValue: boolean;
    disabled: boolean;
    size: import('../../../base').YUISize;
  }
>;
export default _default;
