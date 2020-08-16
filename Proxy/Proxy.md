## Proxy作用

1. Proxy对象用于定义基本操作的自定义行为（包括：属性查找，赋值，枚举，函数调用等）
   ```
   let p = new Proxy(target,handler)
   ```
2. 在vue3.0代替Object.definePrototype()实现数据双向绑定
   
## Proxy的API

1. handler.getPrototypeOf()
  // Object.getPrototypeOf 方法的捕捉器。
2. handler.setPrototypeOf()
  // Object.setPrototypeOf 方法的捕捉器。
3. handler.isExtensible()
  // Object.isExtensible 方法的捕捉器。
4. handler.preventExtensions()
  // Object.preventExtensions 方法的捕捉器。
5. handler.getOwnPropertyDescriptor()
  // Object.getOwnPropertyDescriptor 方法的捕捉器。
6. handler.defineProperty()
  // Object.defineProperty 方法的捕捉器。
7. handler.has()
  // in 操作符的捕捉器。
8. handler.get()
  // 属性读取操作的捕捉器。
9. handler.set()
  // 属性设置操作的捕捉器。
10. handler.deleteProperty()
  // delete 操作符的捕捉器。
11. handler.ownKeys()
  // Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。
12. handler.apply()
  // 函数调用操作的捕捉器。
13. handler.construct()
  // new 操作符的捕捉器。


##  Proxy实现双向绑定与Object.defineProperty()实现双向绑定的不同

双向数据绑定：在get中收集依赖，在set中派发更新
1. Object.propertyDefine()
   - 需要深度遍历属性，递归到底
   - 对对象无法监听（使用Vue.set / this.$set）
   - 对数组的操作无法监听（采用底层封装好的splice进行操作）
   - 对原对象进行修改
2. Proxy
   - 无需递归为每个属性添加代理，一次操作即可完成
   - 可以监听到对象的变化，而不仅仅是属性
   - 可以监听到数组的变化，并对其操作
   - 会返回一个新对象，对新对象进行操作。
   - 有更多的API(has,set,get,oenKeys,defineProperty,deleteProperty,apply,constructor,)
