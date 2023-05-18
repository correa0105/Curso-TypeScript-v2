"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result3 = exports.result2 = exports.result = void 0;
function multipliArgs(...args) {
    return args.reduce((ac, value) => ac * value, 1);
}
function concactString(...args) {
    return args.reduce((ac, value) => ac + value);
}
function toUpperCase(...args) {
    return args.map((value) => value.toUpperCase());
}
exports.result = multipliArgs(1, 2, 3);
exports.result2 = concactString('Lucas', 'Corrêa');
exports.result3 = toUpperCase('a', 'b', 'c');
console.log(exports.result);
console.log(exports.result2);
console.log(exports.result3);
