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
  <Button type="info" :icon="ArrowLeft" icon-postion="right" size="large"> 信息</Button>
  <Button type="success" :icon="ArrowLeft" icon-postion="right">成功</Button>
  <Button type="warning" :icon="ArrowLeft" icon-postion="right" size="small">警告</Button>
  <Button type="error" :icon="icon" icon-postion="right" size="tiny">错误</Button>
  <h3>svg图标</h3>
  <Button type="error" :icon="CodeIcon">错误</Button>
  <Button type="error" :icon="CodeIcon" icon-postion="right">错误</Button>
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

<script setup>
import ButtonDisabled from '../../src/components/button/demo/Disabled.vue';
import OutLine from '../../src/components/button/demo/OutLine.vue';
import Base from '../../src/components/button/demo/Base.vue';
import IconButton from '../../src/components/button/demo/IconButton.vue';
import SizeButton from '../../src/components/button/demo/Size.vue';
import ArrowLeft from "../../src/components/icons/ArrowLeft.vue"
</script>

## API
