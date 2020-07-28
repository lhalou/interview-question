//call()方法使用一个指定的this值和单独给出的一个或多个参数来调用一个函数。
Function.prototype.myCall = function(thisArg){
  var thisArg = thisArg || window
  thisArg.fn = this
  let args = [...arguments].slice(1)
  let result = thisArg.fn(...args)
  delete thisArg.fn
  return result
}

