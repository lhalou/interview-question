## keep-alive作用

使组件实例在他们第一次被创建的时候缓存下来，保留组件的状态，避免重新渲染。也就是说当组件在进行切换的时候，使他们不会被毁，而是被缓存到内存中，并触发deactived钩子函数，当命中缓存想要重新展示的时候，触发actived钩子函数。keep-alive是vue的一个内置组件，自身不会渲染DOM，也不会出现在父组件链中。**包裹的是动态组件，会缓存不活动的组件实例，而不是销毁他们，防止组件的重复渲染**

## 基本用法

```
<keep-alive>
  <component></component>
</keep-alive>
```
- 被keep-alive包裹的组件不会重新初始化，即不会走再一次调用钩子函数

## vue-router与keep-alive结合使用，缓存页面部分组件

```
<keep-alive>
    <router-view>
        <!-- 所有路径匹配到的视图组件都会被缓存！ -->
    </router-view>
</keep-alive>
```
- 或者可以在路由的meta选项中，进行设置,渲染时使用v-if进行条件判断渲染。
```
{
  path: '/',
  name: 'List',
  component: 'List',
  meta{ 
    keepAlive: true;
    // true为缓存组件，false为不缓存组件
  }
}
//获取meta的属性值$route.meta.keepAlive
<router-view v-if="$route.meta.keepAlive" class="view"></router-view>
```

## 注意点：

1. keep-alive不可以在函数式组件中正常工作，因为它没有缓存机制
2. keep-alive先匹配包含组件组件的name字段，如果name不匹配，则匹配当前组件components中注册的事件
3. 包含在keep-alive中，但符合exclude,则不会调用actived和deactived钩子函数
4. 当include和exclude都匹配时，以exculde的优先级高

## 具体使用场景

- 在订单页面按ID查找订单，之后想返回之前的订单页面，就可以使用keep-alive

