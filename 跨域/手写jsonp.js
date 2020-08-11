
/*
jsonp原理：利用script标签没有跨域的限制，将src指向要访问的地址，并且提供一个回调函数接受返回的数据。兼容性不错，
但是只接受get请求。兼容性好，IE支持.
*/

function jsonp(url,callback,success){
  let script = document.createElement('script')
  script.src = url
  script.type = 'text/javascript'
  script.async = true // script标签添加async属性，表示JS文件下载和解析不会阻塞渲染。
  window[callback] = function(data){
    success && success(data)
  }
  document.body.appendChild(script)
}






