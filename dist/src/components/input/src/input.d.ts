import { AutoSize } from '@components/input/types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    type: {
        type: import("vue").PropType<"textarea" | "text" | "password" | "numeric">;
        default: string;
        validator: (value: any) => boolean;
    };
    size: {
        type: import("vue").PropType<import("../../../base").YUISize>;
        default: string;
        validator: (value: string) => boolean;
    };
    name: StringConstructor;
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    beforeClear: import("vue").PropType<boolean | (() => boolean)>;
    resize: {
        type: import("vue").PropType<"none" | "vertical" | "both" | "horizontal">;
        default: string;
        validator: (value: any) => boolean;
    };
    autosize: {
        type: import("vue").PropType<boolean | AutoSize>;
        default: boolean;
    };
    readonly: BooleanConstructor;
    required: BooleanConstructor;
    autocomplete: {
        type: import("vue").PropType<"on" | "off">;
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
    restriction: import("vue").PropType<string | RegExp | (() => string)>;
    restrictionType: {
        type: import("vue").PropType<"value" | "input">;
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
}, {
    focus: () => void;
    blur: () => void;
    renderInput: () => JSX.Element;
    renderTextareaInput: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "change" | "clear" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    type?: unknown;
    size?: unknown;
    name?: unknown;
    placeholder?: unknown;
    disabled?: unknown;
    clearable?: unknown;
    beforeClear?: unknown;
    resize?: unknown;
    autosize?: unknown;
    readonly?: unknown;
    required?: unknown;
    autocomplete?: unknown;
    maxlength?: unknown;
    max?: unknown;
    min?: unknown;
    error?: unknown;
    errorMessage?: unknown;
    prefixLabel?: unknown;
    prefixIcon?: unknown;
    suffixLabel?: unknown;
    suffixIcon?: unknown;
    restriction?: unknown;
    restrictionType?: unknown;
    lazy?: unknown;
    helpText?: unknown;
    showWordLimit?: unknown;
    precision?: unknown;
    isRound?: unknown;
    unicodeNormalized?: unknown;
} & {
    type: "textarea" | "text" | "password" | "numeric";
    required: boolean;
    error: boolean;
    disabled: boolean;
    size: import("../../../base").YUISize;
    clearable: boolean;
    resize: "none" | "vertical" | "both" | "horizontal";
    autosize: boolean;
    readonly: boolean;
    autocomplete: "on" | "off";
    max: number;
    min: number;
    restrictionType: "value" | "input";
    lazy: boolean;
    showWordLimit: boolean;
    isRound: boolean;
    unicodeNormalized: boolean;
} & {
    name?: string;
    modelValue?: string | number;
    placeholder?: string;
    beforeClear?: boolean | (() => boolean);
    maxlength?: number;
    errorMessage?: string;
    prefixLabel?: string;
    prefixIcon?: string;
    suffixLabel?: string;
    suffixIcon?: string;
    restriction?: string | RegExp | (() => string);
    helpText?: string;
    precision?: number;
}>, {
    type: "textarea" | "text" | "password" | "numeric";
    required: boolean;
    error: boolean;
    modelValue: string | number;
    disabled: boolean;
    size: import("../../../base").YUISize;
    clearable: boolean;
    resize: "none" | "vertical" | "both" | "horizontal";
    autosize: boolean;
    readonly: boolean;
    autocomplete: "on" | "off";
    max: number;
    min: number;
    restrictionType: "value" | "input";
    lazy: boolean;
    showWordLimit: boolean;
    isRound: boolean;
    unicodeNormalized: boolean;
}>;
export default _default;
