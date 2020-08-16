## 使用key的原因总结

因为Vue会复用节点，所以为了标记各个节点，使用key的唯一性进行标记，防止节点的复用造成bug。比如在v-for列表渲染以及v-if渲染中使用key。

## 列表渲染中key的作用

- 原因：设置key值，并保证其唯一性，便于VNODE进行标记，因为VNODE是惰性的，它会对节点进行复用，比如第一个节点：设置了红色，但删除第一个节点，第二个节点变成第一个节点，就会复用红色。
```
<li v-for = "(item,index) in list" :key = "item.id">
```
- 关于key的取值
  1. 尽量使用ID
  2. 最差使用index（因为index是不稳定，我们会对节点进行增删改查）
   
## 整个VDOM的使用流程（Vue）

1. 创建VNODE树
2. 使用render函数进行页面的渲染
3. 当数据或属性改变时，生成新的VNODE树
4. 使用diff算法，对新旧的VNODE树进行比较，采用布局更新的方法进行替换
5. 替换完成，在使用render函数进行页面的渲染。

## 官方文档描述

- 使用Key来管理复用的元素。因为Vue会尽可能高效的渲染元素，就会复用已经渲染过的元素，而不是从头开始渲染。
比如v-if和v-else会复用同一个元素,
```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
```
- 解决办法
```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```
