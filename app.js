import MiniVue from "./src/index.js";
import { h } from "./src/vdom/index.js";

new MiniVue({
  el: "#app",
  render: () => h("div", {}, [h("hello")]),
});
