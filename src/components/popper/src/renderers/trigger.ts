import { cloneVNode } from 'vue';
import type { Ref, VNode, ComponentPublicInstance } from 'vue';
import { getFirstValidNode } from '@utils/vnode';

interface RenderTriggerProps extends Record<string, unknown> {
  ref: string | Ref<HTMLElement | ComponentPublicInstance>;
  onClick?: (e: Event) => void;
  onMouseover?: (e: Event) => void;
  onMouseleave?: (e: Event) => void;
  onFocus?: (e: Event) => void;
}

export default function renderTrigger(trigger: VNode[], prop: RenderTriggerProps): JSX.Element {
  const firstElement = getFirstValidNode(trigger, 1);
  if (!firstElement) {
    throw Error('trigger expects single rooted node');
  }

  return cloneVNode(firstElement, prop, true);
}
