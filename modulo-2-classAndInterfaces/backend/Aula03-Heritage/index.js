"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Student = exports.People = void 0;
class People {
    constructor(name, lastname, age, cpf) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.cpf = cpf;
    }
    getAge() {
        return this.age;
    }
    getCpf() {
        return this.cpf;
    }
    getFullName() {
        return this.name + '' + this.lastname;
    }
}
exports.People = People;
class Student extends People {
    getFullName() {
        return 'Isto vem do aluno: ' + this.name + '' + this.lastname;
    }
}
exports.Student = Student;
class Client extends People {
    getFullName() {
        return 'Isto vem do cliente: ' + this.name + '' + this.lastname;
    }
}
exports.Client = Client;
const people1 = new People('Vitor', 'Silevira', 21, '000.000.000-00');
const student1 = new Student('Lucas', 'Corrêa', 23, '000.000.000-01');
const client1 = new Client('Lucas', 'Corrêa', 23, '000.000.000-02');
console.log(people1);
console.log(student1.getFullName());
console.log(client1.getFullName());
//# sourceMappingURL=index.js.map