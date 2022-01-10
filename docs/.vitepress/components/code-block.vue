<template>
  <div class="code-block" ref="root">
    <div v-if="showAction" class="preview-action">
      <!-- <d-button type="info" size="tiny" :icon="sandboxIcon" @click="openCodeSandbox" /> -->
      <d-button type="info" outline :icon="copyIcon" size="tiny" @click="copyCode">COPY</d-button>
      <!-- <d-button type="info" size="tiny" :icon="editIcon" @click="openCodeSandbox" /> -->
      <d-button size="tiny" :icon="codeIcon" outline type="info" @click="toggleDisplayCode">Code</d-button>
    </div>
    <slot />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import copyIcon from './copy.svg';
import codeIcon from './code.vue';
import editIcon from './edit.svg';
import sandboxIcon from './sandbox.svg';
import { getCodeSandboxParams } from './codesandbox';

export default defineComponent({
  props: {
    showAction: Boolean, // only vue show actions
  },
  name: 'CodeBlock',
  setup(props, { slots }) {
    const root = ref(null);
    const slot = slots.default ? slots.default() : null;
    const code = slot ? (slot[0].children[0].el || {}).innerText : '';
    const openCodeSandbox = () => {
      const div = document.createElement('div');
      const parameters = getCodeSandboxParams(code);
      div.style.display = 'none';
      div.innerHTML = `<form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
<input type="hidden" name="parameters" value="${parameters}" />
<input type="submit" value="Open in sandbox" />
</form>`;
      document.body.appendChild(div);
      div.firstElementChild.submit();
      document.body.removeChild(div);
    };

    const toggleDisplayCode = () => {
      const codeWrapEle = root.value ? root.value.querySelector('.line-numbers-mode') : null;
      if (codeWrapEle) {
        codeWrapEle.style.display = codeWrapEle.style.display !== 'none' ? 'none' : '';
      }
    };

    const copyCode = () => {
      navigator.clipboard.writeText(code).then(() => {
        console.log('copy!', code);
      });
    };

    onMounted(() => {
      if (props.showAction) {
        toggleDisplayCode();
      }
    });

    return {
      root,
      copyIcon,
      codeIcon,
      editIcon,
      sandboxIcon,

      copyCode,
      openCodeSandbox,
      toggleDisplayCode,
    };
  },
});
</script>

<style lang="scss" scoped>
button {
  margin-top: 12px;
  margin-right: 12px;
}
.code-block {
  .preview-action {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 16px;
    .yoga-button {
      margin-left: 3px;
      :deep(.yoga-icon) {
        color: #333;
        fill: #333;
      }

      &:hover :deep(.yoga-icon) {
        color: #ee4d2d;
        fill: #ee4d2d;
      }
    }
  }

  .line-numbers-mode {
    margin-top: 0;
  }
}
</style>
