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


## cookie 属性

- http-only:不能通过JS访问cookie,防止XSS攻击。
- same-site：规定浏览器不能再跨域请求中携带cookie，防止CSRF攻击。他有三个值
  1. Strict，完全禁止第三方cookie，只有当前网页的URL请求与请求目标一致，才会带上cookie、
  2. Lax，稍微放宽，get请求除外。
  3. None：浏览器会在同站请求、跨站请求下继续发送 cookies，不区分大小写。
- secure：只能在协议为HTTPS的请求中携带。
- value：用于保存用户登录状态，应该将该值加密，不能使用明文的用户标识。

## cookie的使用场景

- 使用原因：因为HTTP协议是无状态的协议，在下一次请求时，不能记住请求方的信息，所以采用cookie和session记录客户端的访问状态。这样每次访问相同的页面就不需要每次都进行登录操作。
- cookie定义：cookie是一种数据存储技术，它是将一段文本保存在客户端的技术，并且可以长时间保存，当客户首次通过客户端访问服务器的时候，服务器会创建session信息，session信息以sessionID的形式存储在cookie中，返回给客户端，当下一次在发送请求时，会直接带上cookie信息，告诉服务器两个请求是否来自同一个浏览器。
- 使用场景：
  1. 会话状态管理（用户登录状态，购物车，游戏分数或其他需要记录的信息）
  2. 个性化设置（用户自定义设置，主题等）
  3. 浏览器行为追踪（如分析用户的行为）
- 替代
  cookie现在逐渐被会话存储（web storage）和indexedDB
- cookie的生命周期
  1. 会话器cookie，浏览器关闭，cookie消失。但是有的浏览器提供会话恢复功能，所以不那么靠谱
  2. 持久性cookie的声明周期取决于expire（过期时间）或有效期（man-age）决定的。
- 缺点：不安全，不可靠
  1. 浏览器不一定会保存来自服务器的cookie，可以通过设置决定是否保存cookie
  2. cookie是有生命周期的，通过expire设置。
  3. HTTP通过明文发送，容易受到攻击，所以cookie中不能存放敏感信息。
  4. cookie以文件形式存储在客户端，可以被更改。
- 设置cookie
  ```
  response.set-cookie(key,value,expires)
  ```
- 访问cookie 
  ```
  document.cookie
  ```

## localStorage与sessionStorage

- 定义：允许你访问document的源的对象的storage。存储的数据将保存在浏览器的会话中。是特定于页面的协议。localStorage 中的键值对总是以字符串的形式存储。
- 相关API
  1. localStorage.setItem() // 增加storage对象 
  2. localStorage.getItem() // 读取storage对象
  3. localStorage.removeItem() // 移除storage对象 
  4. localStorage.clear() // 清除所有localStorage
- 使用场景
  1. 可以用于保存购物车中的内容
  2. 持久化用户名
- 缺点：
  1. localstorage是同步执行，可能会阻塞UI
  2. 不能过于依赖JSON.stringify()，value尽量使用string。
  3. localStorage的作用域被限制在文档源中。单标签页：两个tab（相同域）之间不能互通； 刷新或新开 tab 是可以访问到的，关闭浏览器重新打开原先tab也可访问。
  4. sessionStorage的作用域不仅被限制在文档源，还被限定在窗口中

## cookie与web storage的区别

Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生。

## indexDB

- 定义：数据存储，使用JS操作数据。
- 访问权限：indexdb与 web storage 一致，均是在创建数据库的域名下才能访问。且不能指定访问域名。
- 数据存储特点：存储时间永久，除非用户清除数据，可以用作长效的存储。
- 性能：indexeddb查询少量数据花费差不多20MS左右。大量数据的情况下，相对耗时会变长一些，但是也就在30MS左右，也是相当给力了，10W数据+，毕竟nosql。
- 特点：异步，它的数据不是保存在表中，而是保存在对象存储空间中。 创建对象存储空间时，需要定义一个键，然后就可以添加数据。 可以使用游标在对象存储空间中查询特定的对象。 而索引则是为了提高查询速度而基于特定的属性创建的。 说明：indexDB 目前兼容性还不是很好
