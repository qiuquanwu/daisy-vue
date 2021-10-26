# Checkbox


## Base

<code-wrapper>
<CheckboxBase />

 ```vue
<template>
  <y-checkbox>Checkbox</y-checkbox>
  <y-checkbox v-model="value">Checkbox</y-checkbox>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Base",
  setup() {
    const value = ref(false);

    return {
      value
    };
  }
});
</script>

```

</code-wrapper>



## Indeterminate

<code-wrapper>
<CheckboxIndeterminate />

 ```vue
<template>
  <y-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange">
    Check All
  </y-checkbox>
  <y-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange">
    <y-checkbox
      v-for="city in cityOptions"
      :key="city"
      :value="city">
      {{ city }}
    </y-checkbox>
  </y-checkbox-group>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Indeterminate",
  setup() {
    const state = reactive({
      checkAll: false,
      checkedCities: ['Shanghai', 'Beijing'],
      cityOptions: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
      isIndeterminate: true,
    });
    const handleCheckAllChange = (val) => {
      state.checkedCities = val ? state.cityOptions : [];
      state.isIndeterminate = false;
    };
    const handleCheckedCitiesChange = (value) => {
      const checkedCount = value.length;
      state.checkAll = checkedCount === state.cityOptions.length;
      state.isIndeterminate = checkedCount > 0 && checkedCount < state.cityOptions.length;
    };

    return {
      ...toRefs(state),
      handleCheckAllChange,
      handleCheckedCitiesChange,
    };
  }
});
</script>

```

</code-wrapper>



## Disabled

<code-wrapper>
<CheckboxDisabled />

 ```vue
<template>
  <y-checkbox disabled>Checkbox</y-checkbox>
  <y-checkbox v-model="value" disabled>Checkbox</y-checkbox>
  <y-checkbox-group v-model="groupValue" disabled>
    <y-checkbox
      v-for="option in options"
      :key="option.value"
      :disabled="option.disabled"
      :value="option.value">
      {{option.label}}
    </y-checkbox>
  </y-checkbox-group>
  <y-checkbox-group v-model="groupValue">
    <y-checkbox
      v-for="option in options"
      :key="option.value"
      :disabled="option.disabled"
      :value="option.value">
      {{option.label}}
    </y-checkbox>
  </y-checkbox-group>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Disabled",
  setup() {
    const state = reactive({
      value: true,
      groupValue: [],
      options: [
        {value: 'a', label: 'Option A'},
        {value: 'b', label: 'Option B', disabled: true},
        {value: 'c', label: 'Option C'},
        {value: 'd', label: 'Option D'},
      ],
    });

    return {
      ...toRefs(state),
    };
  }
});
</script>

```

</code-wrapper>



## Group

<code-wrapper>
<CheckboxGroup />

 ```vue
<template>
  <div>{{value}}</div>
  <y-radio-group v-model="type" type="outline">
    <y-radio :value="null">Default</y-radio>
    <y-radio value="solid">Solid</y-radio>
    <y-radio value="outline">Outline</y-radio>
  </y-radio-group>
  <y-checkbox v-model="disabled">Disabled</y-checkbox>
  <y-checkbox-group v-model="value" :type="type" :disabled="disabled">
    <y-checkbox
      v-for="option in options"
      :key="option.value"
      :value="option.value">
      {{option.label}}
    </y-checkbox>
  </y-checkbox-group>
  <y-checkbox-group v-model="value" vertical :disabled="disabled">
    <y-checkbox
      v-for="option in options"
      :key="option.value"
      :value="option.value">
      {{option.label}}
    </y-checkbox>
  </y-checkbox-group>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Group",
  setup() {
    const state = reactive({
      value: [],
      type: null,
      disabled: false,
      options: [
        {value: 'a', label: 'Option A'},
        {value: 'b', label: 'Option B'},
        {value: 'c', label: 'Option C'},
        {value: 'd', label: 'Option D'},
      ],
    });


    return {
      ...toRefs(state),
    };
  }
});
</script>

```

</code-wrapper>



## Size

