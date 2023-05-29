"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object1 = {
    name: 'Lucas',
    lastname: 'Corrêa',
    age: 23,
};
console.log(object1);
const object2 = {
    name: 'Lucas',
    lastname: 'Corrêa',
    age: 23,
};
console.log(object2);
const accountMongo = {
    _id: 'dsadaqwio3q84inda',
    name: 'Lucas',
    age: 23,
};
function mapAccount(accountMongo) {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
}
const accountApi = mapAccount(accountMongo);
console.log(accountApi);
exports.default = 1;
//# sourceMappingURL=index.js.map