import initExtend from "./initExtend";
import initAssetRegisters from "./asset.js";
const ASSETS_TYPE = ["component", "directive", "filter"];
export function initGlobalApi(MiniVue) {
  MiniVue.options = {}; // 全局的组件 指令 过滤器
  ASSETS_TYPE.forEach((type) => {
    MiniVue.options[type + "s"] = {};
  });
  MiniVue.options._base = MiniVue; //_base指向Vue

  initExtend(MiniVue); // extend方法定义
  initAssetRegisters(MiniVue); //assets注册方法 包含组件 指令和过滤器
}