declare const _default: import('vue').DefineComponent<
  {
    modelValue: {
      type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
      default: any;
    };
    value: {
      type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
      default: boolean;
    };
    name: StringConstructor;
    disabled: BooleanConstructor;
  },
  {
    radioClass: import('vue').ComputedRef<string[]>;
    isDisabled: import('vue').ComputedRef<boolean>;
    checkedValue: import('vue').ComputedRef<boolean>;
    handleValueChange: () => void;
  },
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
      value?: unknown;
      name?: unknown;
      disabled?: unknown;
    } & {
      value: string | number | boolean;
      disabled: boolean;
    } & {
      name?: string;
      modelValue?: string | number | boolean;
    }
  >,
  {
    value: string | number | boolean;
    modelValue: string | number | boolean;
    disabled: boolean;
  }
>;
export default _default;
