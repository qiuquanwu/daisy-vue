declare const _default: import("vue").DefineComponent<{
    type: {
        type: any;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    outline: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    size: {
        type: any;
        required: false;
        default: string;
    };
    icon: {
        type: any;
        required: false;
    };
    iconPostion: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    disabled?: unknown;
    outline?: unknown;
    size?: unknown;
    icon?: unknown;
    iconPostion?: unknown;
} & {
    disabled: boolean;
    type: any;
    outline: boolean;
    size: any;
    icon: any;
    iconPostion: string;
} & {}>, {
    disabled: boolean;
    type: any;
    outline: boolean;
    size: any;
    icon: any;
    iconPostion: string;
}>;
export default _default;
