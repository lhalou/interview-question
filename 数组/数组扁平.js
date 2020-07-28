// 循环 + 递归
function flatten(array){
  let newArray = []
  for(let i = 0; i < array.length; i++){
    if(Array.isArray(array[i])){
      newArray = newArray.concat(flatten(array[i]))
    }else {
      newArray.push(array[i])
    }
  }
  return newArray
}
let arr = [1,[2,[3,[4]]]]
flatten(arr)

// reduce + 递归 
//reduce方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值

function flatten(array){
  return array.reduce(function(prev,next){
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  },[])
}
let arr = [1,[2,[3,[4]]]]
flatten(arr)


// 展开运算符 + Array.some()

function flatten(array){
  while(array.some(item =>Array.isArray(item))){
    array = [].concat(...array)
  }
  return array
}
let arr = [1,[2,[3,[4]]]]
flatten(arr)