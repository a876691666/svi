import { SCanvas } from "./components/SCanvas";
import { SUI } from "./components/SUI";
import { SGLTF } from "./components/SGLTF";

import type { App, Plugin } from "vue";

export default {
  install(app: App<any>, _options?: any): any {
    app.component("SCanvas", SCanvas);
    app.component("SUI", SUI);
    app.component("SGLTF", SGLTF);
  },
} as Plugin;
