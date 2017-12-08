'use strict'

class User{
    constructor(name, password){
        this.name = name
        this.password = password
    }

    validatePassword(cb){
        let password = this.password
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if(password === '123'){
                    resolve('password success')
                } else {
                    reject('password not is 123')
                }
            })
        })
    }

    validateName(cb){
        let name = this.name
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if(name === 'leo'){
                    resolve('success')
                } else {
                    reject('error')
                }
            })
        })
    }
}

const user = new User('leo', '1235')
user.validateName()
    .then(function (result) {
        throw new Error('first error')
    }, function (err) {
        console.log('second error')
    })
    .catch(function (error) {
        console.log(error)
        return user.validatePassword()
    })
    .then(function (result) {
        console.log(result)
    },function (err) {
        console.log('validate password error 1')
        throw new Error('xxx')
    })
    .catch(function (err) {
        console.log('validate password error 2')
    })




