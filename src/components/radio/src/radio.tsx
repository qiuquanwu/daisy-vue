import { h, defineComponent, computed, SetupContext, ref, nextTick } from "vue";
import { RadioProps, radioProps } from "../types";

export default defineComponent({
  name: "YRadio",
  props: radioProps,
  emits: ["update:modelValue", "change"],
  setup: (props: RadioProps, { emit }: SetupContext) => {
    const radioRef = ref<HTMLInputElement>();
    const isGroup = computed(() => false);
    const radioGroup = { modelValue: false };
    const isDisabled = computed(() => {
      return props.disabled;
    });
    const radioClass = computed(() => {
      return ["yoga-radio", isDisabled.value ? "disabled" : ""];
    });
    const labelStyle = computed(() => {
      const styles: Record<string, string> = {};
      // const fixWidth = this.radioGroup && this.radioGroup.fixWidth;

      // if (fixWidth && typeof fixWidth !== 'boolean') {
      //   styles.width = `${fixWidth}px`;
      //   styles.maxWidth = `${fixWidth}px`;
      //   styles.minWidth = `${fixWidth}px`;
      // }
      return styles;
    });
    // 保存当前radio或radioGroup的actual value,
    const currentValue = computed(() => {
      if (isGroup.value) {
        return radioGroup.modelValue;
      }
      console.log("currentValue", props.modelValue);

      return props.modelValue;
    });
    // 传给input checked的属性，代表当前radio item是否被选中
    const checkedValue = computed(() => {
      console.log(
        "currentValue.value === props.value",
        currentValue.value,
        props.value
      );

      return currentValue.value === props.value;
    });
    function handleValueChange() {
      console.log("handleValueChange", props.value);

      nextTick(() => {
        emit("update:modelValue", props.value);
        emit("change", props.value);
      });
    }
    function handleValueInput(e: Event) {
      emit("update:modelValue", (e.target as HTMLInputElement).value);
    }

    return {
      radioRef,
      radioClass,
      labelStyle,
      isDisabled,
      currentValue,
      checkedValue,
      handleValueInput,
      handleValueChange,
    };
  },
  render() {
    return (
      <label id={this.name} class={this.radioClass}>
        <input
          type="radio"
          class="yoga-radio__input"
          ref={this.radioRef}
          name={this.name}
          checked={this.checkedValue}
          disabled={this.isDisabled}
          value={this.checkedValue}
          onInput={this.handleValueInput}
          onChange={this.handleValueChange}
        />
        <span class="yoga-radio__indicator"></span>
        {this.$slots.default && (
          <span class="yoga-radio__label" style={this.labelStyle}>
            {this.$slots.default?.()}
          </span>
        )}
      </label>
    );
  },
});
