import { h, defineComponent, SetupContext, nextTick, reactive, getCurrentInstance, onMounted } from 'vue';
import ClearIcon from '@base/icons/Clear';
import { Icon } from '@components/icon';
import { useComputedState } from '@components/input/src/use-input';
import { sliceStr, calcTextareaHeight, valueToFixed } from '@components/input/src/util';
import {
  AutoSize,
  inputProps,
  InputProps,
  InputState,
  RESTRICTION_TYPE,
  TEXTAREA_MIN_ROW,
} from '@components/input/types';
import { isRegExp } from '@utils/helper';

export default defineComponent({
  name: 'YInput',
  props: inputProps,
  emits: ['update:modelValue', 'change', 'clear', 'click'],
  components: {
    Icon,
  },
  setup(props: InputProps, { slots, emit }: SetupContext) {
    const { proxy } = getCurrentInstance();
    const state = reactive<InputState>({
      focused: false,
      currentValue: null,
      textareaCalcStyle: {},
    });
    const {
      formItem,
      isNumber,
      innerClass,
      nativeProps,
      textLength,
      textareaStyle,
      isWordLimitVisible,
      computedRestriction,
      computedRestrictionType,
      computedPlaceholder,
    } = useComputedState(props, state);

    onMounted(() => {
      resizeTextarea();
    });

    const resizeTextarea = () => {
      // 仅对textarea生效
      if (props.type !== 'textarea') {
        return;
      }

      let minRows: number = TEXTAREA_MIN_ROW;
      let maxRows: number;

      if (typeof props.autosize === 'object') {
        minRows = (props.autosize as AutoSize).minRows || TEXTAREA_MIN_ROW;
        maxRows = (props.autosize as AutoSize).maxRows;
      }

      state.textareaCalcStyle = calcTextareaHeight(
        proxy.$refs?.inputRef as HTMLTextAreaElement,
        minRows,
        maxRows
      ) as Record<string, string>;
    };

    const getNumberValue = (value: string | number, forceValidate = false) => {
      // remove front 0
      let newValue = String(value).replace(/^(-?)(0*)([1-9][\d|.]*?)/, '$1$3');

      if (!state.focused || forceValidate) {
        if (+newValue >= props.max) {
          newValue = valueToFixed(props.max, props.precision);
        }
        if (+newValue < props.min) {
          newValue = valueToFixed(props.min, props.precision);
        }
      }

      return props.isRound ? Number(newValue).toFixed(props.precision) : valueToFixed(newValue, props.precision);
    };

    const setCurrentValue = (value: string | number, trigger: string = 'input', forceValidate = false) => {
      let newValue = value;
      if (props.unicodeNormalized && props.maxlength) {
        newValue = sliceStr(value, 0, props.maxlength);
        (proxy.$refs?.inputRef as HTMLInputElement).value = newValue;
      }

      const formatValue = !state.focused && isNumber.value ? getNumberValue(newValue, forceValidate) : newValue;
      state.currentValue = formatValue;

      if (formatValue !== props.modelValue) {
        if ((trigger === 'input' && !props.lazy) || (trigger === 'change' && props.lazy)) {
          if (((!state.focused && isNumber.value) || !isNumber.value) && String(props.modelValue) !== formatValue) {
            newValue = forceValidate ? formatValue : newValue;
            emit('update:modelValue', newValue);
          }

          // form validate
        }
      }

      nextTick(() => {
        resizeTextarea();
      });
    };

    const restrictionValidate = (value: string | number) => {
      const restriction = computedRestriction.value;
      if (typeof restriction === 'function') {
        return restriction.call(null, value);
      } else if (isRegExp(restriction as string)) {
        return (restriction as RegExp).test(value as string);
      } else {
        if (restriction === 'number') {
          return /^\d*$/.test(value as string);
        }

        return true;
      }
    };

    const beforeClearValidate = () => {
      if (typeof props.beforeClear === 'function') {
        return props.beforeClear.call(null);
      } else if (typeof props.beforeClear === 'boolean') {
        return props.beforeClear;
      }

      return false;
    };

    const clear = () => {
      if (props.disabled) {
        return;
      }

      // 如果传入beforeClear，则由beforeClear控制是否清空输入值
      // 否则，默认是清空输入值
      if (!beforeClearValidate()) {
        setCurrentValue('', props.lazy ? 'change' : 'input');
      }

      emit('clear');
    };

    const handleInput = (event: InputEvent | CompositionEvent) => {
      if ((event as InputEvent).inputType === 'deleteCompositionText') {
        return;
      }

      if (computedRestriction) {
        const isRestrictInput = computedRestrictionType.value === RESTRICTION_TYPE.INPUT;
        const value = isRestrictInput ? event.data : (event.target as HTMLInputElement).value;
        if ((!isRestrictInput || value) && !restrictionValidate(value)) {
          // reset input value
          (proxy.$refs?.inputRef as HTMLInputElement).value = state.currentValue as string;
          return;
        }
      }
      setCurrentValue((event.target as HTMLInputElement).value);
    };

    const handleChange = (event: InputEvent) => {
      setCurrentValue((event.target as HTMLInputElement).value, 'change');
    };

    const handleFocus = () => {
      state.focused = true;
      formItem?.validate?.('field-focus');
    };

    const handleBlur = () => {
      state.focused = false;
      setCurrentValue(state.currentValue, 'input', true);
      formItem?.validate?.('field-blur');
    };

    const handleClick = () => {
      emit('click');
    };

    /** public */
    const focus = () => {
      if (props.disabled) {
        return;
      }

      (proxy.$refs?.inputRef as HTMLInputElement).focus();
    };

    /** public */
    const blur = () => {
      (proxy.$refs?.inputRef as HTMLInputElement).blur();
    };

    const renderInputSplit = (type: string) => <span class={`yoga-input__${type}-split`}></span>;

    const renderInputPrefix = (): JSX.Element => {
      const prefixSlot = slots.prefix;
      const prefixLabel = props.prefixLabel;
      const prefixIcon = props.prefixIcon;
      const hasPrefix = prefixSlot || prefixLabel || prefixIcon;
      const prefixClass = 'yoga-input__prefix';

      if (hasPrefix) {
        if (!!prefixSlot) {
          return <div class={prefixClass}>{prefixSlot()}</div>;
        } else if (!!prefixLabel) {
          return (
            <div class={prefixClass}>
              {prefixLabel}
              {renderInputSplit('prefix')}
            </div>
          );
        } else if (!!prefixIcon) {
          return (
            <div class={prefixClass}>
              <Icon src={prefixIcon} />
            </div>
          );
        }
      }

      return null;
    };

    const renderInputSuffix = (): JSX.Element => {
      const suffixSlot = slots.suffix;
      const suffixLabel = props.suffixLabel;
      const suffixIcon = props.suffixIcon;
      const hasSuffix = suffixSlot || suffixLabel || suffixIcon || props.clearable || isWordLimitVisible.value;
      const suffixClass = 'yoga-input__suffix';
      const suffixChildren: JSX.Element[] = [];

      if (!hasSuffix) {
        return null;
      }

      if (!props.disabled && props.clearable) {
        suffixChildren.push(
          <span class='yoga-input__clear-btn' onClick={clear}>
            <ClearIcon />
          </span>
        );
      }
      if (suffixLabel) {
        suffixChildren.push(
          <span>
            {renderInputSplit('prefix')}
            {suffixLabel}
          </span>
        );
      } else if (isWordLimitVisible.value) {
        suffixChildren.push(
          <span class='yoga-input__count'>
            {textLength.value}/{props.maxlength}
          </span>
        );
      }
      if (!!suffixIcon) {
        suffixChildren.push(<Icon class='yoga-input__suffix-icon' src={suffixIcon} />);
      }
      if (!!suffixSlot) {
        suffixChildren.push(<span>{suffixSlot()}</span>);
      }
      return <div class={suffixClass}>{...suffixChildren}</div>;
    };

    const renderInputError = (): JSX.Element => {
      const error = props.error;
      const errorMessage = props.errorMessage;
      const errorSlot = slots.error;
      const errorClass = 'yoga-input__error-msg';

      if (errorSlot) {
        return <div class={errorClass}>{errorSlot()}</div>;
      } else if (error) {
        return <p class={errorClass}>{errorMessage}</p>;
      }
    };

    const renderInputHelp = (): JSX.Element => {
      const helpText = props.helpText;
      const helpSlot = slots.help;
      const helpClass = 'yoga-input__help-text';

      if (helpSlot) {
        return <div class={helpClass}>{helpSlot()}</div>;
      } else if (helpText) {
        return <p class={helpClass}>{helpText}</p>;
      }
    };

    const renderInput = (): JSX.Element => {
      return (
        <div class='yoga-input'>
          <div class={innerClass.value}>
            {renderInputPrefix()}
            <input
              ref='inputRef'
              class='yoga-input__input'
              {...nativeProps.value}
              type={props.type}
              value={state.currentValue}
              placeholder={computedPlaceholder.value}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onCompositionend={handleInput}
              onInput={handleInput}
              onChange={handleChange}
            />
            {renderInputSuffix()}
          </div>
          {renderInputError()}
          {renderInputHelp()}
        </div>
      );
    };

    const renderTextareaSuffix = (): JSX.Element[] => {
      const suffix: JSX.Element[] = [];
      if (isWordLimitVisible.value) {
        suffix.push(
          <span class='yoga-input__count'>
            {textLength.value}/{props.maxlength}
          </span>
        );
      }
      const error = renderInputError();
      const help = renderInputHelp();
      error && suffix.push(error);
      help && suffix.push(help);
      return suffix;
    };

    const renderTextareaInput = (): JSX.Element => {
      return (
        <div class='yoga-input textarea' onClick={handleClick}>
          <textarea
            ref='inputRef'
            {...nativeProps.value}
            class={innerClass.value}
            style={textareaStyle.value}
            value={state.currentValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onInput={handleInput}
          />
          {...renderTextareaSuffix()}
        </div>
      );
    };

    return {
      focus,
      blur,
      renderInput,
      renderTextareaInput,
    };
  },
  render() {
    return this.type === 'textarea' ? this.renderTextareaInput() : this.renderInput();
  },
});
