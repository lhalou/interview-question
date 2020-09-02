## Ajax

Ajax: 全称AsyncchronousJavaScript + XML。异步的JS和XML(现在大部分使用json代替xml:原因：更简洁，速度更快)。是web2.0的技术核心。Ajax是一种技术，由多种技术组合而成，不同的浏览器有自己的Ajax组件。使用Ajax技术，不必刷新整个页面，只需对页面局部进行更新，可以节省网络带宽，提高页面的加载速度，从而缩短用户的等待时间，改善用户体验。

## XMLHttpRequet

- Ajax主要使用XmlHttpRequet技术构建复杂，动态的网页。
- XMLHttpRequet对象用于与服务器的交互，在不刷新页面的情况下，进行特定的URL请求，获取数据。可以获取到任何类型的数据，而不仅仅是XML。甚至支持HTTP以外的协议。
- 只要readyState的属性值发生变化，就会调用readyStateChange事件。
- XMLHttpRequet.readySate属性返回一个 XMLHttpRequet代理当前所处的状态，具有四个值
  1. 0---代理被创建，但尚未调用open()方法
  2. 1---open()方法已经被调用
  3. 2---send()方法已经被调用，并且头部和状态已经可获得
  4. 3---下载中，reponseText属性已经包含部分数据
  5. 4---下载完成

### 实现一个ajax

```
let xml = new XMLHttpRequest()
xml.open('get','/xxx')
xml.onReadyStateChange = function(){
  if(xml.readyState === 4){
    if((xml.reponse.status >= 200 &&xml.reponse.status < 300) ||(xml.reponse.status === 304)){
      let data = xml.reponseText
    }else {
      console.log('获取数据失败')
    }
  }
}
xml.send()
//post请求
xml.send('username=lili&&password=123')
```


