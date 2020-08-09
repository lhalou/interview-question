# 模块化

## 为什么使用模块化

web应用越来越强大及复杂，代码也越来越冗余，甚至有一些功能重复的代码，依旧需要再写一次。为了解决代码命名冲突，提高代码的可复用性及可维护性，ES2015(ES6)在2015年发布的时候，引入了对模块的原生支持。

## 模块化开发。

模块化开发是将JS程序拆分为可按需导入的单独模块的机制，是一种开发思想。模块可以看成是为了完成某一功能的程序或子程序，并且是可以被复用及替换的，系统代码可以是由各个模块组合而成。

# 如何实现模块化

## 立即执行函数

在早起，可以使用立即执行函数创建函数作用域解决命名冲突及污染全局变量的问题
```
!function f(){
  //内部的变量都不会污染全局变量
}()
```

## CommonJS

- CommonJS的一个模块就是一个文件，通过执行文件来加载模块。
- CommonJS规定，在每个模块内部有一个module变量，是一个对象，用来表示当前模块。内部有exports属性，是对外的接口。加载某个模块，其实就是加载该模块的module.exports
- require命令：第一次加载该脚本时，执行整个脚本，然后在内存中生成一个对象。（第一次加载才执行，有缓存）
  ```
  // a.js
  module.exports = {
    a: 1
  }
  // 引入模块
  var b = require('a.js')
  b.a // 使用
  ```
- 在node.js中，模块化也是采用CommonJS,node为每个模块提供了一个exports变量，用来指向module.exports
  ```
  var exports = module.exports
  //也就是说exports和module.exports指向同一块内存地址，不能对exports赋值，否则会改变内存地址指向。
  ```
- CommonJS特点：
  1. 所有代码都运行在块级作用域，不会污染全局变量。
  2. 模块可以多次加载，但是这会在第一次加载时执行，运行结果会被缓存，再一次加载，读取的就是缓存内容，也就是说CommonJS是按值导入的，导出文件改变，并不影响之前的导入，除非清空缓存，重新导入。
  3. 模块加载顺序，按照其在代码中出现的顺序。
  4. CommonJ是同步加载，用于服务器端(不适用于浏览器)，所有文件都在本地，主线程对其影响不大。
  5. CommonJS支持动态导入，require(${path}/xx.js)

## AMD

- AMD:Asynchronous Module Definition,异步模块定义。采用异步的方式加载模块，模块加载的过程中，不会影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等待加载完成之后，回调函数才会被执行。
- define(id?,dependenics?,factory)
  1. id：模块名称，或者模块加载器请求的指定脚本的名字；
  2. dependencies：是个定义中模块所依赖模块的数组，默认为 [“require”, “exports”, “module”]，举个例子比较好理解，当我们创建一个名为 “alpha” 的模块，使用了require，exports，和名为 “beta” 的模块，需要如下书写（示例1）；
  3. factory：为模块初始化要执行的函数或对象。如果为函数，它应该只被执行一次。如果是对象，此对象应该为模块的输出值；
- require([module],callback)
  1. 第一个数组为要加载的模块，第二个参数为回调函数：

## CMD

- Common Module Definition，是Sea.js所推广的一个模块化方案的输出，建议define时值传入factory一个参数
- 与AMD的区别：
  1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
  2. CMD 推崇依赖就近，AMD 推崇依赖前置。
   ```
    // AMD

    definie(['./a','./b'],function(a,b){
      //加载模块完毕可以使用
      a.do()
      b.do()
    })

    // CMD

    define(function(require,exports,module){
      //加载模块
      //可以把require写在函数体的任意地方实现延迟加载
      var a = require('./a')
      a.doSomething()
    })
   ```

## UMD

- UMD:Universal Module Definition，通用模块规范，可以进行判断使用哪一种模块。

## ES Module

- ES Module在编译时就能确定模块之间的依赖关系，以及输入和输出变量。
- Module模块化由export和import组成
- export命令用于规定模块的对外接口,导出
- import命令用于输入其他模块提供的功能，导入
- ES Module是采用响应式方式导入导出的，即导出文件改变，导入一定变。
- 它主要采用异步导入方式，用于浏览器，需要下载文件。
  ```
  // a.js 导出
  export function a(){}
  // 导入
  import xxx from './a.js'
  ```
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。


