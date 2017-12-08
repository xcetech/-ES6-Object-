'use strict'

function asyncFun(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('not is number'))
        }
        setTimeout(function () {
            resolve(a + b)
        }, 200)
    })
}

// var resultList = []
// asyncFun(1,2)
//     .then(function (result) {
//         resultList.push(result)
//         return asyncFun(2,3)
//     })
//     .then(function (result) {
//         resultList.push(result)
//         console.log(resultList.length)
//     })
// console.log(resultList.length) // 这是是取不到值的，因为是异步会先运行这个，只有在上面输出才会出现结果。
// 像这种要异步运行多个结果的，就可以用promise.all

var p = Promise.all([asyncFun(1,2), asyncFun(2,5), asyncFun(5,10)]);
p.then(function (result) {
    console.log(result)
})

// race 只要里面有任何一个有问题，都不会执行，都会出错
var s = Promise.race([asyncFun(99999999,988999999), asyncFun('a',2), asyncFun(4343,4343)]);
s.then(result => {
    console.log(result)
})







