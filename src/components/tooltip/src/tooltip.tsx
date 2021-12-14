import { h, defineComponent, computed, SetupContext, cloneVNode } from 'vue';
import { UPDATE_MODEL_EVENT } from '@base';
import { Popper } from '@components/popper';
import { getFirstValidNode } from '@utils/vnode';
import { tooltipProps, TooltipProps } from '@components/tooltip/types';

export default defineComponent({
  name: 'YTooltip',
  props: tooltipProps,
  emits: [UPDATE_MODEL_EVENT],
  setup(props: TooltipProps, { emit }: SetupContext) {
    const onUpdateVisible = (value: boolean) => {
      emit(UPDATE_MODEL_EVENT, value);
    };

    // 这里使用computed而不是直接在render里面读取props的原因是为了解决下面的问题
    // [Vue warn]: Avoid app logic that relies on enumerating keys on a component instance.
    // The keys will be empty in production mode to avoid performance overhead
    const popperProps = computed(() => {
      const { content, tabindex, modelValue, ...popperProps } = props;
      return popperProps;
    });

    return {
      popperProps,
      onUpdateVisible
    };
  },
  render() { // render里面的方法不能放在setup里面，否则即使modelValue变化了，也不会更新
    const {
      $slots,
      content,
      tabindex,
      modelValue,
      popperProps,
      onUpdateVisible,
    } = this;

    return h(
      Popper,
      {
        ...popperProps,
        ref: 'popper',
        visible: modelValue,
        'onUpdate:visible': onUpdateVisible,
      },
      {
        default: () => ($slots.content ? $slots.content() : content),
        trigger: () => {
          if ($slots.default) {
            const firstNode = getFirstValidNode($slots.default(), 1);
            if (firstNode) {
              return cloneVNode(firstNode, { tabindex }, true);
            }
          }

          throw new Error('[yoga-ui]: tooltip need trigger slot');
        }
      }
    );
  }
});
