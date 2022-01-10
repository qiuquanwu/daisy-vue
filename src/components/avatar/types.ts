import { ExtractPropTypes, PropType } from 'vue';

type AvatarSize = 'large' | 'default' | 'small' | 'tiny' | number[] | string[];
type OnlineType = Boolean | undefined | null;
export const avatarProps = {
  src: {
    type: String,
    required: true,
  },
  size: {
    type: [String, Array] as PropType<AvatarSize>,
    default: 'default',
  },
  circle: {
    type: Boolean,
    default: false,
  },
  online: {
    type: Boolean as PropType<OnlineType>,
    default: undefined,
  },
};

export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
