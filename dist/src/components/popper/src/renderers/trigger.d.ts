import type { Ref, VNode, ComponentPublicInstance } from 'vue';
interface RenderTriggerProps extends Record<string, unknown> {
    ref: string | Ref<HTMLElement | ComponentPublicInstance>;
    onClick?: (e: Event) => void;
    onMouseover?: (e: Event) => void;
    onMouseleave?: (e: Event) => void;
    onFocus?: (e: Event) => void;
}
export default function renderTrigger(trigger: VNode[], prop: RenderTriggerProps): JSX.Element;
export {};
