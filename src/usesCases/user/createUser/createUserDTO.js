module.exports = class CreateUserDTO {
    constructor({ name, email, password }) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}