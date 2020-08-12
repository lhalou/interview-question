## XSS

- 定义：XSS，跨站脚本攻击，是代码注入攻击的一种。XSS攻击利用的是浏览器对服务器返回数据的信任。
- 分类：
  1. 持久型：攻击代码被服务器写入到数据库，攻击影响大。
  2. 非持久型：通过修改URL参数的方式加入攻击代码，诱导用户访问连接从而进行攻击。
- 防御方法
  1. 转义字符：转义尖括号，引号，斜杠等字符
  2. 对于富文本涞水，采用白名单过滤法，她是基于JS-XSS。
  3. CSP(内容安全策略)
  4. http-only:js不能操作cookie，可以减少XSS
  
## CSP

- CSP（内容安全策略）是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本（XSS）和数据注入攻击等。一个CSP兼容的浏览器将会仅执行从白名单获取到的脚本文件，忽略所有其他的脚本。
- 定义：CSP本质是建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行，只需要配置规则，如何拦截是浏览器自己实现的。
- 开启CSP的方法
  1. HTTP header中设置：Content-Security-Policy
  2. 设置meta标签的方式<meta http-equiv = "Content-Security-Policy">

- 只允许加载本站资源
  ```
  Content-Security-Police: default-src 'self'
  ```
-  只允许加载HTTPS协议的图片
  ```
  Content-Security-Police: img-src https://*
  ```
- 允许加载任何来源的框架
  ```
  Content-Security-Policy: child-src 'none'
  ```
