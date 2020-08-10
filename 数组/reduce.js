// 作用：

// 求和  普通写法和reduce写法

let a = [1,2,3]
let sum = 0
for(let i = 0; i< a.length; i++){
  sum += a[i]
}
console.log(sum) // 6

let a = [1,2,3]
a.reduce((acc,current) => acc+current,0) // 6 其中，acc的初始值是0

// reduce 实现一个map函数
let a = [1,2,3]
a.map(v => v*2)
a.reduce((acc,current) => {
  acc.push(current * 2)
  return acc // 返回值一定要有
},[])

// reduce实现数组扁平化

function flatten(array){
  return array.reduce((acc,current) =>{
    return acc.concat(Array.isArray(current) ? flatten(current) : current)
  },[])
}
let a = [1,2,[3,[4,[5]]]]
console.log(flatten(a))

// 计算数组中元素的个数

let array = ['nihao','zaijian','shanghai','nihao','beijing','shanghai','nihao']
function count(array){
  return array.reduce((acc,current) => {
    if(current in acc){
      acc[current] ++
    }else {
      acc[current] = 1
    }
    return acc
  },{})
}
count(array) // {nihao: 3, zaijian: 1, shanghai: 2, beijing: 1}

// 按属性对object分类

let people = [
  {name: 'lili',age: 20},
  {name: 'qq',age: 21},
  {name: 'qaaa',age: 20}
]
function groupBy(obj,property){
  return obj.reduce((acc,current) => {
    let key = current[property]
    if(!acc[key]){
      acc[key] = []
    }
    acc[key].push(current)
    return acc
},{})
}
groupBy(people,'age') // {20: Array(2), 21: Array(1)}

// reduce数组去重

function uniq(array){
  return array.sort().reduce((acc,current) => {
    if(acc.length === 0 || acc[acc.length-1] !== current){
      acc.push(current)
    }
    return acc
  },[])
}
let array = [1,2,3,4,5,3,2,4,5,1,5,3,6,7,2]
uniq(array)