# Input


## Base

<code-wrapper>
<InputBase />

 ```vue
<template>
  <y-input></y-input>
</template>

```

</code-wrapper>



## Type

<code-wrapper>
<InputType />

 ```vue
<template>
  <y-input></y-input>
  <y-input type="password"></y-input>
  <y-input type="textarea"></y-input>
  <y-input type="textarea" autosize></y-input>
  <y-input type="textarea" :autosize="autosizeConfig"></y-input>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Type",

  setup() {
    const autosizeConfig = reactive({
      minRows: 3,
      maxRows: 6,
    });

    return {
      autosizeConfig,
    };
  }
});
</script>

```

</code-wrapper>



## Size

<code-wrapper>
<InputSize />

 ```vue
<template>
  <y-input size="small"></y-input>
  <y-input></y-input>
  <y-input size="large"></y-input>
</template>

```

</code-wrapper>



## Clearable

<code-wrapper>
<InputClearable />

 ```vue
<template>
  <y-input clearable></y-input>
</template>

```

</code-wrapper>



## Disabled

<code-wrapper>
<InputDisabled />

 ```vue
<template>
  <y-input disabled placeholder="disabled"></y-input>
  <y-input readonly placeholder="readonly"></y-input>
</template>

```

</code-wrapper>



## Prefix-suffix

<code-wrapper>
<InputPrefixSuffix />

 ```vue
<template>
  <y-input prefix-label="UserName"></y-input>
  <y-input :prefix-icon="MaleIcon"></y-input>
  <y-input><template v-slot:prefix>用户名</template></y-input>
  <y-input suffix-label="@baidu.com"></y-input>
  <y-input :suffix-icon="SearchIcon"></y-input>
  <y-input><template v-slot:suffix>RMB</template></y-input>
</template>

<script>
import { defineComponent } from "vue";
import MaleIcon from "./male.svg";
import SearchIcon from "./search.svg";

export default defineComponent({
  name: "PrefixAndSuffix",

  setup() {
    return {
      MaleIcon,
      SearchIcon,
    };
  }
});
</script>

```

</code-wrapper>



## With-word-limit

<code-wrapper>
<InputWithWordLimit />

 ```vue
<template>
  <y-input :maxlength="300" show-word-limit></y-input>
  <y-input type="textarea" :maxlength="300" show-word-limit></y-input>
</template>

```

</code-wrapper>



## Helper

<code-wrapper>
<InputHelper />

 ```vue
<template>
  <y-input error error-message="校验失败，这是提示语句"></y-input>
  <y-input help-text="这是辅助文案，请在合适的位置使用"></y-input>
  <y-input><template v-slot:help>这是辅助文案，请在合适的位置使用</template></y-input>
  <y-input type="textarea" error error-message="校验失败，这是提示语句"></y-input>
  <y-input type="textarea" help-text="这是辅助文案，请在合适的位置使用"></y-input>
  <y-input type="textarea"><template v-slot:help>这是辅助文案，请在合适的位置使用</template></y-input>
</template>

```

</code-wrapper>



## Restriction

<code-wrapper>
<InputRestriction />

 ```vue
<template>
  <y-input
    placeholder="Please input number"
    restriction="number">
  </y-input>
  <y-input
    placeholder="Please input number"
    restriction-type="value"
    :restriction="restriction">
  </y-input>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Restriction",

  setup() {
    const restriction = (val) =>{
      return /^.{1,3}$/.test(val);
    };

    return {
      restriction,
    };
  }
});
</script>

```

</code-wrapper>



## Numeric

<code-wrapper>
<InputNumeric />

 ```vue
<template>
  <y-input v-model="value11" type="numeric"></y-input>
  <y-input v-model="value12" type="numeric" :precision="2">
    <template v-slot:help>Input tip: value precision is 2</template>
  </y-input>
  <y-input v-model="value13" type="numeric" :precision="2" :max="99.98" :min="2">
    <template v-slot:help>Input tip: min value: 2, max value: 99.98, precision is 2</template>
  </y-input>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Type",

  setup() {
    const state = reactive({
      value11: '',
      value12: '',
      value13: '',
    });

    return toRefs(state);
  }
});
</script>

```

</code-wrapper>



## Group

<code-wrapper>
<InputGroup />

 ```vue
<template>
  <y-input-group>
    <y-input style="width: 120px;"></y-input>
    <y-input style="width: calc(100% - 120px);"></y-input>
  </y-input-group>
  <y-input-group>
    <y-input style="width: 40%;"></y-input>
    <y-input style="width: 60%;"></y-input>
  </y-input-group>
</template>

```

