## axios

[axios中文说明](https://www.kancloud.cn/yunye/axios/234845)
- axios是一个基于promise的HTTP库，可以用于浏览器和node。
- 特点
  1. 从浏览器中创建XMLHttpRequests
  2. 从node.js中创建HTTP请求
  3. 支持Promise API
  4. 拦截请求和响应
  5. 转换请求数据和响应数据
  6. 取消请求
  7. 自动转换JSON数据
  8. 客户端支持防御XSRF

## 发送请求

```
1. get
axios.get('/xxx').then().catch()
2. post
axios.post('/xxx',{

}).then().catch()
```

## 并行发送多个请求axios.all + axios.spread

```
axios.all([getUserCount(),getUserPromise()])
.then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }))
```

## 可以通过像axios传递相关配置来发送请求,只有 url 是必需的。如果没有指定 method，请求将默认使用 get 方法。

```
axios(/*相关配置*/)
```

## 可以使用自定义创建一个axios实例axios.create

```
var instance = axios.create()
```

## 拦截器：请求或响应会在then或catch前处理他们

```
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
//取消拦截
var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

#### 使用 cancel token 取消请求

#### axios依赖原生的ES6 Promise实现而被支持