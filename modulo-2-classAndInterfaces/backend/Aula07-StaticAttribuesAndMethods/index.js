"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
class People {
    constructor(name, lastname, age, cpf) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.cpf = cpf;
    }
    anyMethod() {
        console.log(People.ageDefault, People.cpfDefault);
    }
    static cretePeople(name, lastname) {
        return new People(name, lastname, People.ageDefault, People.cpfDefault);
    }
}
People.ageDefault = 18;
People.cpfDefault = '111.111.111-11';
exports.People = People;
const people1 = new People('Lucas', 'Corrêa', 23, '000.000.000-13');
const people2 = People.cretePeople('Lucas', 'Corrêa');
people1.cpf = '001.000.000-01';
console.log(people1.cpf);
console.log(people2);
people2.anyMethod();
console.log(People.ageDefault, People.cpfDefault);
//# sourceMappingURL=index.js.map