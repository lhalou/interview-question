function myNew(){
  let obj = {}
  let constructor = [].shift.call(arguments)
  obj.__proto__ = constructor.prototype
  let result = constructor.apply(obj,arguments)
  return typeof result==='object' ? result : obj
}
var a = function(a,b){
  this.x = a
  this.y = b
}
a.prototype.hi = 'hello'

var b = myNew(a,1,2)
console.log(b.hi) //hello
console.log(b.x)  // 1
console.log(b.y)  // 2