import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2015',
    outDir: 'dist',
    lib: {
      // 入口
      entry: path.resolve(__dirname, './packages/index.ts'),
      name: 'HaiBo',
      fileName: `haibo-lib`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          MyLib: 'HaiBo'
        }
      }
    }
  },

  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "@@",
        replacement: path.resolve(__dirname, "packages"),
      },
      // {
      //   find: "vue",
      //   replacement: "vue/dist/vue.esm-bundler.js",
      // },
    ],
  },

  plugins: [
    vue(),
    // 自动构建.d.ts
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false
    })]
})


