
import { initGlobalApi } from "./global-api/index.js";
import { initMixin } from "./instance/init.js";
import { lifecycleMixin } from "./instance/lifecycle";
import { renderMixin } from "./instance/render.js";

function MiniVue(options) {
  this._init(options);
};


initMixin(MiniVue);
// 混入_render
renderMixin(MiniVue);
// 混入_update
lifecycleMixin(MiniVue);
initGlobalApi(MiniVue);


export default MiniVue;