import { noop } from "@components/form/src/util";
declare const _default: import("vue").DefineComponent<{
    readonly prop: StringConstructor;
    readonly label: StringConstructor;
    readonly rules: import("vue").PropType<import("@components/form/types").FormItemRule | import("@components/form/types").FormItemRule[]>;
    readonly for: StringConstructor;
    readonly required: BooleanConstructor;
    readonly size: {
        readonly type: import("vue").PropType<import("../../../base").YUISize>;
        readonly default: "normal";
        readonly validator: (value: any) => boolean;
    };
    readonly labelWidth: NumberConstructor;
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, {
    formItemClass: import("vue").ComputedRef<string[]>;
    labelFor: import("vue").ComputedRef<string>;
    formItemLabelClass: import("vue").ComputedRef<(string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[])[]>;
    error: import("vue").Ref<boolean>;
    errorMessage: import("vue").Ref<string>;
    showError: import("vue").ComputedRef<boolean>;
    reset: () => void;
    validate: (trigger?: string | typeof noop, callback?: typeof noop) => boolean | Promise<boolean>;
    onFieldFocus: () => void;
    onFieldBlur: () => void;
    onFieldChange: () => void;
    clearValidate: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly prop?: unknown;
    readonly label?: unknown;
    readonly rules?: unknown;
    readonly for?: unknown;
    readonly required?: unknown;
    readonly size?: unknown;
    readonly labelWidth?: unknown;
    readonly showMessage?: unknown;
} & {
    required: boolean;
    size: import("../../../base").YUISize;
    showMessage: boolean;
} & {
    label?: string;
    prop?: string;
    rules?: unknown;
    for?: string;
    labelWidth?: number;
}>, {
    required: boolean;
    size: import("../../../base").YUISize;
    showMessage: boolean;
}>;
export default _default;
