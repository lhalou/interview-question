# EventLoop

## JavaScript单线程及非阻塞

JavaScript是单线程及非阻塞的脚本语言。单线程指的是只有一个主线程执行任务，非阻塞是指当JavaScript遇到异步任务的时候，主线程会将任务挂起，当异步任务返回结果的时候，再根据一定的规则去执行相应的回调函数。

## JS会阻塞UI渲染的原因

JS会操作DOM，如果JS操作DOM和UI渲染同时进行的话，可能会导致不能安全正确的渲染。

## 执行栈：

存储函数调用的栈结构。递归调用时，就当函数调用放在栈里，但一旦栈的空间放满了而没有释放的话，就容易出现爆战的问题。

## EventLoop（事件循环）

JS具有一个执行栈，JS执行同步代码的时候，是主线程一行一行执行代码的，当遇到异步代码的时候，主线程会将异步代码挂起，继续执行同步代码，异步代码执行完毕后，浏览器会将异步代码的执行回调加入到与当前栈（执行栈）不同的另一个队列（事件队列），当主线程执行完同步代码之后，检查事件队列是否有事件需要执行，如果有的话就把这个异步事件回调放入到执行栈中，像执行同步代码一样执行，如此循环，这个过程就称为事件循环机制（EventLoop）。

## 浏览器中的微任务（马上）（microtask），宏任务（一会）（macrotask）

异步任务根据其执行的优先级不同，分为微任务（microtask）和宏任务（macrotask）。
- 微任务：.then()是微任务 , new MutaionObserver(), process.nextTick()（new Promise是立即执行的）
- 宏任务: setTimeout(), setInterval(), 主代码块(script)
- 事件队列：异步返回的结果回调，会根据异步任务的不同存在宏任务队列和微任务队列中，当执行栈为空的时候，主线程会先去查找微任务队列是否有事件,如果有，就取出事件加入到执行栈中,直到微任务队列为空，再去查找宏任务队列，如果微任务队列没有事件，直接去查找宏任务队列，进行事件处理。
- 当当前执行栈执行完毕，会立即处理所有微任务队列中的事件，然后再去宏任务队列中处理事件，同一事件机制中，微任务一定在宏任务之前处理。
- 微任务一定先于宏任务处理？
  错，主代码块script一定先执行，script属于宏任务。同一事件机制中，微任务先于宏任务。
- 浏览器的事件循环机制存在V8引擎当中。

## 代码

```
setTimeout(function () {
    console.log(1);
});

new Promise(function(resolve,reject){
    console.log(2)
    resolve(3)
}).then(function(val){
    console.log(val);
})
```
- resolve()指明.then()函数是否要加入事件队列。.then()才是异步函数。
- promise本身是同步的，其内部的then指定的回调函数才是异步。
- new Promise是立即执行的，所以先打印出2，resolve（3）表示console.log(val)加入微任务队列，setTimeout()加入宏任务队列，当执行完new Promise，先查看微任务，所以打印出3，再去查看宏任务，最后打印出1.结果 2 3 1

## node环境下的事件循环机制

node事件循环机制存在libuv引擎当中，其中包括6个阶段。他们会按照顺序反复运行。每当进入一个阶段的时候，就会从对应的回调队列中取出函数去执行。当队列为空或者执行的回调函数数量到达系统设定的阈值，就会进入下一个阶段。与浏览器是完全不同的。
![node环境下时间循环阶段图](https://github.com/lhalou/interview-question/blob/master/images/node%E7%8E%AF%E5%A2%83%E4%B8%8B%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E9%98%B6%E6%AE%B5%E5%9B%BE.PNG)
- timers阶段：setTimeout(),setInterval()
- poll阶段：进入
- check阶段：setImmediate()
- process.nextTick():当前事件队列结束，进入下一个队列之前执行，他不属于任何一个阶段。
- 一般情况下，setImmediate()一定先于setTimeout()先执行，但是也不一定。当他们出于同一事件机制中，setImmediate()的优先级是高于setTimeout()。也就是说看是先开启eventloop进入poll阶段，还是先执行JS代码进入timers阶段。先进入poll阶段，那接下来执行check阶段，setImmediate()一定先于setTimeout()先执行，先执行JS代码，那么先进入timers阶段，setTimeout()一定先于setImmediate()先执行

## 代码

```
const fs = require('fs');

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setImmediate(() => {
        console.log('immediate');
    });
});
```
- 以上代码在同一个事件机制中，那么先进入poll，在进入check，在进入timers,所以打印顺序 immediate timeout

## 总结

```
console.log('1');
async function async1() {
    console.log('2');
    await async2();
    console.log('3');
}
async function async2() {
    console.log('4');
}

process.nextTick(function() {
    console.log('5');
})

setTimeout(function() {
    console.log('6');
    process.nextTick(function() {
        console.log('7');
    })
    new Promise(function(resolve) {
        console.log('8');
        resolve();
    }).then(function() {
        console.log('9')
    })
})

async1();

new Promise(function(resolve) {
    console.log('10');
    resolve();
}).then(function() {
    console.log('11');
});
console.log('12');
```
答案： 1 2 4 10 12 5 3 11 6 8 7 9 

  





  
