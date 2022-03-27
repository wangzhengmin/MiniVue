import { createElement, createTextNode } from "../vdom/index";
import { nextTick } from "../util/next-tick";

export function renderMixin(MiniVue) {
  MiniVue.prototype.$nextTick = nextTick;
  MiniVue.prototype._render = function () {
    const vm = this;
    // 获取模板编译生成的render方法
    const { render } = vm.$options;
    // 生成vnode--虚拟dom
    const vnode = render.call(vm);
    return vnode;
  };

  // // render函数里面有_c _v _s方法需要定义
  // MiniVue.prototype._c = function (...args) {
  //   // 创建虚拟dom元素
  //   return createElement(...args);
  // };

  MiniVue.prototype._v = function (text) {
    // 创建虚拟dom文本
    return createTextNode(text);
  };
  MiniVue.prototype._s = function (val) {
    // 如果模板里面的是一个对象  需要JSON.stringify
    return val == null
      ? ""
      : typeof val === "object"
      ? JSON.stringify(val)
      : val;
  };
}
