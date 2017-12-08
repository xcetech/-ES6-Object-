'use strict'

const User = require('./symbol-class')

let getName = Symbol('getName')

let user = new User()

user.print()

user[getName]()