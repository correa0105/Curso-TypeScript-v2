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
let Animal = class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
};
Animal = __decorate([
    decoratorAnimal,
    __metadata("design:paramtypes", [String, String])
], Animal);
function decoratorAnimal(target) {
    return class extends target {
        constructor(...args) {
            super(...args);
            this.name = this.reverseString(args[0]);
            this.color = this.reverseString(args[1]);
        }
        reverseString(string) {
            return string.split('').reverse().join('');
        }
    };
}
const animal1 = new Animal('Zebra', 'Branca');
console.log(animal1);
//# sourceMappingURL=index.js.map