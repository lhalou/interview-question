## fiber

- 定义：本质是一个虚拟的调度帧，新的调度器会根据优先级的不同自由的调度这些帧
- 作用：将react之前的同步渲染改成异步渲染，在不影响用户体验的情况下分段计算更新。

## 对于异步渲染有两个渲染阶段

1. Reconcilition阶段：可以打断更新，所以钩子函数也会重复调用
   ```
   componentWillMount: 组件将要挂载
   getDerivedStateFromProps:在初始化或者Update时调用
   shuoldComponentUpdate:判断组件是否需要更新
   getSnapShotBbeforeUpdate:在update之后组件更新之前调用，用户读取最新DOM元素
   ```
2. commit阶段：不可以打断，直到更新完毕
   ```
   componetDidMount: 组件挂载完毕
   componentDidUpdate: 组件更新完毕
   componentWillUmount:组件卸载前调用
   ```