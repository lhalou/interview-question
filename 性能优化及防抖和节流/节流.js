// throttle 节流是高阶函数，作用：防止函数的高频调用
//相同的时间间隔调用一次
/*
使用场景：
    1. 鼠标的滚动事件，scroll
    2. 用户输入验证
 */
function throttle(fn,wait = 0){
  let canUse = true
  return function(){
    if(canUse){
      fn.apply(this,arguments)
      canUse = false
      setTimeout(() => {
        canUse = true
      },wait)
    }
  }
}
let throttled = throttle(() => {console.log(1)},3000)
throttled()
throttled()
throttled()
throttled()