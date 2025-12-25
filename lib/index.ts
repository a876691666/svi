import { SCanvas } from "./components/SCanvas";
import { SUI } from "./components/SUI";
import type { App, Plugin } from "vue";

export default {
  install(app: App<any>, _options?: any): any {
    app.component("SCanvas", SCanvas);
    app.component("SUI", SUI);
  },
} as Plugin;
