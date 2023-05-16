"use strict";
class People {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    fullName() {
        return this.name + ' ' + this.lastname;
    }
}
const peopleObj = {
    name: 'Lucas',
    lastname: 'Corrêa',
    fullName() {
        return this.name + ' ' + this.lastname;
    },
};
const people1 = new People('Lucas', 'Corrêa');
console.log(people1.fullName());
console.log(peopleObj.fullName());
//# sourceMappingURL=index.js.map