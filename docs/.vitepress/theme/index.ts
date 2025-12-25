import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Demo from "../components/Demo.vue";
import "./style.css";
import Svi from "#";

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    app.component("Demo", Demo);

    const allVue = import.meta.glob("../../**/*.vue") as {
      [path: string]: () => Promise<{ default: any }>;
    };

    const asyncList = Object.entries(allVue).map(([path, resolver]) => {
      const componentName = path
        .replace(/\.\.\/\.\.\//g, "")
        .replace(/\//g, "-")
        .replace(/\.vue$/g, "");

      return resolver().then((mod) => {
        app.component(`ep-${componentName}`, mod.default);
      });
    });

    app.use(Svi as any);

    await Promise.all(asyncList);
  },
} satisfies Theme;
