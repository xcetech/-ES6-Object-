'use strict'

class UserGroup {

    constructor(users){
        /*
        users: {'leo': '15800476227' ,'xiaomi': '17621158252'}
         */
        // json
        this.users = users
    }

    [Symbol.iterator](){

        let i = 0
        let self = this
        const names  =  Object.keys(this.users)
        const length = names.length

        return {
            next: function () {
                let name = names[i++]
                let qq = self.users[name]
                return {value: {name, qq}, done: i >= length }
            }
        }
    }
}

let group = new UserGroup( {'leo': '15800476227' ,'xiaomi': '17621158252'} )
for(let user of group){
    console.log(user)
}

let s = Object.keys( {'leo': '15800476227' ,'xiaomi': '17621158252'} )
console.log(s)