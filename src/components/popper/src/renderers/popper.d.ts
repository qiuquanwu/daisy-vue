import type { CSSProperties, Ref, VNode } from 'vue';
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
export default function renderPopper(props: RenderPopperProps, children: VNode[]): JSX.Element;
export {};
