<template>
  <div class="read-pro">
    <div class="read-pro__inner"></div>
  </div>
  <Layout />
</template>

<script setup>
import { onMounted, watch, nextTick, provide } from 'vue';
import { useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
// string.js https://github.com/vuejs/vitepress/blob/main/src/node/markdown/plugins/slugify.ts
import { remove as removeDiacritics } from 'diacritics';
// eslint-disable-next-line no-control-regex
const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g;
provide('lang', 'zh');
const slugify = (str) => {
  return (
    removeDiacritics(str)
      // Remove control characters
      .replace(rControl, '')
      // Replace special characters
      .replace(rSpecial, '-')
      // Remove continuous separators
      .replace(/\-{2,}/g, '-')
      // Remove prefixing and trailing separators
      .replace(/^\-+|\-+$/g, '')
      // ensure it doesn't start with a number (#121)
      .replace(/^(\d)/, '_$1')
      // lowercase
      .toLowerCase()
  );
};
const handleScroll = () => {
  const readProInner = document.querySelector('.read-pro__inner');
  const toc = document.querySelector('.table-of-contents');
  const tocLi = toc.querySelectorAll('li');
  tocLi && tocLi[0] && tocLi[0].classList.add('active');

  let scrolling = false;
  window.addEventListener('scroll', () => {
    if (!scrolling) {
      scrolling = true;
      requestAnimationFrame(() => {
        // 处理顶部进度条
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        readProInner.style.width = +(scrollTop / (scrollHeight - clientHeight)).toFixed(2) * 100 + '%';

        const hash = decodeURIComponent(window.location.hash).slice(1);
        tocLi.forEach((li) => {
          if (slugify(li.querySelector('a').innerText) === hash) {
            li.classList.add('active');
          } else {
            li.classList.remove('active');
          }
        });
        scrolling = false;
      });
    }
  });
};
const route = useRoute();
let oldPath = '';
watch(route, (value) => {
  nextTick(() => {
    if (value.path !== oldPath) {
      oldPath = value.path;
      // 清除上一次的记录
      const readProInner = document.querySelector('.read-pro__inner');
      if (readProInner) {
        readProInner.style.width = '0%';
      }
      handleScroll();
    }
  });
});

onMounted(() => {
  handleScroll();
});
</script>

<style lang="scss" scoped>
.read-pro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 9999;
  background-color: #ffffff;

  &__inner {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    border-radius: 3px;
    background: linear-gradient(270deg, #ee4d2d, rgba(248, 250, 255, 0));
  }
}
</style>
