import {
  h,
  defineComponent,
  onMounted,
  onBeforeUnmount,
  renderSlot,
  onActivated,
  onDeactivated,
  toDisplayString,
  withDirectives,
  Fragment,
  Teleport,
} from 'vue';
import type { SetupContext } from 'vue';
import { EmitType, popperProps, PopperProps } from '@components/popper/types';
import { ClickOutside } from '@directives';
import usePopper from '@components/popper/src/hook/use-popper';
import renderArrow from '@components/popper/src/renderers/arrow';
import renderPopper from '@components/popper/src/renderers/popper';
import renderTrigger from '@components/popper/src/renderers/trigger';

export default defineComponent({
  name: 'YPopper',
  props: popperProps,
  emits: ['update:visible', 'after-enter', 'after-leave', 'before-enter', 'before-leave'],
  setup(props: PopperProps, context: SetupContext<EmitType[]>) {
    if (!context.slots.trigger) {
      throw new Error('[yoga-ui: Popper]: trigger must be provided');
    }

    const state = usePopper(props, context);
    const forceDestroy = () => state.doDestroy(true);
    onMounted(state.initPopper);
    onActivated(state.initPopper);
    onBeforeUnmount(forceDestroy);
    onDeactivated(forceDestroy);

    return state;
  },
  render() {
    const {
      $slots,
      appendToBody,
      class: className,
      style,
      theme,
      pure,
      showArrow,
      transition,
      visibility,
      isManualMode,
      popperId,
      popperStyle,
      computedPopperStyle,
      popperClass,
      hide,
      onBeforeEnter,
      onBeforeLeave,
      onAfterEnter,
      onAfterLeave,
      onPopperMouseEnter,
      onPopperMouseLeave,
      stopPopperMouseEvent,
    } = this;

    const arrow = renderArrow(showArrow);
    const popper = renderPopper(
      {
        theme,
        name: transition,
        popperClass,
        popperId,
        popperStyle: {
          ...computedPopperStyle,
          ...popperStyle,
        },
        pure,
        visible: visibility,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
        stopPopperMouseEvent,
        onMouseenter: onPopperMouseEnter,
        onMouseleave: onPopperMouseLeave,
      },
      [
        renderSlot($slots, 'default', {}, () => {
          return [toDisplayString(this.content)];
        }),
        arrow,
      ]
    );
    const triggerSlot = $slots.trigger?.();
    const triggerProps = {
      'aria-describedby': popperId,
      class: className,
      style,
      ref: 'triggerRef',
      ...this.events,
    };
    const trigger = isManualMode
      ? renderTrigger(triggerSlot, triggerProps)
      : withDirectives(renderTrigger(triggerSlot, triggerProps), [[ClickOutside, hide]]);

    return (
      <Fragment>
        {trigger}
        <Teleport to='body' disabled={!appendToBody}>
          {popper}
        </Teleport>
      </Fragment>
    );
  },
});
