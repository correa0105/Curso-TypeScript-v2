"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueZ = exports.valueY = exports.valueX = void 0;
exports.valueX = 10; //eslint-disable-line
exports.valueX = 0b1010;
exports.valueY = 100;
exports.valueZ = 100; //eslint-disable-line
/* valueZ = 120; //Não é possivel pois ela é do tipo literal 100 */
const people = {
    name: 'Lucas',
    lastname: 'Corrêa',
};
/* people.name = 'Vitor'; //Não é possivel pois foi determinado como const */
function changeColor(color) {
    return color;
}
console.log(changeColor('Red'));
