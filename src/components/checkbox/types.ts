import { Ref, ExtractPropTypes, PropType, ComputedRef } from 'vue';
import { YUISize, YUI_SIZE } from '@base';
import { IModelType } from '@components/radio/types';

type IModelValue = boolean | string | number;

export const checkboxProps = {
  /** v-model的绑定 */
  modelValue: {
    type: [Boolean, String, Number] as PropType<IModelValue>,
    default: null, // 必须显示指定default为null, 否则默认的modelValue为false
  },
  /** 用于group时才有效 */
  value: [Boolean, String, Number] as PropType<IModelValue>,
  indeterminate: Boolean,
  disabled: Boolean,
  /** native prop, 用于实现多选一 */
  name: String,
};

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export interface CheckboxState {
  labelRef: null | HTMLDivElement;
  selfModel: boolean;
  labelStyles: Record<string, string>;
}
export interface UseCheckbox {
  labelRef: Ref<null | HTMLDivElement>;
  selfModel: Ref<boolean>;
  labelStyles: Ref<Record<string, string>>;
  isDisabled: ComputedRef<boolean>;
  checkedValue: ComputedRef<IModelValue>;
  checkboxGroup: CheckboxGroupContext;
  checkboxClass: ComputedRef<string[]>;
  fixedLabelStyle: ComputedRef<Record<string, string>>;

  updateLabelStyle: () => void;
  handleValueChange: (e: InputEvent) => void;
}

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<Array<IModelType>>,
    default: (): IModelType[] => []
  },
  vertical: Boolean,
  size: {
    type: String as PropType<YUISize>,
    default: 'normal',
    validator: (value: string = 'normal'): boolean => YUI_SIZE.indexOf(value) >= 0,
  },
  type: {
    type: String,
    validator: (value: string): boolean => ['solid', 'outline'].indexOf(value) >= 0,
  },
  disabled: Boolean,
  fixedWidth: Number, // 固定每一个checkbox的宽度
}

export interface CheckboxEventParams {
  /** checkbox props value */
  key: IModelType;
  /** checkbox checked value */
  value: boolean;
}
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export type CheckboxGroupMittEvent = {
  checkboxChange: CheckboxEventParams;
};
export const CheckboxGroupKey = 'YCheckboxGroup';
export type CheckboxGroupContext = CheckboxGroupProps & {
  changeEvent: (params: CheckboxEventParams) => void;
};
