<template>
  <Layout />
</template>

<script setup>
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme;
// string.js https://github.com/vuejs/vitepress/blob/main/src/node/markdown/plugins/slugify.ts
import { remove as removeDiacritics } from 'diacritics';
// eslint-disable-next-line no-control-regex
const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g;
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
  )
}
const handleScroll = () => {
  const toc = document.querySelector('.table-of-contents');
  const tocLi = toc.querySelectorAll('li');
  tocLi && tocLi[0] && tocLi[0].classList.add('active');

  let scrolling = false;
  window.addEventListener('scroll', () => {
    if(!scrolling) {
		  scrolling = true;
      requestAnimationFrame(() => {
        const hash = decodeURIComponent(window.location.hash).slice(1);
        tocLi.forEach(li => {
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
watch(route, value => {
  nextTick(() => {
    if (value.path !== oldPath) {
      oldPath = value.path;
      handleScroll();
    }
  });
});

onMounted(() => {
  handleScroll()
});
</script>
