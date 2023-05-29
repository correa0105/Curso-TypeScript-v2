"use strict";
const getKey = (object, key) => object[key];
const animal = {
    color: 'Blue',
    vaccine: ['Vacina 1', 'Vacina 2'],
};
const vaccine1 = getKey(animal, 'vaccine');
console.log(vaccine1);
//# sourceMappingURL=index.js.map