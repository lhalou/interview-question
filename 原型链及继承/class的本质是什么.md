## class本质

JS本身是一个动态的，不提供类class的实现。class本质是构造函数（原型对象运用的）的语法糖，本质还是一个函数.可以使用class声明一个类。class的原理依旧是原型链。
```
class person{}
person instanceof Function  // true
```

## class有__proto__属性和prototype属性

```
class B{}
class A extends B{}
A.__proto__ === B (表示继承构造函数)
A.__proto__.prototype === B.prototype (表示继承方法)
```
