// debounce 防抖是高阶函数，作用：防止函数的高频调用。
//原理：wait毫秒内不管触发多少次，只执行最后一次
/*使用场景：
    1. 鼠标点击事件，最后一次点击才生效
    2. input输入框输入内容，提示信息
    3. ajax请求合并，防止重复发同一个请求
    4. 重新计算样式和布局，可以使用防抖也可以使用节流
*/
function debounce(fn,wait = 0){
  let timerId;
  return function(){
    const _this = this
    if(timerId){window.clearTimeout(timerId)}
    timerId = setTimeout(() => {
      fn.apply(_this,arguments)
      timerId = null
    },wait)       
  } 
} 
var debounced = debounce(()=>{console.log(1)},2000)
debounced()
debounced()
//多次调用，只打印出一个1。

