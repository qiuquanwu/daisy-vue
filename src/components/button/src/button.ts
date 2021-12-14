import { h, defineComponent, computed, PropType } from 'vue';
import { YUISize } from '@base';
import { Icon } from '@components/icon';
import { ButtonNativeType, ButtonProps, ButtonType } from '@components/button/types';

export default defineComponent({
  name: 'YButton',
  props: {
    type: String as PropType<ButtonType>,
    size: {
      type: String as PropType<YUISize>,
      default: 'normal',
      validator: (value: string = 'normal') => ['large', 'normal', 'small'].indexOf(value) >= 0,
    },
    outline: Boolean,
    disabled: Boolean,
    dashed: Boolean,
    fullWidth: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: String,
    suffixIcon: String,
    nativeType: {
      type: String as PropType<ButtonNativeType>,
      default: 'button',
      validator: (value: string = 'button') => ['button', 'reset', 'submit'].indexOf(value) >= 0,
    },
    href: String,
    target: {
      type: String,
      default: 'self',
    },
    onClick: Function as PropType<(e: MouseEvent) => void>,
  },
  components: {
    Icon,
  },
  setup(props: ButtonProps) {
    const onClick = (event: MouseEvent) => {
      document.documentElement.removeAttribute('data-focus-visible');
      if (props.disabled) {
        event.preventDefault();
        return;
      }

      props.onClick?.(event);
    };
    const propsData = computed(() => {
      const type = props.type;
      const size = props.size;
      const href = props.href;
      const target = props.target;
      const disabled = props.disabled;
      const buttonClass = {
        'yoga-button': true,
        [`yoga-button--${type}`]: type,
        [`yoga-button--${size}`]: size,
        'yoga-button--outline': props.outline,
        'yoga-button--dashed': props.dashed,
        'yoga-button--block': props.fullWidth,
        'yoga-button--round': props.round,
        'yoga-button--circle': props.circle,
        'yoga-button--disabled': props.disabled,
        'yoga-button--underline': props.href && type === 'link',
      };

      return href
        ? { class: buttonClass, href: disabled ? null : href, target, onClick }
        : { class: buttonClass, type: props.nativeType, disabled, onClick };
    });

    return {
      propsData,
    };
  },
  render() {
    const { $slots, href, propsData, icon, suffixIcon } = this;
    const tagName = href ? 'a' : 'button';

    return h(tagName, propsData, [
      icon ? h(Icon, { src: icon }) : null,
      $slots.default ? h('span', {}, $slots.default()) : null,
      suffixIcon ? h(Icon, { src: suffixIcon }) : null,
    ]);
  },
});
