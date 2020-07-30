// 浏览器出于安全机制的考虑，只允许同源进行数据访问。
// 同源：同协议 同域名 同端口
//jsonp原理：利用script标签没有跨域的限制，将src指向要访问的地址，并且提供一个回调函数接受返回的数据。

function jsonp(url,callback,success){
  let script = document.createElement('script')
  script.src = url
  script.type = 'text/javascript'
  script.async = true
  window[callback] = function(data){
    success && success(data)
  }
  document.body.appendChild(script)
}

// CORS解决跨域 需要全端后端的配合
// 后端需要设置：Access-Control-Allow-Origin


// document.domain  降域 只适合二级域名相同的情况下


// postMessage：适用于嵌入页面中的第三方页面数据
