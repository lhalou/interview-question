// c采用sort()和随机数打乱数组的顺序

function order(array){
  return array.sort(function(){
    return Math.random() - 0.5
  })
}
let array = [1,2,3,4,5,6]
order(array)