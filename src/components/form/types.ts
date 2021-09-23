import { ExtractPropTypes, PropType } from "vue";
import { RuleItem } from "async-validator";
import { YUISize, YUI_SIZE } from "@base/size";
import { Emitter } from "mitt";
import { noop } from "./src/util";

export declare interface FormItemRule extends RuleItem {
  trigger?: string;
}

export const formProps = {
  model: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
  rules: {
    type: Object as PropType<FormRule>,
    default: () => ({}),
  },
  validateTrigger: {
    type: String,
    default: "",
    validator: (value) => ["", "change", "blur"].includes(value),
  },
  inline: Boolean,
  labelAlign: {
    type: String,
    default: "right",
    validator: (value) => ["right", "left", "top"].includes(value),
  },
  size: {
    type: String as PropType<YUISize>,
    default: "normal",
    validator: (value) => YUI_SIZE.includes(value),
  },
  showMessage: {
    type: Boolean,
    default: true,
  },
  validateOnRuleChange: Boolean,
  autocomplete: {
    type: String,
    default: "off",
    validator: (value) => ["on", "off"].includes(value),
  },
} as const;
export interface FormRule {
  message?: string;
  trigger?: string;
  [key: string]: string | ValidatorFn | FormRule | FormRule[];
}
export type FormProps = ExtractPropTypes<typeof formProps>;
export type FormContext = FormProps & {
  formMitt: Emitter<FormEvent>;
  reset?: () => void;
  emit: (
    evt: string,
    prop: string,
    noError: boolean,
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    model: Record<string, any>
  ) => void;
};
export type FormEvent = {
  addField: FormItemContext;
  removeField: FormItemContext;
};

export const formItemProps = {
  prop: String,
  label: String,
  rules: [Object, Array] as PropType<FormItemRule | FormItemRule[]>,
  for: String,
  required: Boolean,
  size: {
    type: String as PropType<YUISize>,
    default: "normal",
    validator: (value) => YUI_SIZE.includes(value),
  },
  labelWidth: Number,
  showMessage: {
    type: Boolean,
    default: true,
  },
} as const;
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
export type FormItemContext = FormItemProps & {
  formItemMitt: Emitter<FormItemEvent>;
  reset: () => void;
  validate: (
    trigger?: string | typeof noop,
    callback?: typeof noop,
    errorHandler?: ErrorHandlerConfig
  ) => boolean | Promise<boolean>;
};
export type FormItemEvent = {
  fieldFocus: () => void;
  fieldBlur: () => void;
  fieldChange: () => void;
};

export interface ValidateCallback {
  valid: boolean;
  invalidFields: FormItemProps[];
}

export const FormKey = "YogaForm";

export interface ErrorHandlerConfig {
  scrollToError?: boolean;
  scrollConfig?: {
    align?: {
      left?: number;
      top?: number;
      leftOffset?: number;
      topOffset?: number;
    };
  };
}

export type ValidateCallbackType =
  | ((arg: ValidateCallback) => void)
  | ErrorHandlerConfig;
/* eslint-disable  @typescript-eslint/no-explicit-any */
export type ValidatorFn = (value: any, model: any) => Promise<boolean | Error>;
export type AsyncValidatorFn = (
  value: any,
  model: any,
  formModel?: any
) => Promise<{
  error: boolean;
  errorMessage: string;
}>;
