declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<import("../../radio/types").IModelType[]>;
        default: () => import("../../radio/types").IModelType[];
    };
    vertical: BooleanConstructor;
    size: {
        type: import("vue").PropType<import("../../../base").YUISize>;
        default: string;
        validator: (value?: string) => boolean;
    };
    type: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    disabled: BooleanConstructor;
    fixedWidth: NumberConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    vertical?: unknown;
    size?: unknown;
    type?: unknown;
    disabled?: unknown;
    fixedWidth?: unknown;
} & {
    modelValue: import("../../radio/types").IModelType[];
    disabled: boolean;
    vertical: boolean;
    size: import("../../../base").YUISize;
} & {
    type?: string;
    fixedWidth?: number;
}>, {
    modelValue: import("../../radio/types").IModelType[];
    disabled: boolean;
    vertical: boolean;
    size: import("../../../base").YUISize;
}>;
export default _default;
