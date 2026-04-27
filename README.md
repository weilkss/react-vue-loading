# <center>🚀 react-vue-loading</center>

<p align="center">
  <a href="https://www.npmjs.com/package/react-vue-loading"><img src="https://img.shields.io/npm/v/react-vue-loading.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/react-vue-loading"><img src="https://img.shields.io/npm/dt/react-vue-loading.svg" alt="npm downloads"></a>
  <a href="https://bundlephobia.com/package/react-vue-loading"><img src="https://img.shields.io/bundlephobia/minzip/react-vue-loading" alt="bundle size"></a>
  <img src="https://img.shields.io/npm/l/react-vue-loading.svg" alt="license">
</p>

<h3 align="center">A Zero-Dependency, Cross-Framework Loading Component.</h3>
<p align="center">
  <a href="https://www.weilkss.cn/react-vue-loading">👉 Live Demo & Homepage 👈</a>
</p>

---

## ✨ 特性 (Features)

- **真正零依赖 (Zero-Dependency)**：底层基于原生 Web Components 实现，不依赖任何框架的 Runtime。
- **跨框架通用**：完美支持 `React`, `Vue 2/3`, `Svelte`, `SolidJS`, 甚至**原生纯 HTML**。
- **极致轻量**：打包体积仅 **~1KB**，且完全没有内存泄漏。
- **完美的 TypeScript 支持**：开箱即用，在 React 和 Vue 中都有极佳的 Props 代码提示。

## 📦 安装 (Install)

```shell
npm install react-vue-loading
# or
yarn add react-vue-loading
# or
pnpm add react-vue-loading
```

```js
<script src="https://unpkg.com/react-vue-loading@1.0.5/lib/index.js"></script>
```

## 💻 使用指南 (Usage)

由于底层架构的升级，你**不再需要**像以前那样配置 `Vue.use()`，直接引入即可使用！

### ⚛️ 在 React 中使用

```tsx
import React from "react";
import RVLoading from "react-vue-loading";

export default function App() {
  return (
    <div className="example">
      <h3>React Example</h3>
      <RVLoading size={32} color="#2396fa" />
    </div>
  );
}
```

### 💚 在 Vue 3 / Vue 2 中使用

```vue
<template>
  <div class="example">
    <h3>Vue Example</h3>
    <RVLoading :size="32" color="#2396fa" />
  </div>
</template>

<script lang="ts" setup>
import RVLoading from "react-vue-loading";
</>
```

> **💡 Vue 用户小贴士**: 如果在控制台看到 `Failed to resolve component...` 警告，这是因为 Vue 试图解析原生 Web Component。你可以在 `vite.config.ts` 或 `vue.config.js` 中配置 `compilerOptions.isCustomElement = tag => tag === 'rv-loading'` 即可消除警告。

### 🌐 在纯 HTML / 原生 JS 中使用

不仅是框架，在没有任何构建工具的原生网页中也能跑！

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- 引入组件库即可自动注册 -->
    <script type="module">
      import "react-vue-loading";
    </script>
  </head>
  <body>
    <!-- 当做原生 HTML 标签直接使用 -->
    <rv-loading size="40" color="red"></rv-loading>
  </body>
</html>
```

## ⚙️ 属性 (Props)

组件支持智能的 TypeScript 类型推导：

| 属性 (Prop) | 默认值 (Default) | 数据类型 (Type)    | 说明 (Description)                        |
| ----------- | ---------------- | ------------------ | ----------------------------------------- |
| `size`      | `24`             | `number \| string` | Loading的大小 (px)                        |
| `color`     | `#2396fa`        | `string`           | Loading 线条的颜色，支持 hex/rgb/英文单词 |

## 🛠 本地开发 (Development)

```shell
# 1. Clone 仓库
git clone https://github.com/weilkss/react-vue-loading.git

# 2. 安装依赖
npm install

# 3. 本地打包构建
npm run build
```

## 📄 License

[ISC](LICENSE) © weilkss
