import { computed, inject, nextTick, SetupContext } from 'vue';
import { RadioGroupContext, RadioGroupKey, RadioProps, UseRadio } from '../types';
import { FormItemContext, FormItemKey } from '@components/form/types';

export default function (props: RadioProps, { emit }: SetupContext): UseRadio {
  const radioGroup: RadioGroupContext = inject(RadioGroupKey, null);
  const formItem = inject(FormItemKey, {} as FormItemContext);
  const checkedValue = computed(() => {
    const currentValue = radioGroup ? radioGroup.modelValue : props.modelValue;
    return currentValue === props.value;
  });
  const size = computed(() => formItem?.size || (radioGroup && radioGroup.size));
  const isDisabled = computed(() => (radioGroup ? radioGroup.disabled || props.disabled : props.disabled));
  function handleValueChange() {
    nextTick(() => {
      emit('change', props.value);
      if (radioGroup) {
        radioGroup.changeEvent?.(props.value);
        return;
      }
      emit('update:modelValue', props.value);
    });
  }

  return {
    size,
    isDisabled,
    radioGroup,
    checkedValue,
    handleValueChange,
  };
}
