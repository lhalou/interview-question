//ES5 组合继承

//JS本身是没有继承这一概念的，可以使用原型链实现继承.

  function Person(age){
    this.age = age
  }
  Person.prototype.run = function(){console.log('会跑')}
  function Man(age,name){
    Person.call(this,age)
    this.name = name
  }
  function temp(){}
  temp.prototype = Person.prototype
  Man.prototype = new temp()
  Man.prototype.eat = function(){console.log('会吃')}
  var man = new Man(18,'lili')
  console.log(man)
  
/*
  优点：在于构造函数可以传参，不会与父类引用属性共享，可以复用父类的函数
  缺点：调用了父类构造函数，导致子类上多了很多不需要的属性，造成内存浪费。
 */

// ES5寄生虫继承

function Person(name){
  this.name = name;
}
Person.prototype.run = function(){console.log('会跑')}
function Man(name,age){
  Person.call(this,name)
  this.age = age
}
Man.prototype = Object.create(Person.prototype,{
  constructor: {
        value: Man,
        enumerable: true,
        writable: true,
        configurable: true
    }
})
var man = new Man('lili',28)
man.run()
/*
将父类的原型赋值给子类，并且将构造函数赋值给子类，这样既解决了无用的父类属性问题，又能正确找到子类的子类的构造函数。
 */

//ES6


  class Person{
    constructor(age){
      this.age = age
    }
    run(){
      console.log('会跑')
    }
  }
  class Man extends Person{
    constructor(age,name){
      super(age)
      this.name = name
    }
    eat(){
      console.log('会吃')
    }
  }
  var man = new Man(18,'lili')
  console.log(man)




