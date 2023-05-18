"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPreferedColor = void 0;
const people = {
    name: 'Lucas',
    age: 23,
    salary: 3200,
};
function setPreferedColor(people, color) {
    return { ...people, preferedColor: color };
}
exports.setPreferedColor = setPreferedColor;
console.log(setPreferedColor(people, 'Blue'));
