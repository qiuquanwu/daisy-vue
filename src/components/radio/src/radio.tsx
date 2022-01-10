import { h, defineComponent, computed, SetupContext } from 'vue';
import { RadioProps, radioProps } from '../types';
import useRadio from './use-radio';

export default defineComponent({
  name: 'YRadio',
  props: radioProps,
  emits: ['update:modelValue', 'change'],
  setup: (props: RadioProps, context: SetupContext) => {
    const { isDisabled, checkedValue, handleValueChange } = useRadio(props, context);
    const radioClass = computed(() => {
      return ['yoga-radio', isDisabled.value ? 'disabled' : '', checkedValue.value ? 'checked' : ''];
    });

    return {
      radioClass,
      isDisabled,
      checkedValue,
      handleValueChange,
    };
  },
  render() {
    return (
      <label id={this.name} class={this.radioClass}>
        <input
          type='radio'
          class='yoga-radio__input'
          name={this.name}
          value={this.value}
          checked={this.checkedValue}
          disabled={this.isDisabled}
          onChange={this.handleValueChange}
        />
        <span class='yoga-radio__indicator'></span>
        {this.$slots.default && <span class='yoga-radio__label'>{this.$slots.default?.()}</span>}
      </label>
    );
  },
});
