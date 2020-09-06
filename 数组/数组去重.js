// 遍历 + indexOf 实现数组去重
function uniq(array){
  let newArray = []
  for(let i = 0; i < array.length; i++){
    if(newArray.indexOf(array[i]) === -1){
      newArray.push(array[i])
    }
  }
  return newArray
}
var array = [1,2,3,4,5,4,3,2,5,4,1,3,2]
uniq(array) //[1,2,3,4,5]

// hash实现数组去重

function uniq(array){
  let result = []
  let hash = {}
  for(var i = 0; i < array.length; i++){
    hash[array[i]] = true
  }
  for(let key in hash){
    result.push(key)
  }
  return result
}
var array = [1,2,3,4,5,4,3,2,5,4,1,3,2]
uniq(array) // ["1", "2", "3", "4", "5"]

// splice去重

function uniq(array){
  for(let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
      if(array[i] === array[j]){
        array.splice(j,1)
        j--
      }
    }
  }
  return array
}
var array = [1,2,3,4,5,4,3,2,5,4,1,3,2]
uniq(array)

//set实现数组去重

function uniq(array){
  var newArray = Array.from(new Set(array))
  return newArray
}
var array = [1,2,3,4,5,4,3,2,5,4,1,3,2]
uniq(array) // [1, 2, 3, 4, 5]

// set 加扩展运算符去重

function uniq(array){
  var newArray = [...new Set(array)]
  return newArray
}
var array = [1,2,3,4,5,4,3,2,5,4,1,3,2]
uniq(array) // [1, 2, 3, 4, 5]

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


