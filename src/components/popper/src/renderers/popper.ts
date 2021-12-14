import { withDirectives, Transition, vShow, withCtx, h } from 'vue';
import type { CSSProperties, Ref, VNode } from 'vue';
import { NOOP } from '@vue/shared';
import { Theme } from '@components/popper/types';

interface RenderPopperProps {
  theme: Theme;
  name: string;
  stopPopperMouseEvent: boolean;
  popperClass: string;
  popperStyle?: Partial<CSSProperties>;
  popperId: string;
  popperRef?: Ref<HTMLElement>;
  pure?: boolean;
  visible: boolean;

  onMouseenter: () => void;
  onMouseleave: () => void;
  onAfterEnter?: () => void;
  onAfterLeave?: () => void;
  onBeforeEnter?: () => void;
  onBeforeLeave?: () => void;
}

export default function renderPopper(props: RenderPopperProps, children: VNode[]): JSX.Element {
  const {
    theme,
    name,
    stopPopperMouseEvent,
    popperClass,
    popperRef = 'popperRef',
    popperId,
    popperStyle = {},
    pure,
    visible,

    onMouseenter,
    onMouseleave,
    onBeforeEnter,
    onBeforeLeave,
    onAfterEnter,
    onAfterLeave,
  } = props;

  const classList = [popperClass, 'yoga-popper', `is-${theme}`, pure ? 'is-pure' : ''];
  const stop = (e: Event) => e.stopPropagation();
  const mouseUpAndDown = stopPopperMouseEvent ? stop : NOOP;

  /**
   * same like
   * <transition :name="name">
   *  <div v-show="visible" :aria-hidden="!visible" :class="classList" ref="popperRef" role="tooltip" @mouseenter="" @mouseleave="" @click="">
   *    <slot />
   *  </div>
   * </transition>
   */
  return h(
    Transition,
    {
      name,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
    },
    {
      // default slot
      default: withCtx(() => [
        withDirectives(
          h(
            'div',
            {
              'aria-hidden': String(!visible),
              class: classList,
              style: popperStyle,
              id: popperId,
              ref: popperRef,
              role: 'tooltip',
              onMouseenter,
              onMouseleave,
              onClick: stop,
              onMousedown: mouseUpAndDown,
              onMouseup: mouseUpAndDown,
            },
            children
          ),
          [[vShow, visible]]
        ),
      ]),
    }
  );
}
