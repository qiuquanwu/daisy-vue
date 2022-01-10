import { ExtractPropTypes, PropType } from 'vue';
import { YUISize } from '@base';
export declare const switchProps: {
    modelValue: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: BooleanConstructor;
    activeText: StringConstructor;
    inactiveText: StringConstructor;
    size: {
        type: PropType<YUISize>;
        default: string;
        validator: (value?: string) => boolean;
    };
};
export declare type SwitchProps = ExtractPropTypes<typeof switchProps>;
