import MiniVue from "./src/index.js";
import { h } from "./src/vdom/index.js";

MiniVue.component("parent-component", {
  template: `<div>我是全局组件</div>`,
});

const vm = new MiniVue({
  el: "#app",
  data() {
    return {
      a: 123,
      b: 456,
      name: "wang",
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this);
  },
  created() {
    console.log("created", this);
  },
  beforeMount() {
    console.log("beforeMount", document.querySelector("#test"));
  },
  mounted() {
    console.log("mounted", document.querySelector("#test"));
  },
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated")
  },
  components: {
    "child-component": {
      data() {
        return {
          msg: "我是局部组件data"
        }
      },
      mounted() {
        setTimeout(()=>{
          this.msg = "局部修改1"
          this.msg = "局部修改2"
        },1000)
      },
      template: `<div>我是局部组件-----{{msg}}</div>`,
      created() {
        console.log("组件created")
      }
    },
  },
  template: `<div id="a">
  <p id="test">hello {{a}}</p>
  <p>are you ok {{b}}</p>
  <child-component></child-component>
  <parent-component/></parent-component>
  </div>`,
  // render: () => h("div", {}, [h("hello")]),
});

// 我们在这里模拟更新
// setTimeout(() => {
//   vm.a = "aaaaaa";
//   vm.b = "bbbbb";
//   vm.a = "aaaaa";
//   vm.a = "aaa";
// }, 1000);

// setTimeout(() => {
//   vm.a = "第二次修改";
//   vm.b = "第二次修改";
//   vm.$nextTick(() => {
//     console.log("render nexttick");
//   });
//   vm.b = "第三次修改";
//   vm.b = "第四次修改";
// }, 2000);
