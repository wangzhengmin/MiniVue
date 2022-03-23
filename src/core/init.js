import { mountComponent } from "./instance/lifecycle";

export function initMixin(MiniVue) {

  MiniVue.prototype._init = function (options) {
    const vm = this;
    // 这里的this代表调用_init方法的对象(实例对象)
    //  this.$options就是用户new Vue的时候传入的属性
    vm.$options = options;

    // 初始化状态
    // initState(vm);

    // 如果有el属性 进行模板渲染
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };

  MiniVue.prototype.$mount = function (el) {
    const vm = this;
    
    el = document.querySelector(el);

    return mountComponent(vm, el);
  };
}
