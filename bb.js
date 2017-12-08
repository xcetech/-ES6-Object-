'use strict'

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
class User {
    // 构造方法
    constructor(name, age){
        this.name = name
        this.age = age
    }

    static getClassName(){
        return 'User'
    }

    changeName(name){
        this.name = name
    }

    changeAge(name){
        this.age = age
    }

    get info(){
        return 'name' + this.name + '| age' + this.age
    }
}

class Manage extends User{
    constructor(name, age, password){
        super(name, age)
        this.password = password
    }

    changePassword(pwd){
        this.password = password
    }

    get info(){
        return super.info + '--- new' // 这里输出主要用于区别是继承类的输出，而不是基类的输出。做个区分而已。
        // var info = super.info
        // console.log(info)
        // return info + '---new'
    }

}

// console.log(typeof User, typeof Manage)
//
var manage = new Manage('zmx', 33, 'test')

manage.changeName('zhangxueming')

console.log(manage.info)

class a extends User {
  //  如果这里继承一个类，但是不写的话。运行也是OK的。相当于默认自动加入下面一段。
    constructor(...arg){
        super(...arg)
    }
}

var me = new a('leo', '32')

console.log(me.age)



