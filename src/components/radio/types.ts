import { ExtractPropTypes } from "vue";

export const radioProps = {
  /** v-model的绑定 */
  modelValue: {
    type: [Boolean, String, Number],
    default: null,
  },
  /** 当前radio value, 如果modelValue和value一致，则checked=true */
  value: {
    type: [Boolean, String, Number],
    default: undefined,
  },
  /** native prop, 用于实现多选一 */
  name: String,
  /** 禁用 */
  disabled: Boolean,
};

export type RadioProps = ExtractPropTypes<typeof radioProps>;
