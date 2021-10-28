# Switch


## Base

<code-wrapper>
<SwitchBase />

 ```vue
<template>
  <y-switch></y-switch>
  <y-switch v-model="switchValue"></y-switch>
  <y-switch :modelValue="switchValue2" @change="handleValueChange"></y-switch>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Base",
  setup() {
    const switchValue = ref(false);
    const switchValue2 = ref(true);
    const handleValueChange = value => {
      console.log('value:', value)
      switchValue2.value = value;
    }
    return {
      switchValue,
      switchValue2,
      handleValueChange,
    };
  }
});
</script>

```

</code-wrapper>



## Disabled

<code-wrapper>
<SwitchDisabled />

 ```vue
<template>
  <y-switch disabled></y-switch>
  <y-switch :modelValue="true" disabled></y-switch>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Disabled",
});
</script>

```

</code-wrapper>



## Size

<code-wrapper>
<SwitchSize />

 ```vue
<template>
  <y-switch size="large"></y-switch>
  <y-switch size="normal"></y-switch>
  <y-switch size="small"></y-switch>
  <y-switch size="large" active-text="开" inactive-text="关"></y-switch>
  <y-switch size="normal" active-text="开" inactive-text="关"></y-switch>
  <y-switch size="small" active-text="开" inactive-text="关"></y-switch>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Base",
  setup() {
    const switchValue = ref(false);
    const switchValue2 = ref(true);
    const handleValueChange = value => {
      console.log('value:', value)
      switchValue2.value = value;
    }
    return {
      switchValue,
      switchValue2,
      handleValueChange,
    };
  }
});
</script>

```

</code-wrapper>



## Custom

<code-wrapper>
<SwitchCustom />

 ```vue
<template>
  <y-switch active-text="on" inactive-text="off"></y-switch>
  <y-switch active-text="开" inactive-text="关"></y-switch>
  <y-switch active-text="早晨" inactive-text="晚上"></y-switch>
  <y-switch active-text="一日之计在于晨" inactive-text="早睡早起好精神"></y-switch>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Custom",
});
</script>

```

</code-wrapper>



<style lang="scss">
.yoga-switch {
  margin-right: 16px;
}
</style>


<script>
import SwitchBase from '../../src/components/switch/demo/base.vue';
import SwitchDisabled from '../../src/components/switch/demo/disabled.vue';
import SwitchSize from '../../src/components/switch/demo/size.vue';
import SwitchCustom from '../../src/components/switch/demo/custom.vue';
export default {
	components: {
		SwitchBase,
		SwitchDisabled,
		SwitchSize,
		SwitchCustom
	}
}
</script>

## API

### Switch props
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| modelValue | the value of switch, bind with `v-model` | Boolean | - | - |
| disabled | whether the switch is disabled | Boolean | - | `false` |
| size | the size of switch | String | `large`/`normal`/`small` | `normal` |
| active-text | the text when switch on | String | - | -` |
| inactive-text | the text when switch off | String | - | - |

### Switch events
| Event | Description | Parameters |
|:--|:--|:--|
| change | the change event of switch | current value |
| update:modelValue | the v-model bind event of switch | current value |
