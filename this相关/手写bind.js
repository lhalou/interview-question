/*
  bind方法创建一个新函数，当bind()被调用时，这个新函数的this被指定为bind()的第一个参数。而其余参数作为新函数的参数，
  供调用时使用
*/
Function.prototype.myBind = function(thisArg){
  let fn = this
  let args1 = Array.prototype.slice.call(arguments,1)
  if(typeof fn !== 'function') return
  function resultFn(){
    let args2 = Array.prototype.slice.call(arguments,0)
    return fn.apply(thisArg,args1.concat(args2))
  }
  resultFn.prototype = fn.prototype
  return resultFn
}
