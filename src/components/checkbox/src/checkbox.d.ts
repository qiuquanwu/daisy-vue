declare const _default: import('vue').DefineComponent<
  {
    modelValue: {
      type: import('vue').PropType<string | number | boolean>;
      default: any;
    };
    value: import('vue').PropType<string | number | boolean>;
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    name: StringConstructor;
  },
  import('@components/checkbox/types').UseCheckbox,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  ('update:modelValue' | 'change')[],
  'update:modelValue' | 'change',
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<
    {
      modelValue?: unknown;
      value?: unknown;
      indeterminate?: unknown;
      disabled?: unknown;
      name?: unknown;
    } & {
      indeterminate: boolean;
      disabled: boolean;
    } & {
      name?: string;
      value?: string | number | boolean;
      modelValue?: string | number | boolean;
    }
  > & {
    onChange?: (...args: any[]) => any;
    'onUpdate:modelValue'?: (...args: any[]) => any;
  },
  {
    modelValue: string | number | boolean;
    indeterminate: boolean;
    disabled: boolean;
  }
>;
export default _default;
