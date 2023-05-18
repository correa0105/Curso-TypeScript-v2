"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class People {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    fullName() {
        return this.name + ' ' + this.lastname;
    }
}
const people1 = new People('Lucas', 'Corrêa');
console.log(people1.fullName());
//# sourceMappingURL=index.js.map