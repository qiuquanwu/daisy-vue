import { ExtractPropTypes, PropType } from 'vue';
declare type AvatarSize = 'large' | 'default' | 'small' | 'tiny' | number[] | string[];
export declare const avatarProps: {
    src: {
        type: StringConstructor;
        required: boolean;
    };
    size: {
        type: PropType<AvatarSize>;
        default: string;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    online: {
        type: PropType<Boolean>;
        default: any;
    };
};
export declare type AvatarProps = ExtractPropTypes<typeof avatarProps>;
export {};
