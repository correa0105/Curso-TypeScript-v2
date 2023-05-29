"use strict";
function unionObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
const obj1 = { key1: 'value1' };
const obj2 = { key2: 'value2' };
const union = unionObjects(obj1, obj2);
console.log(union);
//# sourceMappingURL=index.js.map