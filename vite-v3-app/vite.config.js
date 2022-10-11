import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { name } from './package.json'
console.log('name', name);
console.log(55555555);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

// const { name } = require("./package");
// module.exports = {
//   devServer: {
//     port:10001,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//   },
//   configureWebpack: {
//     output: {
//       library: `${name}-[name]`,
//       libraryTarget: "umd", // 把微应用打包成 umd 库格式
//       jsonpFunction: `webpackJsonp_${name}`,
//     },
//   },
// };