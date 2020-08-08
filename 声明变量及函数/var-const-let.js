// 1. var在全局下声明的变量会被挂载到window上，let和const的不会，及let和const声明的变量不是全局属性
var a = 1;
let b = 2;
const c = 3;
console.log(window.a) // 1
console.log(window.b) // undefined
console.log(window.c) // undefined

// 2. var声明的变量存在变量提升，可以先试用在声明，let和const存在临时性死区，不可以先声明在使用

console.log(a)
var a; // undefined
console.log(b)
let b; // Error
console.log(c)
const c  // Error

/* 3. let，const可以创建块级作用域
比如在for(let i = 0; ...)循环迭代的时候，每次都可以创建一个新的变量，不会造成变量污染。
*/

// 4. let将变量的作用域限制在块内, 而var声明的变量的作用域是在整个函数内.

function varTest() {
  var x = 1;
  {
    var x = 2;  // 同样的变量!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // 不同的变量
    console.log(x);  // 2
  }
  console.log(x) // 1
}

// 5. 可以使用let来模拟闭包创建私有变量


// 6. 为什么使用let? let 可以控制变量在JS中的作用域范围，还解决了var声明提升的问题。

// 7. 在同一个函数或块级作用域中使用let重复声明同一个变量会报错。
function f(){
  let f;
  let f;
} // 报错

// 8. let声明的变量可以重复赋值

function f(){
  let f =1;
  f = 2;
  console.log(f) // 2
}
f()

// 9.const 声明的变量既不可以重复声明也不可以重复赋值。