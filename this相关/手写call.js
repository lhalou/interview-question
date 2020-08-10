//call()方法使用一个指定的this值和单独给出的一个或多个参数来调用一个函数。
Function.prototype.myCall = function(thisArg){
  if(typeof this !== 'function'){
    throw new Error('error')
  }
  var thisArg = thisArg || window // 若么有传入第一个参数，默认为window
  thisArg.fn = this // 改变this的指向，给thisArg设置一个fn属性，指向需要调用的函数
  let args = [...arguments].slice(1) // slice分离出原函数的参数
  let result = thisArg.fn(...args) // 调用原函数
  delete thisArg.fn //删除对象上的函数属性
  return result // 返回结果
}

