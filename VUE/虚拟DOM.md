## vue中的虚拟DOM 

### 模板转换成视图的过程

在Vue的底层实现上，vue将模板编译成虚拟DOM渲染函数，结合vue自带的响应式系统，在状态概念时，vue能够智能的计算出重新渲染组件的最小代价并进行渲染。

渲染函数：Vue模板会将template编译成渲染函数render,生成虚拟DOM
VDOM：代表真实的DOM节点，通过createElement将VDOM渲染成DOM节点
diff算法：同层比较 局部更新

### VDOM

- VDOM是一颗以JS对象作为节点的树，代表真实DOM的抽象。用对象的属性来描述节点等信息。
- VDOM作用：代替真实DOM进行视图渲染
- VDOM优点：
1. 具备跨平台的优势（浏览器平台，weex）
2. 减少了DOM操作
3. 提高渲染性能（局部更新）


