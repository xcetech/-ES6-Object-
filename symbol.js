'use strict'

var obj = {
    name: 'zxm',
    'my name': 'zhangxueming'
}

obj.name
obj['my name'] // 要这样调用

let name = Symbol('name')
let name2 = Symbol('name')

console.log(name === name2)   // 肯定不相等  false


