import { patch } from "../vdom/patch.js";
import Watcher from "../observer/watcher.js";

export function mountComponent(vm, el) {
  vm.$el = el;
  callHook(vm, "beforeMount"); //初始渲染之前

  // 真实的el选项赋值给实例的$el属性 为之后虚拟dom产生的新的dom替换老的dom做铺垫
  let updateComponent = () => {
    vm._update(vm._render());
  };

  new Watcher(
    vm,
    updateComponent,
    () => {
      callHook(vm, "beforeUpdate"); //更新之前
    },
    true
  );

  callHook(vm, "mounted"); //渲染完成之后
}

export function lifecycleMixin(Vue) {
  // 把_update挂载在Vue的原型
  Vue.prototype._update = function (vnode) {
    const vm = this;
    const prevVnode = vm._vnode;
    vm._vnode = vnode;    // patch是渲染vnode为真实dom核心
    if (!prevVnode) {
      vm.$el = patch(vm.$el, vnode);
    } else {
      vm.$el = patch(prevVnode, vnode);
    }
  };
}

export function callHook(vm, hook) {
  // 依次执行生命周期对应的方法
  const handlers = vm.$options[hook];
  if (handlers) {
    for (let i = 0; i < handlers.length; i++) {
      handlers[i].call(vm); //生命周期里面的this指向当前实例
    }
  }
}
