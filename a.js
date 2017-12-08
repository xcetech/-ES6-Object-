'use strict'// 加上这句话意思就是按标准的ES6执行。否则就是ES5

// const a = 12;  // 不可变的常量
// a = 13;

const a = {
    name: 'leo'
}

a.name = 'zxm'
a.email = 'a@qq.com'

Object.freeze(a)   // 彻底冻结它，就是不能对它做更改。

a.name = 'user'  // 再更改它ES6就会抛出异常，ES5，虽然不报错，但是也一样不能改。

console.log(a)




/*{
    var a = 12;
    let b = 15;

    console.log(b);
}
console.log(a, b);  //这样会显示  ReferenceError: b is not defined， 这样输出没问题

console.log(a);
*/

// 泄密
// for( var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);   //  这样的话 i的值是最后一个值。 5  输出是 0 1 2 3 4 到最后为什么是5呢？？？？？？？？？？

// 提升
// function f() {
//     console.log(a);
//     var a = 11;    这里如果用var 就是 undefined，因为相当于 var a, console.log(a), a = 11; 先输出再赋值 如果用 let 就会 显示  ReferenceError: b is not defined
// }
// f();

// var a = 12;
//
// function f() {
//     console.log(a);
//     let a;
// }
//
// f(); // 显示  ReferenceError: b is not defined  如果里面有a, 外面的var a 就没有用了，就失效了。

// {
//     let a;
//     var a;
// }();   // SyntaxError: Unexpected token )

// 代替立即执行匿名函数
// var config = (function () {
//     var config = []
//     config.push(1)
//     config.push(2)
//     config.push(5)
//     return config
// })()
//
// console.log(config)  // [ 1, 2, 5 ]

// 函数不被提升  ES6应该输出1  ES5应该输出2
// function a() {
//     console.log(1);
// }
//
// function f() {
//     a();
//     if(false){
//         function a() { console.log(2); }
//     }
// }
//
// f();

// var arr = [];
// function f() {
//     for(var i=0; i<5; i++){
//         arr.push((function () {
//             return function () {
//                 console.log(i)
//             }
//         })(i));
//     }
// }
// f()
//
// arr[2]()

