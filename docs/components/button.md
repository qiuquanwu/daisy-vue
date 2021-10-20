# Button


## Base

<code-wrapper>
<ButtonBase />

 ```vue
<template>
  <y-button type="primary">Primary</y-button>
  <y-button type="primary" outline>Outline</y-button>
  <y-button>Default</y-button>
  <y-button dashed>Dashed</y-button>
  <y-button type="link">Text</y-button>
  <y-button type="link" href="/" target="__blank">Render a tag</y-button>
</template>

<script>
import { defineComponent } from "vue";
import AddIcon from "./add.svg";

export default defineComponent({
  name: "Base",
  setup() {
    return {
      AddIcon,
    };
  },
});
</script>

```

</code-wrapper>



## Disabled

<code-wrapper>
<ButtonDisabled />

 ```vue
<template>
  <y-button disabled type="primary">Primary</y-button>
  <y-button disabled type="primary" outline>Outline</y-button>
  <y-button disabled>Default</y-button>
  <y-button disabled dashed>Dashed</y-button>
  <y-button disabled type="link">Text</y-button>
  <y-button disabled type="link" href="/" target="__blank">Render a tag</y-button>
</template>

<script>
import { defineComponent } from "vue";
import AddIcon from "./add.svg";

export default defineComponent({
  name: "Base",
  setup() {
    return {
      AddIcon,
    };
  },
});
</script>

```

</code-wrapper>



## Dashed

<code-wrapper>
<ButtonDashed />

 ```vue
<template>
  <y-button dashed>Dashed</y-button>
  <y-button dashed :icon="AddIcon">Upload</y-button>
  <y-button type="primary" dashed>Dashed</y-button>
  <y-button type="primary" dashed :icon="AddIcon">Upload</y-button>
</template>

<script>
import { defineComponent } from "vue";
import AddIcon from "./add.svg";

export default defineComponent({
  name: "Dashed",
  setup() {
    return {
      AddIcon,
    };
  },
});
</script>

```

</code-wrapper>



## Circle

<code-wrapper>
<ButtonCircle />

 ```vue
<template>
  <y-button type="primary" circle :icon="AddIcon"></y-button>
  <y-button type="primary" outline circle :icon="AddIcon"></y-button>
  <y-button circle :icon="AddIcon"></y-button>
  <y-button dashed circle :icon="AddIcon"></y-button>
  <y-button type="primary" dashed circle :icon="AddIcon"></y-button>
</template>

<script>
import { defineComponent } from "vue";
import AddIcon from "./add.svg";

export default defineComponent({
  name: "Circle",
  setup() {
    return {
      AddIcon,
    };
  },
});
</script>

```

</code-wrapper>



## Size

<code-wrapper>
<ButtonSize />

 ```vue
<template>
  <div class="simple-box">
    <y-button type="primary" size="small">small</y-button>
    <y-button type="primary" size="normal">normal</y-button>
    <y-button type="primary" size="large">large</y-button>
  </div>
  <div class="simple-box">
    <y-button type="primary" :icon="AddIcon" size="small">small</y-button>
    <y-button type="primary" :icon="AddIcon" size="normal">normal</y-button>
    <y-button type="primary" :icon="AddIcon" size="large">large</y-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AddIcon from "./add.svg";

export default defineComponent({
  name: "Size",
  setup() {
    return {
      AddIcon,
    };
  },
});
</script>

```

</code-wrapper>



## Icon

<code-wrapper>
<ButtonIcon />

 ```vue
<template>
  <y-button type="primary" :icon="AddIcon">Add</y-button>
  <y-button :icon="AddIcon">Add</y-button>
  <y-button :icon="AddIcon"></y-button>
  <y-button><icon :src="AddIcon" /></y-button>
  <y-button :suffix-icon="AddIcon">More</y-button>
  <y-button type="link" :icon="AddIcon">Text Button</y-button>
  <y-button type="link" :suffix-icon="AddIcon">More</y-button>
</template>

<script>
import { defineComponent } from "vue";
import AddIcon from "./add.svg";

export default defineComponent({
  name: "Base",
  setup() {
    return {
      AddIcon,
    };
  },
});
</script>

```

</code-wrapper>



<style lang="scss">
.yoga-button {
  margin-top: 12px;
  margin-right: 12px;
}
.btn-wrap {
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  padding: 14px 24px;
  border-radius: 4px;
}
</style>


<script>
import ButtonBase from '../../src/components/button/demo/base.vue';
import ButtonDisabled from '../../src/components/button/demo/disabled.vue';
import ButtonDashed from '../../src/components/button/demo/dashed.vue';
import ButtonCircle from '../../src/components/button/demo/circle.vue';
import ButtonSize from '../../src/components/button/demo/size.vue';
import ButtonIcon from '../../src/components/button/demo/icon.vue';
export default {
	components: {
		ButtonBase,
		ButtonDisabled,
		ButtonDashed,
		ButtonCircle,
		ButtonSize,
		ButtonIcon
	}
}
</script>

## API

### Button props

| Property    | Description                                        | Type    | Accepted Values                          | Default  |
| :---------- | :------------------------------------------------- | :------ | :--------------------------------------- | :------- |
| type        | the type of button                                 | String  | `primary`, `secondary`, `link`, `danger` | -        |
| size        | the size of button                                 | String  | `x-large`/`large`/`normal`/`small`       | `normal` |
| outline     | whether the button is an outline button            | Boolean | -                                        | `false`  |
| frameless   | whether the button is a frameless button           | Boolean | -                                        | `false`  |
| dashed      | whether the button is a dashed button              | Boolean | -                                        | `false`  |
| full-width  | whether the button is a full-width button          | Boolean | -                                        | `false`  |
| compact     | whether the button is a compact button             | Boolean | -                                        | `false`  |
| round       | whether the button is a round button               | Boolean | -                                        | `false`  |
| circle      | whether the button is a circle button              | Boolean | -                                        | `false`  |
| rich        | whether the button is a rich-content button        | Boolean | -                                        | `false`  |
| icon        | button icon, accepts svg                           | String  | -                                        | -        |
| suffix-icon | button suffix icon, accepts svg                    | String  | -                                        | -        |
| loading     | whether it is loading                              | Boolean | -                                        | `false`  |
| href        | render button as the HTMLElement a label           | String  | -                                        | -        |
| target      | only works href support, the attr of HTMLElement a | String  | -                                        | -        |

### Button events

| Event | Description               | Parameters   |
| :---- | :------------------------ | :----------- |
| click | the click event of button | Event Object |
