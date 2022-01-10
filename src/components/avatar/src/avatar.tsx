import { isArray } from '@vue/shared';
import { h, defineComponent, SetupContext, computed, StyleValue } from 'vue';
import { avatarProps, AvatarProps } from '../types';

export default defineComponent({
  name: 'DAvatar',
  props: avatarProps,
  setup(props: AvatarProps, { slots }: SetupContext) {
    return () => {
      const { src, size, circle, online } = props;
      const style = computed<StyleValue>(() => {
        if (typeof size === 'string') {
          let num = new Map<string, number>([
            ['large', 6],
            ['default', 5],
            ['small', 4],
            ['tiny', 3],
          ]).get(size);
          return {
            height: num + 'rem',
            width: num + 'rem',
          };
        } else if (isArray(size) && size.length === 2) {
          return {
            height: size[0] + 'px',
            width: size[1] + 'px',
          };
        }
        return {};
      });
      // console.log(style.value);
      const classCls = computed<string>(() => {
        let temp: string[] = [];
        circle ? temp.push('rounded-full') : temp.push('rounded-btn');
        return temp.join(' ');
      });
      const mainCls = computed<string>(() => {
        let temp: string[] = ['avatar'];
        if (typeof online === 'boolean') {
          online ? temp.push('online') : temp.push('offline');
        }
        return temp.join(' ');
      });
      return (
        <div class={mainCls.value}>
          <div class={classCls.value} style={style.value}>
            <img src={src} />
          </div>
        </div>
      );
    };
  },
});
