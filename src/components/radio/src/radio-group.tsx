import { h, computed, defineComponent, SetupContext, inject, provide, reactive, toRefs, onMounted } from "vue";
import mitt from "mitt";
import { radioGroupProps, RadioGroupProps, RadioGroupMittEvent, RadioGroupKey } from "../types";
import { FormItemContext, FormItemKey } from "@components/form/types";
import "../styles/radio-group.scss";

export default defineComponent({
  name: "YRadioGroup",
  props: radioGroupProps,
  emits: ["update:modelValue", "change"],
  setup(props: RadioGroupProps, { slots, emit }: SetupContext) {
    const radioGroupMitt = mitt<RadioGroupMittEvent>();
    const formItem = inject(FormItemKey, {} as FormItemContext);
    const className = computed(() => {
      return [
        "yoga-radio-group",
        `yoga-radio-group--${props.size}`,
        {"yoga-radio-group--vertical": props.vertical},
        {[`yoga-radio-group--${props.type}`]: props.type},
      ];
    });

    const changeEvent = (value) => {
      emit('update:modelValue', value);
      if (value !== props.modelValue) {
        emit('change', value);
        formItem.validate?.('change');
      }
    };
    const radioGroup = reactive({
      name: 'YRadioGroup',
      ...toRefs(props),
      changeEvent,
    });
    provide(RadioGroupKey, radioGroup);

    onMounted(() => {
      if (props.type && props.vertical) {
        console.warn('[yoga-ui]: radio-group vertical would not work with type props');
      }
    });

    radioGroupMitt.on('radioChange', changeEvent);

    return () => <div class={className.value}>{slots?.default()}</div>;
  },
});
