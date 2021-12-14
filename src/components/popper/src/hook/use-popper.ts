import { reactive, ref, unref, computed, watch, toRefs } from 'vue';
import type { SetupContext, ComponentPublicInstance } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { createPopper, Instance as PopperInstance } from '@popperjs/core';
import { Nullable, RefElement } from '@base';
import { PopperProps, EmitType, IPopperState, PopperEvent, TriggerType, PopperState } from '@components/popper/types';
import buildModifier from '@components/popper/src/hook/build-modifier';
import PopupManager from '@utils/popup-manager';
import { isBool, isString, isHTMLElement, isArray } from '@utils/helper';

export default function usePopper(props: PopperProps, { emit }: SetupContext<EmitType[]>): IPopperState {
  const arrowRef = ref<RefElement>(null);
  const popperRef = ref<RefElement>(null);
  const triggerRef = ref<RefElement>(null);
  const state = reactive<PopperState>({
    visible: !!props.visible,
    computedPopperStyle: {
      zIndex: PopupManager.zIndex,
    },
  });

  const popperId = `yoga-popper__${uuidv4()}`;
  let popperInstance: Nullable<PopperInstance> = null;
  let showTimer: Nullable<number> = null;
  let hideTimer: Nullable<number> = null;
  let triggerFocused = false;

  const isManualMode = computed(() => typeof props.visible === 'boolean');
  const popperOptions = computed(() => {
    return {
      placement: props.placement,
      ...props.popperOptions,
      modifiers: buildModifier(
        {
          ...props,
          arrow: arrowRef.value,
        },
        props.popperOptions?.modifiers
      ),
    };
  });
  const visibility = computed<boolean>({
    get() {
      if (props.disabled) {
        return false;
      }

      if (isBool(props.visible)) {
        return props.visible;
      }

      return state.visible;
    },
    set(value: boolean) {
      if (unref(isManualMode)) {
        return;
      }

      if (isBool(props.visible)) {
        emit('update:visible', value);
      } else {
        state.visible = value;
      }
    },
  });

  /** inner function start */
  function _show() {
    if (props.autoClose > 0) {
      hideTimer = window.setTimeout(() => {
        _hide();
      }, props.autoClose);
    }

    visibility.value = true;
  }

  function _hide() {
    visibility.value = false;
  }

  function clearTimer() {
    clearTimeout(hideTimer);
    clearTimeout(showTimer);
  }

  function detachPopper() {
    popperInstance?.destroy?.();
    popperInstance = null;
  }

  function doDestroy(forceDestroy?: boolean) {
    if (!popperInstance || (unref(visibility) && !forceDestroy)) {
      return;
    }
    detachPopper();
  }

  const close = () => {
    _hide();

    if (props.disabled) {
      doDestroy(true);
    }
  };
  /** inner function end */

  const show = () => {
    if (unref(isManualMode) || props.disabled) {
      return;
    }
    clearTimer();

    if (props.showAfter === 0) {
      _show();
    } else {
      showTimer = window.setTimeout(() => {
        _show();
      }, props.showAfter);
    }
  };

  const hide = () => {
    if (unref(isManualMode)) {
      return;
    }
    clearTimer();

    if (props.hideAfter === 0) {
      close();
    } else {
      hideTimer = window.setTimeout(() => {
        close();
      }, props.hideAfter);
    }
  };

  function onPopperMouseEnter() {
    // 如果 trigger 是hover模式，当鼠标移动到popper content上不会关闭popper
    if (props.enterable && props.trigger === 'hover') {
      clearTimeout(hideTimer);
    }
  }

  // popper mouseleave event
  function onPopperMouseLeave() {
    const { trigger } = props;
    // 当 trigger 是click或者是focus模式，则不在mouseleave popper时触发关闭popper的操作
    const shouldPrevent =
      (isString(trigger) && (trigger === 'click' || trigger === 'focus')) ||
      (trigger.length === 1 && (trigger[0] === 'click' || trigger[0] === 'focus'));

    if (shouldPrevent) {
      return;
    }
    hide();
  }

  // 初始化popper instance
  function initPopper() {
    if (!unref(visibility)) {
      return;
    }

    const triggerRefValue = unref(triggerRef);
    const triggerEle = isHTMLElement(triggerRefValue)
      ? triggerRefValue
      : (triggerRefValue as unknown as ComponentPublicInstance).$el;
    popperInstance = createPopper(triggerEle, unref(popperRef), unref(popperOptions));
    popperInstance.update();
  }

  // 更新popper instance, 如果不存在，则调用initPopper完成初始化
  function update() {
    if (!unref(visibility)) {
      return;
    }

    if (popperInstance) {
      popperInstance.update();
    } else {
      initPopper();
    }
  }

  const events = {} as PopperEvent;
  // 处理非manual mode的情况，主要是添加事件处理
  if (!unref(isManualMode)) {
    const popperEventHandler = (e: Event) => {
      e.stopPropagation();

      switch (e.type) {
        case 'click':
          if (triggerFocused) {
            triggerFocused = false;
          } else {
            unref(visibility) ? hide() : show();
          }
          break;
        case 'mouseenter':
          show();
          break;
        case 'mouseleave':
          hide();
          break;
        case 'focus':
          triggerFocused = true;
          show();
          break;
        case 'blur':
          triggerFocused = false;
          hide();
          break;
      }
    };

    const triggerEventMap: Partial<Record<TriggerType, (keyof PopperEvent)[]>> = {
      click: ['onClick'],
      hover: ['onMouseenter', 'onMouseleave'],
      focus: ['onFocus', 'onBlur'],
    };

    const mapEvents = (t: TriggerType) => {
      triggerEventMap[t].forEach((event) => {
        events[event] = popperEventHandler;
      });
    };

    if (isArray(props.trigger)) {
      Object.values(props.trigger).forEach(mapEvents);
    } else {
      mapEvents(props.trigger);
    }
  }

  // 当popper options更新时需要调用update更新
  watch(popperOptions, (options) => {
    if (popperInstance) {
      popperInstance.setOptions(options);
      popperInstance.update();
    }
  });

  watch(visibility, (visible) => {
    if (visible) {
      state.computedPopperStyle.zIndex = PopupManager.nextZIndex();
      initPopper();
    }
  });

  return {
    ...toRefs(state),
    popperRef,
    arrowRef,
    triggerRef,
    popperId,
    popperInstance,
    events,
    visibility,
    isManualMode,
    initPopper,
    hide,
    show,
    update,
    doDestroy,
    onPopperMouseEnter,
    onPopperMouseLeave,
    onAfterEnter: () => {
      emit('after-enter');
    },
    onAfterLeave: () => {
      emit('after-leave');
    },
    onBeforeEnter: () => {
      emit('before-enter');
    },
    onBeforeLeave: () => {
      emit('before-leave');
    },
  };
}
