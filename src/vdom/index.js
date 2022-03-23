// 定义Vnode类
export default class Vnode {
  constructor(tag, data, key, children, text) {
    this.tag = tag; // 标签
    this.data = data; // 数据
    this.key = key; // 唯一id
    this.children = children; // 子节点
    this.text = text; // 文本
  }
}

// 创建元素vnode 等于render函数里面的 h=>h(App)
export function createElement(tag, data = {}, children) {
  let key = data.key;
  return new Vnode(tag, data, key, children);
}

// 创建文本vnode
export function createTextNode(text) {
  return new Vnode(undefined, undefined, undefined, undefined, text);
}

let tags = ["div", "p"];

export function h(tag, data = {}, children) {
  if (tags.includes(tag)) {
    return createElement(tag, data, children);
  } else {
    return createTextNode(tag);
  }
}
