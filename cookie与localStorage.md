## cookie 与 localStorage

- cookie可以被发送到服务器。localStorage是只读的。只能存储在浏览器。
- cookie可以设置过期时间。localStorage一般不会过期。
- cookie的大小一般是4KB,localStorage可达5MB。

## localStorage 与 sessionStorage

- localStorage 一般不会过期，除非手动删除
- sessionStorage会话结束就过期了。

## cookie 与 session

- session是存储在服务器文件中，cookie存储在浏览器。
- 服务端创建的session信息，可以以sessionID的形式存储在cookie中一起发送到浏览器。

## service worker

service worker是运行在浏览器背后的独立线程。本质上可以充当web应用程序与浏览器之间的代理服务器，也可在网络可用时作为浏览器和网络间的代理。目前这个技术用来做缓存文件，提高首屏速度，此技术还可以拦截网络请求。使用service worker传输协议必须是HTTPS协议。
实现缓存功能分为三个步骤：
1. 首先注册service worker
2. 监听install事件后就可以缓存需要的文件
3. 可以通过**拦截请求的方式(fetch)**查询是否存在缓存，如果存在直接读取缓存文件。否则请求数据