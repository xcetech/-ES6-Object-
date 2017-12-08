
// 异步处理
function asyncFun(a, b, cb) {
    setTimeout(function () {
        cb(a + b)
    }, 200)
}

asyncFun(3, 2, function (result) {
    console.log(result)
})    // 由于是异步执行，所以会先输出2，再输出5。

console.log(2)

asyncFun(3, 2, function (result) {
    if(result > 2){
        asyncFun(result, 2, function (result) {
            if(result > 4){
                asyncFun(result, 2, function (result) {
                    console.log('ok')
                })
            }
        })
    }
})    //  这样套几层一是不好维护代码不规范，二是容易出错。 先输出2 再5 再 OK 所以就出现了Promise

function asyncFun(a, b) {
    return new Promise(function (resolve, reject) {
        if(typeof a !== 'number' || typeof b !== 'number'){
            reject(new Error('not is number'))
        }
        setTimeout(function () {
            resolve(a + b)
        }, 200)
    })
}

asyncFun(1,'a')
    .then(function (res) {
        if(res > 2){
            return asyncFun(res, 2)
        }
    })
    .catch(function (error) {
        console.log('first + ' + error)
    })
    .then(function (res) {
        if(res > 4){
            console.log(res)
        }
    })
    .catch(function (error) {
        console.log('second + ' + error)
    })