</code-wrapper>



<style lang="scss">
.input-pages .yoga-input {
  display: block;
  width: 360px;
  margin-bottom: 12px;
}
.input-pages .yoga-input__group {
  width: 360px;
  margin-bottom: 12px;

  .yoga-input {
    display: inline-block;
    width: auto;
    margin-bottom: 0;
  }
}
</style>


<script>
import InputBase from '../../src/components/input/demo/base.vue';
import InputType from '../../src/components/input/demo/type.vue';
import InputSize from '../../src/components/input/demo/size.vue';
import InputClearable from '../../src/components/input/demo/clearable.vue';
import InputDisabled from '../../src/components/input/demo/disabled.vue';
import InputPrefixSuffix from '../../src/components/input/demo/prefix-suffix.vue';
import InputWithWordLimit from '../../src/components/input/demo/with-word-limit.vue';
import InputHelper from '../../src/components/input/demo/helper.vue';
import InputRestriction from '../../src/components/input/demo/restriction.vue';
import InputNumeric from '../../src/components/input/demo/numeric.vue';
import InputGroup from '../../src/components/input/demo/group.vue';
export default {
	components: {
		InputBase,
		InputType,
		InputSize,
		InputClearable,
		InputDisabled,
		InputPrefixSuffix,
		InputWithWordLimit,
		InputHelper,
		InputRestriction,
		InputNumeric,
		InputGroup
	}
}
</script>

## API

### Input props
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| type | the type of input | String | native type and `textarea` / `numeric` | `text` |
| modelValue | the value of input | String | - | - |
| placeholder| the placeholder of input | String | - | - |
| name | the native name of input | String | - | - |
| readonly | the native readonly | Boolean | - | - |
| autofocus | the native autofocus | Boolean | - | - |
| autocomplete | the native autocomplete | Boolean | - | - |
| form | the native form | Boolean | - | - |
| minlength | the native min length | Number | - | - |
| maxlength | the native max length | Number | - | - |
| size | the size of input | String | `large`/`normal`/`small` | `normal` |
| suffix-label | the suffix label of input | String | - | - |
| prefix-label | the prefix label of input | String | - | - |
| prefix-icon | the prefix icon, accepts svg | String | - | - |
| suffix-icon | the suffix icon, accepts svg | String | - | - |
| disabled | whether the input is disabled | Boolean | - | `false` |
| clearable | whether the input in clearable | Boolean | - | `false` |
| restriction | the restriction of input. Only effective at inputEvent | String, Function, RegExp | `number` | - |
| restriction-type | the restriction type of input, when the type is `input`, it will only restrict the current input, when the type is `value`, it will restrict the whole value | String | `value`, `input` | `input` |
| error | whether the value of input is invalid | Boolean | - | `false` |
| error-message | the error message of input | String | - | - |
| rows | the native rows of textarea | Number | - | - |
| minrows | the min rows of textarea | Number | - | - |
| maxrows | the max rows of textarea | Number | - | - |
| autosize | whether the textarea will auto adjust its size | Boolean | - | `false` |
| lazy | the same as `v-model.lazy` | Boolean | - | `false` |
| help-text | the help message of input | String | - | - |
| show-word-limit | whether show word limit | Boolean | - | `false` |
| max | the max value of number input, only works for type=numeric | Number | - | - |
| min | the min value of number input, only works for type=numeric  | Number | - | - |
| precision | precision of input value, only works for type=numeric  | Number | - | - |
| is-round | wether use Number.toFixed or direct intercept, only works for type=numeric  | Boolean | - | true(means direct intercept) |
| unicode-normalized| whether to calculate the string by utf-16, instead of the default utf-8 | Boolean | - | `false` |

### Input slot
All input slots and following
| Slot | Description  |
|:--|:--|
| prefix | the prefix label of input |
| suffix | the suffix label of input |
| error | the error message of input |
| help | the help message of input |

### Input events
All native input events and following
| Event | Description | Parameters |
|:--|:--|:--|
| value-change | the change event of input value | the value |


### InputGroup props
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| prepend-width | the width of prepend | Number | - | 120 |

### InputGroup slot
All input slots and following
| Slot | Description  |
|:--|:--|
| prepend | the prepend of group |
| append | the append of group |
