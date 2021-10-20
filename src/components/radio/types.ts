import { ComputedRef, ExtractPropTypes, PropType } from "vue";
import { YUISize, YUI_SIZE } from "@base/size";

export const radioProps = {
  /** v-model的绑定 */
  modelValue: {
    type: [Boolean, String, Number],
    default: null,
  },
  /** 当前radio value, 如果modelValue和value一致，则checked=true */
  value: {
    type: [Boolean, String, Number],
    default: true,
  },
  /** native prop, 用于实现多选一 */
  name: String,
  /** 禁用 */
  disabled: Boolean,
};

export type RadioProps = ExtractPropTypes<typeof radioProps>;

export const radioGroupProps = {
  /** v-model的绑定 */
  modelValue: {
    type: [Boolean, String, Number],
    default: null,
  },
  disabled: Boolean,
  vertical: Boolean,
  size: {
    type: String as PropType<YUISize>,
    default: "normal",
    validator: (value: string = "normal"): boolean => YUI_SIZE.indexOf(value) >= 0,
  },
  type: {
    type: String,
    validator: (value: string): boolean => ["solid", "outline"].indexOf(value) >= 0,
  },
};

export type IModelType = boolean | string | number;
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
export type RadioGroupContext = RadioGroupProps & {
  name: string;
  changeEvent: (value: IModelType) => void;
};
export type RadioGroupMittEvent = {
  radioChange: IModelType;
};
export const RadioGroupKey = 'YogaRadioGroup';

export interface UseRadio {
  size: ComputedRef<"" | YUISize>;
  isDisabled: ComputedRef<boolean>;
  radioGroup: RadioGroupContext;
  checkedValue: ComputedRef<boolean>;
  handleValueChange: () => void;
}
