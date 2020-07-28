//ES5

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
