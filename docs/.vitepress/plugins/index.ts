import mdContainer from "markdown-it-container";
import createDemoContainer from "./demo";
import type { MarkdownRenderer } from "vitepress";

export const mdPlugin = (md: MarkdownRenderer) => {
  md.use(mdContainer as any, "demo", createDemoContainer(md));
};
