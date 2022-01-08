# Button(按钮)


## 基本使用

<code-wrapper>
<!-- <ButtonBase /> -->

<Base />

 ```vue
<template>
    <Button>neutral</Button>
    <Button type="primary">primary</Button>
    <Button type="secondary">secondary</Button>
    <Button type="link">link</Button>
    <Button type="accent">accent</Button>
    <Button type="ghost">ghost</Button>
    <Button type="info">信息</Button>
    <Button type="success">成功</Button>
    <Button type="warning">警告</Button>
    <Button type="error">错误</Button>
</template>

<script setup>
import Button from './src/Button.vue';
</script>
```

</code-wrapper>



## 禁用状态

<code-wrapper>
<ButtonDisabled />

 ```vue
<template>
  <Button disabled>neutral</Button>
  <Button type="primary" disabled>primary</Button>
  <Button type="secondary" disabled>secondary</Button>
  <Button type="link" disabled>link</Button>
  <Button type="accent" disabled>accent</Button>
  <Button type="ghost" disabled>ghost</Button>
</template>

<script setup>
import Button from './src/Button.vue';
</script>

```

</code-wrapper>

## OutLine

<code-wrapper>
<OutLine />

 ```vue
<template>
  <Button outline>neutral</Button>
  <Button type="primary" outline>primary</Button>
  <Button type="secondary" outline>secondary</Button>
  <Button type="accent" outline>accent</Button>
</template>

<script setup>
// src\components\test\OutLine.vue
import Button from './src/Button.vue';
</script>


```

</code-wrapper>

## 按钮图标
## svg图标(ArrowLeft.vue)
<code-wrapper>
<ArrowLeft class="w-6 h-6"/>
```vue
<template>
  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
    ></path>
  </svg>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ArrowLeft',
});
</script>
```
</code-wrapper>
<code-wrapper>
<IconButton />

 ```vue
<template>
  <h3>左侧</h3>
  <Button :icon="Close">默认按钮</Button>
  <Button type="primary" :icon="Close" outline>主按钮</Button>
  <Button type="secondary" :icon="Close"> 副按钮</Button>
  <Button type="accent" :icon="Close">accent</Button>
  <h3>右侧</h3>
  <Button type="info" outline :icon="ArrowLeft" icon-postion="right"> 信息</Button>
  <Button type="success" :icon="ArrowLeft" icon-postion="right">成功</Button>
  <Button type="warning" :icon="ArrowLeft" icon-postion="right">警告</Button>
  <Button type="error" :icon="icon" icon-postion="right">错误</Button>
  <Button type="error" :icon="CodeIcon">错误</Button>
</template>
<script setup>
import Button from '../src/Button.vue';
import Close from '../../icons/Close.vue';
import ArrowLeft from '../../icons/ArrowLeft.vue';
import { h } from 'vue';
import CodeIcon from './code.svg';
let icon = h(ArrowLeft, {}, null);
</script>

```
</code-wrapper>

## 按钮大小

<code-wrapper>
<SizeButton />

 ```vue
<template>
  <Button size="large">large</Button>
  <Button>normal</Button>
  <Button size="small">small</Button>
  <Button size="tiny">tiny</Button>
</template>

<script setup>
import Button from '../src/Button.vue';
</script>


```

</code-wrapper>

<style lang="scss">
button {
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
import ButtonDisabled from '../../src/components/button/demo/Disabled.vue';
import OutLine from '../../src/components/button/demo/OutLine.vue';
import Base from '../../src/components/button/demo/Base.vue';
import IconButton from '../../src/components/button/demo/IconButton.vue';
import SizeButton from '../../src/components/button/demo/Size.vue';
import ArrowLeft from "../../src/components/icons/ArrowLeft.vue"
export default {
	components: {
		ButtonDisabled,
		OutLine,
    Base,
    IconButton,
    SizeButton,
    ArrowLeft
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
