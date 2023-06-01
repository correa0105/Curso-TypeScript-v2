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
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
function decorator(classPrototype, nameProperty) {
    let propertyValue;
    return {
        get: () => propertyValue,
        set: (value) => {
            if (typeof value === 'string') {
                propertyValue = value.split('').reverse().join('');
                return;
            }
            propertyValue = value;
        },
    };
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
    decorator,
    __metadata("design:type", String)
], People.prototype, "name", void 0);
__decorate([
    decorator,
    __metadata("design:type", String)
], People.prototype, "lastname", void 0);
exports.People = People;
const people1 = new People('Lucas', 'Corrêa', 23);
const method1 = people1.method('Hello World!');
console.log(method1);
//# sourceMappingURL=index.js.map