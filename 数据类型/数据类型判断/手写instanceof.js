//instanceof：内部机制判断对象的原型链上是否能找到类型的prototype
function myInstanceof(left,right){
  let prototype = right.prototype //获取类型的原型
  let left = left.__proto__ // 获取对象的原型
  while(true){ //一直判断对象原型是否等于类型原型，直到原型链的顶端null
    if(left === null || left === undefined){
      return false
    }
    if(prototype === left){
      return true
    }
    left = left.__proto__
  }
}
