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




