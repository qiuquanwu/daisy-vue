# Radio


## Basic

<code-wrapper>
<RadioBasic />

 ```vue
<template>
  <y-radio v-model="radioValue" @change="handleValueChange"> RadioA </y-radio>
  <y-radio
    :modelValue="radioValue2"
    @update:modelValue="handleUpdateModel"
    @change="handleValueChange"
  >
    RadioA
  </y-radio>

  <div class="line">
    <y-radio
      name="radio-demo"
      value="boy"
      v-model="radioValue3"
      @change="handleValueChange"
    >
      Boy
    </y-radio>
    <y-radio
      name="radio-demo"
      value="girl"
      v-model="radioValue3"
      @change="handleValueChange"
    >
      Girl
    </y-radio>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Basic",
  setup() {
    const radioValue = ref(null);
    const radioValue2 = ref(null);
    const radioValue3 = ref("");

    const handleValueChange = (value) => {
      console.log("value", value);
    };

    const handleUpdateModel = (value) => {
      console.log("value", value);
      radioValue2.value = value;
    };

    return {
      radioValue,
      radioValue2,
      radioValue3,
      handleValueChange,
      handleUpdateModel,
    };
  },
});
</script>

<style lang="scss" scoped>
.yoga-radio {
  margin-right: 12px;
}
</style>

```

</code-wrapper>



## Group

<code-wrapper>
<RadioGroup />

 ```vue
<template>
  <y-radio-group v-model="radioValue" @change="handleValueChange">
    <y-radio value="a">RadioA</y-radio>
    <y-radio value="b">RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
  <y-radio-group
    v-model="radioValue"
    type="solid"
    @change="handleValueChange">
    <y-radio value="a">RadioA</y-radio>
    <y-radio value="b">RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
  <y-radio-group
    v-model="radioValue"
    type="outline"
    @change="handleValueChange">
    <y-radio value="a">RadioA</y-radio>
    <y-radio value="b">RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
  <y-radio-group v-model="radioValue" vertical @change="handleValueChange">
    <y-radio value="a">Default</y-radio>
    <y-radio value="b">RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Group",
  setup() {
    const radioValue = ref(null);

    const handleValueChange = (value) => {
      console.log("value", value);
    };

    const handleUpdateModel = (value) => {
      console.log("value", value);
      radioValue2.value = value;
    };

    return {
      radioValue,
      handleValueChange,
      handleUpdateModel,
    };
  },
});
</script>

<style lang="scss" scoped>
.yoga-radio-group {
  margin-top: 12px;
}
</style>

```

</code-wrapper>



## Size

<code-wrapper>
<RadioSize />

 ```vue
<template>
  <y-radio-group v-model="type" type="outline">
    <y-radio value="solid">Solid</y-radio>
    <y-radio value="outline">Outline</y-radio>
  </y-radio-group>

  <y-radio-group
    v-model="radioValue"
    :type="type"
    size="large"
    @change="handleValueChange">
    <y-radio value="a">RadioA</y-radio>
    <y-radio value="b">RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
  <y-radio-group
    v-model="radioValue"
    :type="type"
    @change="handleValueChange">
    <y-radio value="a">RadioA</y-radio>
    <y-radio value="b">RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
  <y-radio-group
    v-model="radioValue"
    :type="type"
    size="small"
    @change="handleValueChange">
    <y-radio value="a">RadioA</y-radio>
    <y-radio value="b">RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Size",
  setup() {
    const type = ref("solid");
    const radioValue = ref(null);

    const handleValueChange = (value) => {
      console.log("value", value);
    };

    const handleUpdateModel = (value) => {
      console.log("value", value);
      radioValue2.value = value;
    };

    return {
      type,
      radioValue,
      handleValueChange,
      handleUpdateModel,
    };
  },
});
</script>
<style lang="scss" scoped>
.yoga-radio-group {
  margin-bottom: 12px;
}
</style>

```

</code-wrapper>



## Disabled

<code-wrapper>
<RadioDisabled />

 ```vue
<template>
  <y-radio v-model="radioValue" disabled> RadioA </y-radio>
  <y-radio-group v-model="type" type="outline">
    <y-radio :value="null">Default</y-radio>
    <y-radio value="solid">Solid</y-radio>
    <y-radio value="outline">Outline</y-radio>
  </y-radio-group>
  <y-radio-group v-model="radioValue" :type="type" disabled>
    <y-radio value="a">RadioA</y-radio>
    <y-radio value="b">RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
  <y-radio-group v-model="radioValue2" :type="type">
    <y-radio value="a">RadioA</y-radio>
    <y-radio value="b" disabled>RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
  <y-radio-group v-model="radioValue3" :type="type" disabled>
    <y-radio value="a">RadioA</y-radio>
    <y-radio value="b">RadioB</y-radio>
    <y-radio value="c">RadioC</y-radio>
  </y-radio-group>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Disabled",
  setup() {
    const type = ref(null);
    const radioValue = ref(null);
    const radioValue2 = ref("a");
    const radioValue3 = ref("a");

    return {
      type,
      radioValue,
      radioValue2,
      radioValue3,
    };
  },
});
</script>
<style lang="scss" scoped>
.yoga-radio-group {
  margin-top: 12px;
}
</style>

```

</code-wrapper>




<script>
import RadioBasic from '../../src/components/radio/demo/basic.vue';
import RadioGroup from '../../src/components/radio/demo/group.vue';
import RadioSize from '../../src/components/radio/demo/size.vue';
import RadioDisabled from '../../src/components/radio/demo/disabled.vue';
export default {
	components: {
		RadioBasic,
		RadioGroup,
		RadioSize,
		RadioDisabled
	}
}
</script>

## API

### Radio props
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| modelValue | the value bind to v-model | String, Number, Boolean | - | - |
| value | the native value of radio; if absent it will use the inner text of radio instead | String, Number, Boolean | - | - |
| name | the native name of radio | String | - | - |
| disabled | whether the radio is disabled | Boolean | - | `false` |

### Radio events
| Event | Description | Parameters |
|:--|:--|:--|
| change | trigger when the value change | the value |

### RadioGroup props
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| modelValue | the value bind to v-model | String, Number, Boolean | - | - |
| vertical | the layout of radio group | Boolean | true/false | false |
| size | the size of radio button | String | `large`/`normal`/`small` | `normal` |
| type | the type of radio button | String | `solid`/`outline` | - |
| disabled | whether the radio group is disabled | Boolean | - | `false` |

### RadioGroup events
| Event | Description | Parameters |
|:--|:--|:--|
| change | trigger when the value change | the value |
