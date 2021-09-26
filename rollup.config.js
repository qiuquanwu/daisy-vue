import path from "path";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import scss from "rollup-plugin-scss";
import vue from "rollup-plugin-vue";
import url from "@rollup/plugin-url";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
// import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

const banner = `/**
 * Vue 3 Component UI Library ${pkg.version}
 * (c) ${new Date().getFullYear()}
 * @license MIT
 */`;
const projectRootDir = path.resolve(__dirname);

export default {
  input: "src/index.ts",
  output: [
    // {
    //   file: pkg.main,
    //   format: 'umd',
    //   name: 'yui',
    //   banner,
    //   globals: {
    //     vue: 'Vue',
    //   },
    // },
    {
      file: pkg.module,
      format: "es",
      banner,
    },
    // {
    //   format: 'umd',
    //   name: 'yui',
    //   file: pkg.umd
    // },
  ],
  external: [
    // 告诉rollup不要将此lodash打包，而作为外部依赖
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    // css({ output: 'carousel.css' }),
    alias({
      entries: [
        {
          find: "@base",
          replacement: path.resolve(projectRootDir, "src/base"),
        },
        {
          find: "@theme",
          replacement: path.resolve(projectRootDir, "src/theme"),
        },
        {
          find: "@utils",
          replacement: path.resolve(projectRootDir, "src/utils"),
        },
        {
          find: "@components",
          replacement: path.resolve(projectRootDir, "src/components"),
        },
      ],
    }),
    typescript(),
    commonjs(),
    resolve(),
    url(),
    json(),
    vue({
      target: "browser",
      template: {
        isProduction: false,
      },
      preprocessStyles: false,
    }),
    scss({
      output: "dist/yui.css",
      // outputStyle: 'compressed',
      prefix: `@import "../../../theme/var.scss";`,
      processor: () => postcss([autoprefixer()]),
      includePaths: [
        path.join(__dirname, "../../node_modules/"),
        "node_modules/",
      ],
    }),
  ],
};
