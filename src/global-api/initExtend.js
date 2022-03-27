import { mergeOptions } from "../util/index";
export default function initExtend(MiniVue) {
  let cid = 0; //组件的唯一标识
  // 创建子类继承MiniVue父类 便于属性扩展
  MiniVue.extend = function (extendOptions) {
    // 创建子类的构造函数 并且调用初始化方法
    const Sub = function MiniVueComponent(options) {
      this._init(options); //调用MiniVue初始化方法
    };
    Sub.cid = cid++;
    Sub.prototype = Object.create(this.prototype); // 子类原型指向父类
    Sub.prototype.constructor = Sub; //constructor指向自己
    Sub.options = mergeOptions(this.options, extendOptions); //合并自己的options和父类的options
    return Sub;
  };
}