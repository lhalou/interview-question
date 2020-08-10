
// Reflect是一个内置对象，他提供拦截JS操作的基本方法，他不是一个函数对象，因此不可以作为构造函数

let onWatch = (obj,setBind,getLogger) => {
  let handler = {
    get(target,property,receiver){
      if(typeof target[property] === 'object' ||  typeof target[property] === 'function' && target[property] !== null){
        return new Proxy(target,handler)
      }
      getLogger(target,property)
      return Reflect.get(target,property,receiver)
      //Reflect.get获取对象身上某个属性的值
    },
    set(target,property,value,receiver){
      //数组下标的更改会触发一次更新，数组长度的修改也会触发一次更新，未避免，只对私有属性的修改动作触发视图更新。
      if(Array.isArray(target)){
        if(!target.hasOwnProperty(property)) {
          setBind(value,property)
        }
      } 
      setBind(value,property)
      return Reflect.set(target,property,receiver)
      //Reflect.set将值分配给属性的函数，返回一个boolean
    }
  }
  return new Proxy(obj,handler)
}


let obj = {
  a:1,
  b: {
    name: 1
  }
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
p.b.name = 3
p.b.name

