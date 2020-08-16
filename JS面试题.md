## 原生对象与宿主对象

- 原生对象是ECMAScript规定的对象，所有内置对象都是原生对象，包括数组，时间，正则
- 宿主对象是是宿主环境比如浏览器规定的对象，用于完善ECMAScript的执行环境。比如Document、Location、Navigator。

## ajax

- 解释：ajax就是通过XMLHTTPRequest对象来向服务器发起异步请求，从服务器获取数据，之后使用JS来操作DOM最后显示在页面上。ajax是用来获取数据，而不是跨域的解决方案。
- 优点：
  1. 页面无刷新，一直与服务器通信，用户体验好
  2. 使用异步的方式与服务器进行操作，不会阻断主线程。
  3. ajax的原则是按需请求，最大程度的优化性能
- 缺点：
  1. ajax无法通过浏览器后退操作返回上一个页面
  2. 一些手机设备不能很好的支持ajax 
  3. 同步ajax会对IE产生问题，尽量使用异步
- 实现一个ajax
  ```
  let xml = new XMLHTTPRequest()
  xml.open('get','./xxx')
  xml.onreadyStateChange = function(){
    if(xml.readyState === 4){
      if((xml.status >= 200 &&xml.status < 300 ) || (xml.status === 304)){
        let data = xml.responseText
      }else {
        console.log('error')
      }
    }
  }
  xml.send()
  ```

## document.onload 与 document.ready两个事件的区别

- document.onload表示页面上所有的资源都加载完成，包括图片等文件
- document.ready表示文档结构已经加载完成（不包括图片）

## JS中如何重定向一个页面

1. location.href = url
2. location.replace = url

## 是否可以在JS中执行301重定向

JS是完全运行在浏览器的代码，301是服务器作为响应发送的响应码，所以在JS中不能执行301重定向

## 如何判断一个数组

1. Array.isArray()
2. Object.prototype.toString.call(obj) === '[object Array]'
3. array.__proto__ === Array.prototype

## window对象与document对象

window对象代表浏览器的窗口对象，document对象代表文档对象。document对象属于window对象

## evl是做什么的

将JS 代码解析成字符串并运行

## JS 的延迟加载

- JS的延迟加载有助于提高网页的加载速度
- defer：可以并行下载，但是延迟执行
- async：下载完立即执行（异步脚本）
  
## document.write与innerHTML

前者重绘这个页面，后者只会重绘部分

##  Web Worker和Web Socket？

1. web socket：在一个单独的持久连接上提供全双工、双向的通信。使用自定义的协议（ws://、wss://），同源策略对web socket不适用。
2. web worker：运行在后台的JavaScript，不影响页面的性能。
```
创建worker：var worker = new Worker(url);
向worker发送数据：worker.postMessage(data);
接收worker返回的数据：worker.onmessage
终止一个worker的执行：worker.terminate();
```

## web应用从服务器主动推送data到客户端的方式？

1. JavaScript数据推送：commet（基于http长连接的服务器推送技术）。
2. 基于web socket的推送：SSE（server-send Event）

## attribute与property的区别？

1. attribute是dom元素在文档中作为html标签拥有的属性
2. property是dom元素在js中作为对象拥有的属性。
3. 所以，对于html的标准属性来说，attribute和property是同步的，是会自动更新的。但对于自定义属性，他们不同步。

## Ajax请求的页面历史记录状态问题？

1. 通过location.hash记录状态，让浏览器记录Ajax请求时页面状态的变化。
2. 通过HTML5的history.pushstate，来实现浏览器地址栏的无刷新改变。