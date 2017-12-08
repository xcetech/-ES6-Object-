'use strict'

let getName = Symbol('getName')

module.exports = class User{
    [getName](){
        return 'zhangxueming'
    }

    print() {
        console.log(this[getName]())
    }
}