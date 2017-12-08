// promise有二个静态方法
var p = new Promise(function (resolve, reject) {
    resolve('hello')
})
p.then(res => {
    console.log(res)
})


// -------------2----------

var p2 = Promise.reject('error')
p2.then(null, function (err) {  // 第一个之所以是空，因为第一个根本不会执行，这样用的很少。
    console.log(err)
})