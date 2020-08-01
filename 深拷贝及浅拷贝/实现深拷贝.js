// 浅拷贝 + 递归
// Reflect.ownKeys()返回一个由目标对象自身的属性组成的数组
/*
var obj = {
  a: 1,
  b: {
    c:2,
    d:3
  }
}
let array = Reflect.ownKeys(obj)
console.log(array) // ["a", "b"]
*/
// 判断是否为对象/函数，不是就报错 typeof
//判断是对象还是数组，对象{...} /数组[...] Array.isArray()
//使用Reflect.ownKeys获取到属性，判断属性值是否为对象，是的话递归
function deepClone(obj){
  function isObject(o){
    return (typeof o === 'object' || typeof o === 'function')&& o !== null;  
  }
  if(!isObject(obj)){
    throw new Error('非对象')
  }
  let isArray = Array.isArray(obj)
  let newObj = isArray ? [...obj] : {...obj}
  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]): obj[key]
  })
  return newObj
}
let obj = {
  a: [1,2,3],
  b: {
    c: 2,
    d: 3
  }
}
let newObj = deepClone(obj)
newObj.b.c = 1
console.log(obj)
console.log(newObj)

