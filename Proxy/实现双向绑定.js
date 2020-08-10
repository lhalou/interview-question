// Reflect是一个内置对象，他提供拦截JS操作的基本方法，他不是一个函数对象，因此不可以作为构造函数

let onWatch = (obj,setBind,getLogger) => {
  let handler = {
    get(target,property,receiver){
      if(typeof target[property] === 'object' ||  typeof target[property] === 'function' && target[property !== null]){
        return new Proxy(target,handler)
      }
      getLogger(target,property)
      return Reflect.get(target,property,receiver)
      //Reflect.get获取对象身上某个属性的值
    },
    set(target,property,value,receiver){
      setBind(value,property)
      return Reflect.set(target,property,receiver)
      //Reflect.set将值分配给属性的函数，返回一个boolean
    }
  }
  return new Proxy(obj,handler)
}

let obj = {
  a:1
}
let p = onWatch(obj,
(v,property) => {
  console.log(`监听到属性${property}改变为${v}`)
},
(target,property) => {
  console.log(`'${property}' = ${target[property]}`)
}
)
p.a = 2

p.a