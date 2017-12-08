'use strict'

// 立即执行的类
let user = new class User {
    constructor(name) {
        this.name = name
    }
}('zhangxueming')

console.log(user)


// 这种类不可能提升调用的， ReferenceError: User is not defined

var test = new User()

class User {
    constructor(name) {
        this.name = name
    }
}

console.log(test)