# Popper


## Base

<code-wrapper>
<PopperBase />

 ```vue
<template>
  <y-popper>
    <template #trigger>
      <y-button>Hover</y-button>
    </template>
    popper content
  </y-popper>
  <y-popper :show-arrow="false">
    <template #trigger>
      <y-button style="margin-left: 12px;">No Arrow</y-button>
    </template>
    popper content
  </y-popper>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Base",
});
</script>

```

</code-wrapper>



## Theme

<code-wrapper>
<PopperTheme />

 ```vue
<template>
  <y-popper theme="dark">
    <template #trigger>
      <y-button>Dark</y-button>
    </template>
    popper content
  </y-popper>
  <y-popper theme="light">
    <template #trigger>
      <y-button style="margin-left: 12px;">Light</y-button>
    </template>
    popper content
  </y-popper>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Theme",
});
</script>

```

</code-wrapper>



## Trigger

<code-wrapper>
<PopperTrigger />

 ```vue
<template>
  <y-popper trigger="hover">
    <template #trigger>
      <y-button style="margin-left: 12px;">Hover</y-button>
    </template>
    popper content
  </y-popper>
  <y-popper trigger="click">
    <template #trigger>
      <y-button style="margin-left: 12px;">Click</y-button>
    </template>
    popper content
  </y-popper>
  <y-popper trigger="focus">
    <template #trigger>
      <y-button style="margin-left: 12px;">Focus</y-button>
    </template>
    popper content
  </y-popper>
  <y-popper :visible="visible">
    <template #trigger>
      <y-button style="margin-left: 12px;" @click="visible = !visible">Manual</y-button>
    </template>
    popper content
  </y-popper>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Trigger",
  setup() {
    const visible = ref(false);

    return {
      visible
    };
  }
});
</script>

```

</code-wrapper>



## Placement

<code-wrapper>
<PopperPlacement />

 ```vue
<template>
  <y-popper :placement="placement">
    <template #trigger>
      <div class="trigger-box">
        <y-radio-group v-model="placement" type="solid">
          <y-radio
            v-for="p in topPlacements"
            :value="p"
            :key="p">
            {{ p }}
          </y-radio>
        </y-radio-group>
        <div class="flex-box">
          <y-radio-group v-model="placement" type="solid" vertical>
            <y-radio
              v-for="p in leftPlacements"
              :value="p"
              :key="p">
              {{ p }}
            </y-radio>
          </y-radio-group>
          <y-radio-group v-model="placement" type="solid" vertical>
            <y-radio
              v-for="p in rightPlacements"
              :value="p"
              :key="p">
              {{ p }}
            </y-radio>
          </y-radio-group>
        </div>
        <y-radio-group v-model="placement" type="solid">
          <y-radio
            v-for="p in bottomPlacements"
            :value="p"
            :key="p">
            {{ p }}
          </y-radio>
        </y-radio-group>
      </div>
    </template>
    popper content
  </y-popper>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Placement",
  setup() {
    const topPlacements = ['top-start', 'top', 'top-end'];
    const rightPlacements = ['right-start', 'right', 'right-end'];
    const bottomPlacements = ['bottom-start', 'bottom', 'bottom-end'];
    const leftPlacements = ['left-start', 'left', 'left-end'];
    const placement = ref('bottom')

    return {
      placement,
      topPlacements,
      rightPlacements,
      bottomPlacements,
      leftPlacements,
    };
  }
});
</script>

<style lang="scss" scoped>
.trigger-box {
  text-align: center;
  width: 320px;
}
.flex-box {
  width: 100%;
  margin: 16px 0px;
  display: flex;
  justify-content: space-between;
}
</style>

```

</code-wrapper>



## Disabled

<code-wrapper>
<PopperDisabled />

 ```vue
<template>
  <y-checkbox v-model="disabled">Disabled</y-checkbox>
  <y-popper :disabled="disabled">
    <template #trigger>
      <y-button>Hover</y-button>
    </template>
    popper content
  </y-popper>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Disabled",
  setup() {
    const disabled = ref(false);

    return {
      disabled
    };
  }
});
</script>

```

</code-wrapper>




<script>
import PopperBase from '../../src/components/popper/demo/base.vue';
import PopperTheme from '../../src/components/popper/demo/theme.vue';
import PopperTrigger from '../../src/components/popper/demo/trigger.vue';
import PopperPlacement from '../../src/components/popper/demo/placement.vue';
import PopperDisabled from '../../src/components/popper/demo/disabled.vue';
export default {
	components: {
		PopperBase,
		PopperTheme,
		PopperTrigger,
		PopperPlacement,
		PopperDisabled
	}
}
</script>

## API

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
| after-enter | trigger after mouse enter popover | - |
| after-leave | trigger after mouse leave popover | - |
| before-enter | trigger before mouse enter popover | - |
| before-leave | trigger before mouse leave popover | - |

### Slots
| Name | Description | Parameters |
|:--|:--|:--|
| default | popper display element | - |
| trigger | popper trigger element | - |
