
import { initMixin } from "./init.js";
import { lifecycleMixin } from "./instance/lifecycle";
import { renderMixin } from "./render";

function MiniVue(options) {
  this._init(options);
};


initMixin(MiniVue);
// 混入_render
renderMixin(MiniVue);
// 混入_update
lifecycleMixin(MiniVue);


export default MiniVue;