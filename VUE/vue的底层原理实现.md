## VUE实现数据双向绑定

所谓的数据双向绑定，就是数据和视图的相互映射，数据更新，视图会相应更新，视图更新，数据也随着变化。
在VUE框架中，只有定义在data中的数据，才可以实现响应式。
所以的双向数据绑定:定义在data的中的数据可以直接显示在页面，对input等添加change事件，通过用户的输入等，动态改变model和view即改变data中的数据，从而实现页面展示数据的改变。

## 数据双向绑定的原理(数据劫持+发布订阅者模式)

**Object.defineProperty()本质就是做数据响应式的，和双向绑定没有任何关系。VUE的双向数据绑定其实是语法糖，本质还是单向数据流。Object.defineProperty()对属性进行劫持，达到监听到数据变化的目的**
vue的双向数据绑定原理：ES5的Object.defineProperty()进行数据劫持并结合发布订阅者摸模式，Object.defineProperty()监听数据的变动，当数据变动时（给属性赋值等），会触发setter函数，之后传递给发布订阅者模式，调用回调函数。
主要由三个模块组成：
1. 数据监听器Observer：可以对数据对象的属性进行监听，当监听到数据对象发生变动时，通知订阅者。
2. Watcher：作为Observer和Compile的中间桥梁，能够订阅并收到数据的变化，之后调用相应的回调函数，进行视图的重新渲染。
3. 指令解析器Compile：对每个元素节点的指令和模板进行解析，根据指令模板替换数据，以及绑定相应的数据函数。

## Observer

- Observer监听数据层的变化，核心就是Object.definerProperty，这个函数内部可以实现getter和setter函数，当数据对象变化时，就会触发setter函数，此时，Oberver就要通知订阅者Watcher
- Observer的实现思路：遍历data中的对象属性（包括子属性对象上的属性），利用Object.defineProperty()给每一个对象属性添加getter和setter函数。
  ```
  //取出所有对象属性进行遍历
  Object.keys(data).forEach((key) => {
    defineReactive(data,key,data[key])
  })
  //defineReactive函数的实现，采用Object.defineProperty()
  Object.defineProperty(data,key,{
    enumerable:true // 可枚举的
    congifurable: false // 不能再define
    get(){},
    set(){}
  })
  ```

## Watcher

Watcher作为Observer和Compile之间通信的桥梁，主要做的事情：
1. 在自身实例化时往属性订阅器（dep)添加自己。
   ```
   <p>{{name}}</p>
   <P>{{name}}</P>
   以上有两个数据name ,所以使用dep进行同一个watcher的管理
   ```
2. 自身必须有一个Update()方法
3. 订阅属性的变动dep.notify(),之后调用自身的update()方法，并触发Compile的回调函数
4. 实现方式：维护一个数组的变化，用来收集订阅者，数据变动触发notify，在调用订阅者的update()方法。通过dep定义一个watcher
   

## Compile

- Compile监听视图层的变化，它所做的事情就是解析模板中的指令，将模板中的变量变成数据。之后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。
- 实现原理：因为遍历节点的时候，会涉及到多次DOM操作，为了性能考虑，可以将节点转换成节点碎片fragment，解析完成，在添加到真实的DOM节点中。compileElement方法会遍历所有的节点，对接点进行解析渲染，调用对应的指令渲染函数进行渲染，并调用对应的指令函数进行绑定。监听数据、绑定更新函数的处理是在compileUtil.bind()这个方法中，通过new Watcher()添加回调来接收数据变化的通知

## 非响应式属性如何变成响应式属性

- 如果数据不是定义在data模板中的话，Object.defineProperty()就无法监听到数据的变化，无法进行响应式处理。所以必须在data中进行声明，哪怕只是一个初始值空字符串。
- 解决办法，VUE.set / this.$set
- 解决办法二：Proxy
- Vue.set的底层原理：Object.assign(目标对象，源对象1，源对象2...)

## VUE采用异步更新队列

- 只要监听到的数据发生变化，vue会开启一个队列，并且会缓冲在同一事件中发生的所有数据变更，如果一个watcher被多次触发，只会把最后一次触发推送到异步队列中，可以去掉重复的数据或者不必要的DOM计算。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。在下一个的事件循环“tick”中，vue刷新队列并执行已经去重的异步工作。也就是说当改变一个数据时`this.name = 'new value'`，不会立即触发更新，而是在一个tick中，才会执行。VUE推荐使用“数据驱动”，所以为了获取更新的DOM，可以采用`nextTick()`这个API,在当前数据更新完成之后执行延迟回调，获取更新后的DOM。并且在vue组件中使用这个API，回调函数中的this自动绑定到Vue实例上。nextTick并且也返回一个Promise对象，可以采用promise的链式调用,或者使用async await的方法
  ```
  Vue.component ('example',{
    template: '<div>{{name}}</div>',
    data: function(){
      return {
        name: '未刷新'
      }
    },
    methods: {
      updateName: function(){
        this.name = '已更新'
        console.log(this.$sel.textContent) // 未更新
        this.nextTick(() => {
          console.log(this.$sel.textContent) // 已更新
        })

      }
    }
  })
  ```
  等价于
  ```
  updateName: async function(){
        this.name = '已更新'
        console.log(this.$sel.textContent) // 未更新
        await this.nextTick()
        console.log(this.$sel.textContent) // 已更新
      }
  ```
