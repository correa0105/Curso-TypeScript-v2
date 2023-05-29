"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFilter = void 0;
function myFilter(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
exports.myFilter = myFilter;
const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayOriginal.filter((value) => value < 5));
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myFilter(array, (value) => value < 5));
//# sourceMappingURL=index.js.map