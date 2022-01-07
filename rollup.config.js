import path from 'path';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import scss from 'rollup-plugin-scss';
import vue from 'rollup-plugin-vue';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
// import replace from "@rollup/plugin-replace";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import postcssPlugin from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import { terser } from 'rollup-plugin-terser';
const banner = `/**
 * Vue 3 Component UI Library ${pkg.version}
 * (c) ${new Date().getFullYear()}
 * @license MIT
 */`;
const projectRootDir = path.resolve(__dirname);
const globals = {
  vue: 'Vue',
};
const overrides = {
  compilerOptions: { declaration: true },
  exclude: ['tests/**/*.ts', 'tests/**/*.tsx'],
};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'daisy-vue',
      banner,
      globals,
    },
    {
      file: pkg.module,
      format: 'es',
      banner,
      globals,
    },
  ],
  external: [
    // 告诉rollup不要将此lodash打包，而作为外部依赖
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    resolve(),
    url(),
    json(),
    typescript(),
    vue({ target: 'browser' }),
    postcssPlugin({
      extensions: ['.css'],
      extract: true,
      plugins: [postcssImport(), tailwindcss(), autoprefixer()],
    }),
    commonjs({
      include: ['node_modules/**', 'node_modules/**/*'],
    }),
    // terser(),
  ],
};
