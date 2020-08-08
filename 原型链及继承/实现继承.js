//  ES5继承方式：实质是先创造子类的实例对象this， 然后再将父类的方法添加到this上面
//ES5 组合继承

//JS本身是没有继承这一概念的，可以使用原型链实现继承.

  function Person(age){
    this.age = age
  }
  Person.prototype.run = function(){console.log('会跑')}
  function Man(age,name){
    Person.call(this,age) //在子类的构造函数中使用call继承了父类的属性
    this.name = name
  }
  Man.prototype = new Person()  // 改变子类的原型来继承父类的函数
  Man.prototype.eat = function(){console.log('会吃')}
  var man = new Man(18,'lili')
  console.log(man)
  
/*
  优点：在于构造函数可以传参，不会与父类引用属性共享，可以复用父类的函数
  缺点：在继承父类函数的时候调用了父类构造函数，导致子类上多了很多不需要的属性，造成内存浪费。
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
Man.prototype = Object.create(Person.prototype,{ // 实现继承的重点：将父类的原型赋值给子类
  constructor: {
        value: Man, // 并且将构造函数设置为子类
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

// ES6的继承机制：实质是先创造父类的实例对象this（ 所以必须先调用super方法）， 然后再用子类的构造函数修改this。
//ES6 class是使用关键字extends实现继承的。


  class Person{
    constructor(age){ // constructor指向构造函数本身
      this.age = age
    }
    run(){
      console.log('会跑')
    }
  } 
  //Man类可以继承Person类所有的属性和方法。
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

/*
class实现继承的核心在于使用extends表明继承自哪个父类，并且在子类构造函数中必须调用super，
 */

/*
    super的作用
  super在这里相当于Person.call(this,age),代表父类的构造函数，用来创建父类的this
  子类必须在constructor方法中调用super方法，否则新建实例时会报错，这是因为子类没有自己的this对象，而是继承父类的
  this对象对象，然后对其进行加工，如果不调用super方法，子类就得不到this对象。也就是说，只有调用了super方法，
  才能使用this关键字.


 */

