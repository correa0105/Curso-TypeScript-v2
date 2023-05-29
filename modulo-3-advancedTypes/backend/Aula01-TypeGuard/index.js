"use strict";
function add(a, b) {
    return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}
console.log(add(1, 5));
console.log(add('a', 'b'));
class Student {
    constructor(name) {
        this.name = name;
        this.type = 'people';
    }
}
function showName(obj) {
    switch (obj.type) {
        case 'people':
            console.log(obj.name);
            return;
        case 'animal':
            console.log('Isto é um animal');
            return;
    }
}
showName(new Student('Lucas'));
showName({ type: 'animal', color: 'red' });
//# sourceMappingURL=index.js.map