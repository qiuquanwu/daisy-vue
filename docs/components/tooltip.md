# Tooltip
tooltip基于popper实现，但是和popper又有以下几点区别：
- 提供v-model控制manual mode, 届时trigger将会被覆盖
- 提供default和content两个插槽[slot]
- 默认showArrow为false
- 默认placement为top
- 提供键盘tab控制，tabindex默认为0


## Base

<code-wrapper>
<TooltipBase />

 ```vue
<template>
  <y-tooltip content="popper content">
    <y-button>Hover</y-button>
  </y-tooltip>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Base",
});
</script>

```

</code-wrapper>



## Custom

<code-wrapper>
<TooltipCustom />

 ```vue
<template>
  <y-tooltip v-model="visible">
    <y-button @click="updateVisible">Custom</y-button>
    <template #content>
      <span>这里是一个复杂的content, 里面有链接<y-button size="small" type="link" target="_blank" href="www.baidu.com">百度一下</y-button></span>
    </template>
  </y-tooltip>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Custom",
  setup() {
    const visible = ref(false);
    const updateVisible = () => {
      visible.value = !visible.value;
    }

    return {
      visible,
      updateVisible,
    };
  }
});
</script>

```

</code-wrapper>



## Disabled

<code-wrapper>
<TooltipDisabled />

 ```vue
<template>
  <y-checkbox v-model="disabled">disabled</y-checkbox>
  <y-tooltip :disabled="!disabled">
    <y-button style="margin: 0 12px;">{{ disabled ? 'disabled' : 'enabled'}}</y-button>
    <template #content>
      <span>这里是一个复杂的content, 里面有链接<y-button size="small" type="link" target="_blank" href="www.baidu.com">百度一下</y-button></span>
    </template>
  </y-tooltip>

  <y-tooltip v-if="disabled">
    <y-button>disabled</y-button>
    <template #content>
      <span>这里是一个复杂的content, 里面有链接<y-button size="small" type="link" target="_blank" href="www.baidu.com">百度一下</y-button></span>
    </template>
  </y-tooltip>
  <y-button v-else>enabled</y-button>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Disabled",
  setup() {
    const disabled = ref(false);

    return {
      disabled,
    };
  }
});
</script>

```

</code-wrapper>




<script>
import TooltipBase from '../../src/components/tooltip/demo/base.vue';
import TooltipCustom from '../../src/components/tooltip/demo/custom.vue';
import TooltipDisabled from '../../src/components/tooltip/demo/disabled.vue';
export default {
	components: {
		TooltipBase,
		TooltipCustom,
		TooltipDisabled
	}
}
</script>

## API

### Tooltip props
继承Popper props，但有以下改动
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| modelValue | the visible of tooltip, will override trigger and turn on manual mode | Boolean | - | `undefined` |
| show-arrow | whether the popover is with arrow | Boolean | - | `false` |
| placement | the placement of popover | String | `top`/`top-start`/`top-end`/`right`/`right-start`/`right-end`/`bottom`/`bottom-start`/`bottom-end`/`left`/`left-start`/`left-end` | `top` |
### Popper props
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| visible | the visible of popover, will override trigger and turn on manual mode | Boolean | - | `undefined` |
| disabled | whether disabled the popover, when disabled the popover will not be shown | Boolean | - | `false` |
| placement | the placement of popover | String | `top`/`top-start`/`top-end`/`right`/`right-start`/`right-end`/`bottom`/`bottom-start`/`bottom-end`/`left`/`left-start`/`left-end` | `top` |
| trigger | how to trigger the popover | String | `hover`/`click`/`focus` | `hover` |
| content | the content of popover | String | - | - |
| theme | the theme of popover | String | `dark`/`light` | `dark` |
| hide-hover-popper | whether to hide popper when hover it | Boolean | - | `false` |
| hide-on-click | whether to hide popper when click, only effective when the `trigger` is `click` | Boolean | - | `true` |
| show-arrow | whether the popover is with arrow | Boolean | - | `true` |
| popper-options | custom options of popper | Object | - | - |
| popper-class | custom class of popper | String | - | - |
| popper-style | custom style object of popper | Object | - | - |
| popper-style | custom style object of popper | Object | - | - |
| class | custom class of trigger | Object | - | - |
| style | custom style object of trigger | Object | - | - |
| append-to-body | whether append popper to body | Boolean | - | `true` |
| auto-close | auto close popper, 0 means do not use auto close | Number | - | `0` |
| transition | popper transition name | String | - | `yoga-fade-in-linear` |

### Events
| Event | Description | Parameters |
|:--|:--|:--|
| update:modelValue | trigger when tooltip visible change | visible: boolean |

### Slots
| Name | Description | Parameters |
|:--|:--|:--|
| default | tooltip trigger element | - |
| content | tooltip content, which will override content props | - |
