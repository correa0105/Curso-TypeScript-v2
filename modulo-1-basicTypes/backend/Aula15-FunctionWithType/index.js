"use strict";
function mapStrings(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callbackfn(array[i]));
    }
    return newArray;
}
const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => {
    return item.toUpperCase();
});
console.log(abcMapped);
