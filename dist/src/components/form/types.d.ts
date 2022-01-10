import { ExtractPropTypes, PropType } from 'vue';
import { RuleItem } from 'async-validator';
import { Emitter } from 'mitt';
import { YUISize } from '@base';
import { noop } from '@components/form/src/util';
export declare interface FormItemRule extends RuleItem {
    trigger?: string;
}
export declare const formProps: {
    readonly model: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
    readonly rules: {
        readonly type: PropType<FormRule>;
        readonly default: () => {};
    };
    readonly validateTrigger: {
        readonly type: StringConstructor;
        readonly default: "";
        readonly validator: (value: any) => boolean;
    };
    readonly inline: BooleanConstructor;
    readonly labelAlign: {
        readonly type: StringConstructor;
        readonly default: "right";
        readonly validator: (value: any) => boolean;
    };
    readonly size: {
        readonly type: PropType<YUISize>;
        readonly default: "normal";
        readonly validator: (value: any) => boolean;
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly validateOnRuleChange: BooleanConstructor;
    readonly autocomplete: {
        readonly type: StringConstructor;
        readonly default: "off";
        readonly validator: (value: any) => boolean;
    };
};
export interface FormRule {
    message?: string;
    trigger?: string;
    [key: string]: string | ValidatorFn | FormRule | FormRule[];
}
export declare type FormProps = ExtractPropTypes<typeof formProps>;
export declare type FormContext = FormProps & {
    formMitt: Emitter<FormEvent>;
    reset?: () => void;
    emit: (evt: string, prop: string, noError: boolean, model: Record<string, any>) => void;
};
export declare type FormEvent = {
    addField: FormItemContext;
    removeField: FormItemContext;
};
export declare const formItemProps: {
    readonly prop: StringConstructor;
    readonly label: StringConstructor;
    readonly rules: PropType<FormItemRule | FormItemRule[]>;
    readonly for: StringConstructor;
    readonly required: BooleanConstructor;
    readonly size: {
        readonly type: PropType<YUISize>;
        readonly default: "normal";
        readonly validator: (value: any) => boolean;
    };
    readonly labelWidth: NumberConstructor;
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type FormItemProps = ExtractPropTypes<typeof formItemProps>;
export declare type FormItemContext = FormItemProps & {
    formItemMitt: Emitter<FormItemEvent>;
    reset: () => void;
    validate: (trigger?: string | typeof noop, callback?: typeof noop, errorHandler?: ErrorHandlerConfig) => boolean | Promise<boolean>;
};
export declare type FormItemEvent = {
    fieldFocus: () => void;
    fieldBlur: () => void;
    fieldChange: () => void;
};
export interface ValidateCallback {
    valid: boolean;
    invalidFields: FormItemProps[];
}
export declare const FormKey = "YogaForm";
export declare const FormItemKey = "YogaFormItem";
export interface ErrorHandlerConfig {
    scrollToError?: boolean;
    scrollConfig?: {
        align?: {
            left?: number;
            top?: number;
            leftOffset?: number;
            topOffset?: number;
        };
    };
}
export declare type ValidateCallbackType = ((arg: ValidateCallback) => void) | ErrorHandlerConfig;
export declare type ValidatorFn = (value: any, model: any) => Promise<boolean | Error>;
export declare type AsyncValidatorFn = (value: any, model: any, formModel?: any) => Promise<{
    error: boolean;
    errorMessage: string;
}>;
