declare const _default: import("vue").DefineComponent<{
    src: {
        type: StringConstructor;
        required: boolean;
    };
    size: {
        type: import("vue").PropType<"large" | "default" | "small" | "tiny" | number[] | string[]>;
        default: string;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    online: {
        type: import("vue").PropType<Boolean>;
        default: any;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    src?: unknown;
    size?: unknown;
    circle?: unknown;
    online?: unknown;
} & {
    size: "large" | "default" | "small" | "tiny" | number[] | string[];
    circle: boolean;
} & {
    src?: string;
    online?: Boolean;
}>, {
    size: "large" | "default" | "small" | "tiny" | number[] | string[];
    circle: boolean;
    online: Boolean;
}>;
export default _default;
