import { defineConfig } from "vitepress";
import { mdPlugin } from "../plugins";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { templateCompilerOptions } from "@tresjs/core";

import Components from "unplugin-vue-components/vite";

export default defineConfig({
  title: "Svi 文档",
  description:
    "Svi 是一个基于 Tres.js 和 Vue 3 的轻量级三维可视化框架，旨在简化三维应用程序的开发过程。",
  lang: "zh-CN",

  markdown: {
    config(md) {
      return mdPlugin(md);
    },
  },

  vue: {
    ...templateCompilerOptions,
  },

  vite: {
    resolve: {
      alias: {
        "#": resolve(__dirname, "../../../", "lib"),
      },
    },
    optimizeDeps: {
      include: ["@tresjs/core"],
    },
    plugins: [
      Components({
        dirs: [resolve(__dirname, "../../../", "lib")],
        types: [],
        dts: "../components.d.ts",
      }),
      tailwindcss(),
    ],
    server: {
      port: 5174,
    },
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/components/" },
      { text: "使用案例", link: "/examples/" },
    ],

    sidebar: {
      "/components/": [
        {
          text: "基础组件",
          items: [{ text: "SCanvas", link: "/components/SCanvas/" }],
        },
        {
          text: "UI 组件",
          items: [{ text: "SUI", link: "/components/SUI/" }],
        },
      ],
      "/examples/": [
        {
          text: "使用案例",
          items: [{ text: "指南", link: "/examples/" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/yourusername/your-repo" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present",
    },
  },
});
