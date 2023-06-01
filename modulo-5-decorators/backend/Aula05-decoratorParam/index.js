"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function decorator(classPrototype, methodName, index) {
    console.log(classPrototype, '1');
    console.log(methodName, '2');
    console.log(index, '3');
}
class People {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    method(msg) {
        return `${this.name} ${this.lastname}: ${msg}`;
    }
    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
    set fullName(value) {
        const words = value.split(/\s+/g);
        const firstName = words.shift();
        if (!firstName)
            return;
        this.name = firstName;
        this.lastname = words.join(' ');
    }
}
__decorate([
    __param(0, decorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], People.prototype, "method", null);
const people1 = new People('Lucas', 'Corrêa', 23);
const method1 = people1.method('Hello World!');
console.log(method1);
//# sourceMappingURL=index.js.map