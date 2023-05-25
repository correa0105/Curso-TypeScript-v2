"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
class People {
    constructor(name, lastname, age, _cpf) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this._cpf = _cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf.replace(/\D/g, '');
    }
}
exports.People = People;
const people1 = new People('Lucas', 'Corrêa', 23, '000.000.000-13');
console.log(people1.cpf);
//# sourceMappingURL=index.js.map