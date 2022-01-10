import { FormEvent, ValidateCallback, ErrorHandlerConfig } from "@components/form/types";
declare const _default: import("vue").DefineComponent<{
    readonly model: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly default: () => {};
    };
    readonly rules: {
        readonly type: import("vue").PropType<import("@components/form/types").FormRule>;
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
        readonly type: import("vue").PropType<import("../../../base").YUISize>;
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
}, {
    formClass: import("vue").ComputedRef<string[]>;
    formMitt: import("mitt").Emitter<FormEvent>;
    validate: (callback: (arg: ValidateCallback) => void, errorHandler: ErrorHandlerConfig) => Promise<unknown>;
    validateFields: (props: string | string[], callback: (arg: ValidateCallback) => void, errorHandler: any) => Promise<unknown>;
    clearValidate: () => void;
    clearValidateFields: (props: string | string[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "validate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly model?: unknown;
    readonly rules?: unknown;
    readonly validateTrigger?: unknown;
    readonly inline?: unknown;
    readonly labelAlign?: unknown;
    readonly size?: unknown;
    readonly showMessage?: unknown;
    readonly validateOnRuleChange?: unknown;
    readonly autocomplete?: unknown;
} & {
    size: import("../../../base").YUISize;
    rules: import("@components/form/types").FormRule;
    showMessage: boolean;
    model: {};
    validateTrigger: string;
    inline: boolean;
    labelAlign: string;
    validateOnRuleChange: boolean;
    autocomplete: string;
} & {}>, {
    size: import("../../../base").YUISize;
    rules: import("@components/form/types").FormRule;
    showMessage: boolean;
    model: {};
    validateTrigger: string;
    inline: boolean;
    labelAlign: string;
    validateOnRuleChange: boolean;
    autocomplete: string;
}>;
export default _default;
