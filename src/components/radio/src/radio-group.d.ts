import '../styles/radio-group.scss';
declare const _default: import('vue').DefineComponent<
  {
    modelValue: {
      type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
      default: any;
    };
    disabled: BooleanConstructor;
    vertical: BooleanConstructor;
    size: {
      type: import('vue').PropType<import('../../../base').YUISize>;
      default: string;
      validator: (value?: string) => boolean;
    };
    type: {
      type: StringConstructor;
      validator: (value: string) => boolean;
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
      vertical?: unknown;
      size?: unknown;
      type?: unknown;
    } & {
      disabled: boolean;
      vertical: boolean;
      size: import('../../../base').YUISize;
    } & {
      type?: string;
      modelValue?: string | number | boolean;
    }
  >,
  {
    modelValue: string | number | boolean;
    disabled: boolean;
    vertical: boolean;
    size: import('../../../base').YUISize;
  }
>;
export default _default;
