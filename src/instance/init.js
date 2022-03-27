import { mountComponent,callHook } from "./lifecycle";
import { compileToFunctions } from "../compiler";
import { initState } from "./state";
import { mergeOptions } from "../util/index";
import { createElement } from "../vdom";

export function initMixin(MiniVue) {
  // MiniVue.mixin = function (mixin) {
  //   //   合并对象
  //   this.$options = mergeOptions(this.$options, mixin);
  // };

  MiniVue.prototype._init = function (options) {
   
    const vm = this;
    // 这里的this代表调用_init方法的对象(实例对象)
    //  this.$options就是用户new Vue的时候传入的属性
    vm.$options = mergeOptions(vm.constructor.options, options);
   
    callHook(vm, "beforeCreate"); //初始化数据之前

    // 初始化状态
    initState(vm);

    callHook(vm, "created"); //初始化数据之后

    vm._c = (...args) => createElement(vm, ...args)

    // 如果有el属性 进行模板渲染
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };

  MiniVue.prototype.$mount = function (el) {
    const vm = this;
    const options = vm.$options;
    el = document.querySelector(el);

    if (!options.render) {
      let template = options.template;

      if (!template && el) {
        // 如果不存在render和template 但是存在el属性 直接将模板赋值到el所在的外层html结构（就是el本身 并不是父元素）
        template = el.outerHTML;
      }

      // 最终需要把tempalte模板转化成render函数
      if (template) {
        const render = compileToFunctions(template);
        options.render = render;
      }
    }

    return mountComponent(vm, el);
  };
}