<code-wrapper>
<CheckboxSize />

 ```vue
<template>
  <y-radio-group v-model="type" type="outline">
    <y-radio value="solid">Solid</y-radio>
    <y-radio value="outline">Outline</y-radio>
  </y-radio-group>
  <y-checkbox-group v-model="value" :type="type" size="large">
    <y-checkbox
      v-for="option in options"
      :key="option.value"
      :value="option.value">
      {{option.label}}
    </y-checkbox>
  </y-checkbox-group>
  <y-checkbox-group v-model="value" :type="type" size="normal">
    <y-checkbox
      v-for="option in options"
      :key="option.value"
      :value="option.value">
      {{option.label}}
    </y-checkbox>
  </y-checkbox-group>
  <y-checkbox-group v-model="value" :type="type" size="small">
    <y-checkbox
      v-for="option in options"
      :key="option.value"
      :value="option.value">
      {{option.label}}
    </y-checkbox>
  </y-checkbox-group>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Group",
  setup() {
    const state = reactive({
      type: 'solid',
      disabled: false,
      value: ['a'],
      options: [
        {value: 'a', label: 'Option A'},
        {value: 'b', label: 'Option B'},
        {value: 'c', label: 'Option C'},
        {value: 'd', label: 'Option D'},
      ],
    });

    return {
      ...toRefs(state),
    };
  }
});
</script>

<style lang="scss" scoped>
.yoga-radio-group {
  margin-bottom: 12px;
}
</style>

```

</code-wrapper>



## Fixed-width

<code-wrapper>
<CheckboxFixedWidth />

 ```vue
<template>
  <y-checkbox v-model="useFixed">Fixed Width 150PX</y-checkbox>
  <y-checkbox-group v-model="value" :fixed-width="fixedWidth">
    <y-checkbox
      v-for="option in options"
      :key="option.value"
      :value="option.value">
      {{option.label}}
    </y-checkbox>
  </y-checkbox-group>
</template>

<script>
import { defineComponent, reactive, computed, toRefs } from "vue";

export default defineComponent({
  name: "Group",
  setup() {
    const state = reactive({
      useFixed: true,
      value: [],
      options: [
        {value: 'a', label: 'Long Long Long Long Option A'},
        {value: 'b', label: 'Option Long B'},
        {value: 'c', label: 'Option Long Long C'},
        {value: 'd', label: 'Option Long Long D'},
      ],
    });
    const fixedWidth = computed(() => state.useFixed ? 150 : undefined);

    return {
      fixedWidth,
      ...toRefs(state),
    };
  }
});
</script>

```

</code-wrapper>



<style lang="scss">
.yoga-checkbox-group {
  margin-top: 12px;
}
</style>


<script>
import CheckboxBase from '../../src/components/checkbox/demo/base.vue';
import CheckboxIndeterminate from '../../src/components/checkbox/demo/indeterminate.vue';
import CheckboxDisabled from '../../src/components/checkbox/demo/disabled.vue';
import CheckboxGroup from '../../src/components/checkbox/demo/group.vue';
import CheckboxSize from '../../src/components/checkbox/demo/size.vue';
import CheckboxFixedWidth from '../../src/components/checkbox/demo/fixed-width.vue';
export default {
	components: {
		CheckboxBase,
		CheckboxIndeterminate,
		CheckboxDisabled,
		CheckboxGroup,
		CheckboxSize,
		CheckboxFixedWidth
	}
}
</script>

## API

### Checkbox props
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| modelValue | the v-model bind value of checkbox | String, Number, Boolean | - | null |
| value | the native value of checkbox; only works on checkbox group | String, Number, Boolean | - | - |
| name | the native name of checkbox | String | - | - |
| disabled | whether the checkbox is disabled | Boolean | - | `false` |
| indeterminate | same as indeterminate in native checkbox | Boolean | - | `false` |

### Checkbox events
| Event | Description | Parameters |
|:--|:--|:--|
| change | trigger when the value change | the value |
| update:modelValue | trigger when the value change | the value |

### CheckboxGroup props
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| modelValue | the v-model bind value of checkbox group| Array | - | [] |
| vertical | whether use vertical layout of checkbox group | Boolean | `true`/`false` | `false` |
| type | the type of checkbox | String | `outline`/ `solid` | `default` |
| size | the size of checkbox button | String | `large`/`normal`/`small` | `normal` |
| disabled | whether the checkbox group is disabled | Boolean | - | `false` |
| fixed-width | fix checkbox item label width | Number | - | - |

### CheckboxGroup events
| Event | Description | Parameters |
|:--|:--|:--|
| change | trigger when the value change | the value |
| update:modelValue | trigger when the value change | the value |
