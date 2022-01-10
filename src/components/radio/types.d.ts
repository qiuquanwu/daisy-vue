import { ComputedRef, ExtractPropTypes, PropType } from 'vue';
import { YUISize } from '@base';
export declare const radioProps: {
  /** v-model的绑定 */
  modelValue: {
    type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    default: any;
  };
  /** 当前radio value, 如果modelValue和value一致，则checked=true */
  value: {
    type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    default: boolean;
  };
  /** native prop, 用于实现多选一 */
  name: StringConstructor;
  /** 禁用 */
  disabled: BooleanConstructor;
};
export declare type RadioProps = ExtractPropTypes<typeof radioProps>;
export declare const radioGroupProps: {
  /** v-model的绑定 */
  modelValue: {
    type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    default: any;
  };
  disabled: BooleanConstructor;
  vertical: BooleanConstructor;
  size: {
    type: PropType<YUISize>;
    default: string;
    validator: (value?: string) => boolean;
  };
  type: {
    type: StringConstructor;
    validator: (value: string) => boolean;
  };
};
export declare type IModelType = boolean | string | number;
export declare type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
export declare type RadioGroupContext = RadioGroupProps & {
  name: string;
  changeEvent: (value: IModelType) => void;
};
export declare type RadioGroupMittEvent = {
  radioChange: IModelType;
};
export declare const RadioGroupKey = 'YogaRadioGroup';
export interface UseRadio {
  size: ComputedRef<'' | YUISize>;
  isDisabled: ComputedRef<boolean>;
  radioGroup: RadioGroupContext;
  checkedValue: ComputedRef<boolean>;
  handleValueChange: () => void;
}
