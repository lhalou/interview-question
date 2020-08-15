## VUE实现数据双向绑定

所谓的数据双向绑定，就是数据和视图的相互映射，数据更新，视图会相应更新，视图更新，数据也随着变化。
在VUE框架中，只有定义在data中的数据，才可以实现响应式。

## 数据双向绑定的原理(数据劫持+发布订阅者模式)

vue的双向数据绑定原理：ES5的Object.defineProperty()进行数据劫持并结合发布订阅者摸模式，Object.defineProperty()监听数据的变动，，当数据变动时，会触发getter函数，之后传递给发布订阅者模式，调用回调函数。
主要由三个模块组成：
1. Observer：可以对数据对象的属性进行监听，当监听到数据对象发生变动时，通知订阅者。
2. Watcher：作为Observer和Compile的中间桥梁，能够订阅并收到数据的变化，之后调用相应的回调函数，进行视图的重新渲染。
3. Compile：对每个元素节点的指令和模板进行解析，根据指令模板替换数据，以及绑定相应的数据函数。

## Observer

Observer监听数据层的变化，的核心就是Object.definerProperty，这个函数内部可以实现getter和setter函数，当数据对象变化时，就会触发setter函数，此时，Oberver就要通知订阅者Watcher

## Watcher

Watcher作为Observer和Compile之间通信的桥梁，主要做的事情：
1. 在自身实例化时往属性订阅器（dep)添加自己。
2. 自身必须有一个Update()方法
3. 订阅属性的变动dep.notify(),之后调用自身的update()方法，并触发Compile的回调函数

## Compile

Compile监听视图层的变化，它所做的事情就是解析模板中的指令，将模板中的变量变成数据。之后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。

## 非响应式属性如何变成响应式属性

- 如果数据不是定义在data模板中的话，Object.defineProperty()就无法监听到数据的变化，无法进行响应式处理。
- 解决办法，VUE.set / this.$set
- Vue.set的底层原理：Object.assign(目标对象，源对象1，源对象2...)
- 