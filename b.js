// es5 写法

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.getClassName = function () {
    return 'User'
}

User.prototype.changName = function (name) {
    this.name = name
}

User.prototype.changAge = function (age) {
    this.age = age
}

Object.defineProperty(User.prototype, 'info', {
    get(){
        return 'name' + this.name + '| age' + this.age
    }
})

// 子类
function Manage(name, age, password) {
    User.call(this, name, age);
    this.password = password
}

// 继承静态方法
Manage.__proto__ = User

// 继承 prototype 方法
Manage.prototype = User.prototype

// 添加新方法
Manage.prototype.changePassword = function (pwd) {
    this.password = password
}



var manage = new Manage('zmx', 33, 'test')

manage.changName('zhangxueming')

console.log(manage.info)