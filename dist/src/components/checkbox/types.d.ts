import { Ref, ExtractPropTypes, PropType, ComputedRef } from 'vue';
import { YUISize } from '@base';
import { IModelType } from '@components/radio/types';
declare type IModelValue = boolean | string | number;
export declare const checkboxProps: {
    /** v-model的绑定 */
    modelValue: {
        type: PropType<IModelValue>;
        default: any;
    };
    /** 用于group时才有效 */
    value: PropType<IModelValue>;
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    /** native prop, 用于实现多选一 */
    name: StringConstructor;
};
export declare type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
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
export declare const checkboxGroupProps: {
    modelValue: {
        type: PropType<IModelType[]>;
        default: () => IModelType[];
    };
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
    disabled: BooleanConstructor;
    fixedWidth: NumberConstructor;
};
export interface CheckboxEventParams {
    /** checkbox props value */
    key: IModelType;
    /** checkbox checked value */
    value: boolean;
}
export declare type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export declare type CheckboxGroupMittEvent = {
    checkboxChange: CheckboxEventParams;
};
export declare const CheckboxGroupKey = "YCheckboxGroup";
export declare type CheckboxGroupContext = CheckboxGroupProps & {
    changeEvent: (params: CheckboxEventParams) => void;
};
export {};
