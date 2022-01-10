import { ExtractPropTypes, PropType, Ref, ComputedRef } from 'vue';
import { YUISize } from '@base';
import { FormItemContext } from '@components/form/types';
export declare type AutoSize = {
    minRows?: number;
    maxRows?: number;
};
export declare const RESTRICTION_TYPE: {
    VALUE: string;
    INPUT: string;
};
export declare const TEXTAREA_MIN_ROW = 2;
export declare const inputProps: {
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    type: {
        type: PropType<"textarea" | "text" | "password" | "numeric">;
        default: string;
        validator: (value: any) => boolean;
    };
    size: {
        type: PropType<YUISize>;
        default: string;
        validator: (value: string) => boolean;
    };
    name: StringConstructor;
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    /** 默认在clearable状态下点击X会清空value，若为true则不清空 */
    beforeClear: PropType<boolean | (() => boolean)>;
    /** 控制是否能被用户缩放 */
    resize: {
        type: PropType<"none" | "vertical" | "both" | "horizontal">;
        default: string;
        validator: (value: any) => boolean;
    };
    autosize: {
        type: PropType<boolean | AutoSize>;
        default: boolean;
    };
    readonly: BooleanConstructor;
    required: BooleanConstructor;
    /** 输入字段是否应该启用自动完成功能 */
    autocomplete: {
        type: PropType<"on" | "off">;
        default: string;
        validator: (value: any) => boolean;
    };
    maxlength: NumberConstructor;
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    error: BooleanConstructor;
    errorMessage: StringConstructor;
    prefixLabel: StringConstructor;
    prefixIcon: StringConstructor;
    suffixLabel: StringConstructor;
    suffixIcon: StringConstructor;
    restriction: PropType<string | RegExp | (() => string)>;
    restrictionType: {
        type: PropType<"value" | "input">;
        default: string;
        validator: (value: any) => boolean;
    };
    lazy: BooleanConstructor;
    helpText: StringConstructor;
    showWordLimit: BooleanConstructor;
    precision: {
        type: NumberConstructor;
        validator: (value: any) => boolean;
    };
    isRound: BooleanConstructor;
    unicodeNormalized: BooleanConstructor;
};
export declare type InputProps = ExtractPropTypes<typeof inputProps>;
export interface InputState {
    focused: boolean;
    currentValue: string | number;
    textareaCalcStyle: Record<string, string>;
}
export interface InputComputedState {
    focused: Ref<boolean>;
    currentValue: Ref<string | number>;
    textareaCalcStyle: Ref<Record<string, string>>;
    nativeProps: ComputedRef<Record<string, string>>;
    formItem: FormItemContext;
    isNumber: ComputedRef<boolean>;
    innerClass: ComputedRef<string[]>;
    textLength: ComputedRef<number>;
    textareaStyle: ComputedRef<Record<string, string>>;
    isWordLimitVisible: ComputedRef<boolean>;
    computedRestriction: ComputedRef<string | (() => string) | RegExp>;
    computedRestrictionType: ComputedRef<string>;
    computedPlaceholder: ComputedRef<string>;
}
