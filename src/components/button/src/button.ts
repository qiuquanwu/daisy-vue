import { h, defineComponent, PropType, SetupContext } from 'vue';
import { YUISize } from '@base';
import { Icon } from '@components/icon';
import { ButtonNativeType, ButtonProps, ButtonType } from '../types';

export default defineComponent({
  name: 'YButton',
  props: {
    type: String as PropType<ButtonType>,
    size: {
      type: String as PropType<YUISize>,
      default: 'normal',
      validator: (value: string = 'normal') =>
        ['large', 'normal', 'small'].indexOf(value) >= 0,
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
      validator: (value: string = 'button') =>
        ['button', 'reset', 'submit'].indexOf(value) >= 0,
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
  setup(props: ButtonProps, { slots }: SetupContext) {
    const {
      disabled,
      type,
      size,
      nativeType,
      href,
      target,
      fullWidth,
      dashed,
      circle,
      round,
      outline,
      icon,
      suffixIcon,
    } = props;
    const defaultSlot = slots.default?.();
    const tagName = href ? 'a' : 'button';
    const buttonClass = {
      'yoga-button': true,
      [`yoga-button--${type}`]: type,
      [`yoga-button--${size}`]: size,
      'yoga-button--outline': outline,
      'yoga-button--dashed': dashed,
      'yoga-button--block': fullWidth,
      'yoga-button--round': round,
      'yoga-button--circle': circle,
      'yoga-button--disabled': disabled,
      'yoga-button--underline': href && type === 'link',
    };
    const onClick = (event: MouseEvent) => {
      document.documentElement.removeAttribute('data-focus-visible');
      if (disabled) {
        event.preventDefault();
        return;
      }

      props.onClick?.(event);
    };
    const propsData = href
      ? { class: buttonClass, href: disabled ? null : href, target, onClick }
      : { class: buttonClass, type: nativeType, disabled, onClick };
    const children = [];
    if (icon) {
      children.push(h(Icon, { src: icon }));
    }
    if (defaultSlot) {
      children.push(h('span', {}, defaultSlot));
    }
    if (suffixIcon) {
      children.push(h(Icon, { src: suffixIcon }));
    }

    return () => h(tagName, propsData, children);
  },
});
