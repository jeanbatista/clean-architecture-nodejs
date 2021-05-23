const uuid = require('uuid').v4;

module.exports = class UserEntity {
    constructor({ name, email, password }, id=null) { 
        this.id = id ?? uuid();
        this.name = name;
        this.email = email;
        this.password = password;
    }
}