import { h, defineComponent } from "vue";
import { filterAttrs, copySvgAttrs, download } from "./util";

const cache: Record<string, Promise<SVGSVGElement>> = {};

export default defineComponent({
  name: "Icon",
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      svgEle: null,
    };
  },
  watch: {
    src: {
      handler(svgSrc: string) {
        this.$nextTick(() => {
          this.getSource(svgSrc);
        });
      },
      immediate: true,
    },
  },
  methods: {
    async getSource(svgSrc: string) {
      if (!cache[svgSrc]) {
        // download
        cache[svgSrc] = download(svgSrc);
      }

      try {
        this.svgEle = await cache[svgSrc];
        this.$nextTick(() => {
          // this.$emit('loaded');
        });
      } catch (err) {
        delete cache[svgSrc];
        this.svgEle = null;
        // this.$emit('error', err);
      }
    },
  },
  render() {
    const { svgEle } = this;
    if (!svgEle) {
      return null;
    }

    const svg = h("svg", {
      ...copySvgAttrs(svgEle),
      ...filterAttrs(this.$attrs),
      innerHTML: (svgEle.cloneNode(true) as HTMLElement).innerHTML,
    });

    return h("i", { class: "yoga-icon" }, svg);
  },
});
