import { ExtractPropTypes, PropType } from "vue";
import { YUISize, YUI_SIZE } from "@base/size";

export const switchProps = {
  modelValue: {
    type: Boolean,
    default: null,
  },
  disabled: Boolean,
  activeText: String,
  inactiveText: String,
  size: {
    type: String as PropType<YUISize>,
    default: "normal",
    validator: (value: string = "normal"): boolean => YUI_SIZE.indexOf(value) >= 0,
  },
};

export type SwitchProps = ExtractPropTypes<typeof switchProps>;
