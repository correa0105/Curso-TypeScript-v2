"use strict";
let x;
if (typeof x === 'undefined')
    x = 20;
console.log(x * 2);
function createPerson(firstname, lastname) {
    return { firstname, lastname };
}
function squareOf(x) {
    if (typeof x === 'number')
        return x * x;
    return null;
}
const squareOfToNumber = squareOf(2);
if (typeof squareOfToNumber === null) {
    console.log('Conta inválida');
}
else {
    console.log(squareOfToNumber);
}
