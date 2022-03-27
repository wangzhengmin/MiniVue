const ASSETS_TYPE = ["component", "directive", "filter"];
export default function initAssetRegisters(MiniVue) {

  ASSETS_TYPE.forEach((type) => {
    MiniVue[type] = function (id, definition) {
      if (type === "component") {
        //   this指向MiniVue
        // 全局组件注册
        // 子组件可能也有extend方法  MiniVueComponent.component方法
        definition = this.options._base.extend(definition);
      }
      this.options[type + "s"][id] = definition;
    };
  });
}
