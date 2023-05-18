"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.people = void 0;
function noReturn(...args) {
    console.log(args.join(' '));
}
exports.people = {
    name: 'Lucas',
    lastname: 'Corrêa',
    showName() {
        console.log(this.name + ' ' + this.lastname);
    },
};
noReturn('Lucas', 'Corrêa');
exports.people.showName();
