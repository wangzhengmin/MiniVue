import MiniVue from "./core/index.js";
import { h } from "./core/vdom/index.js";

new MiniVue({
  el: "#app",
  render: () => h("div", {}, [h("hello")]),
});
