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
var People_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
function classDecorator(construtor) {
    console.log('CLASSE');
    console.log(construtor);
    console.log('###');
    return class extends construtor {
    };
}
function methodDecorator(classPrototype, methodName, propertyDescriptor) {
    console.log('MÉTODO NORMAL');
    console.log(classPrototype);
    console.log(methodName);
    console.log(propertyDescriptor);
    console.log('###');
    return {
        writable: true,
        enumerable: true,
        configurable: true,
    };
}
function decoratorOfStaticMethod(classConstructor, methodName, propertyDescriptor) {
    console.log('MÉTODO ESTÁTICO');
    console.log(classConstructor);
    console.log(methodName);
    console.log(propertyDescriptor);
    console.log('###');
    return {
        enumerable: true,
        configurable: true,
    };
}
function decoratorOfParamOfMethod(classPrototype, methodName, indiceDaPropriedade) {
    console.log('PARÂMETRO DE MÉTODO');
    console.log(classPrototype);
    console.log(methodName);
    console.log(indiceDaPropriedade);
    console.log('###');
}
function decoratorOfParamOfStaticMethod(classConstructor, methodName, indiceDaPropriedade) {
    console.log('PARÂMETRO DE MÉTODO ESTÁTICO');
    console.log(classConstructor);
    console.log(methodName);
    console.log(indiceDaPropriedade);
    console.log('###');
}
function propertyDecorator(classPrototype, propertyName) {
    console.log('DECORADOR DE PROPRIEDADE');
    console.log(classPrototype);
    console.log(propertyName);
    console.log('###');
    let valorPropriedade;
    return {
        enumerable: true,
        configurable: true,
        get: () => valorPropriedade,
        set: (valor) => {
            if (typeof valor === 'string') {
                valorPropriedade = valor.split('').reverse().join('');
                return;
            }
            valorPropriedade = valor;
        },
    };
}
function staticPropertyDecorator(classConstructor, propertyName) {
    console.log('DECORADOR DE PROPRIEDADE ESTÁTICA');
    console.log(classConstructor);
    console.log(propertyName);
    console.log('###');
    return {
        enumerable: true,
        configurable: true,
    };
}
function getterAndSetterDecorator(classPrototype, propertyName, propertyDescriptor) {
    console.log('GETTER/SETTER normal');
    console.log(classPrototype);
    console.log(propertyName);
    console.log(propertyDescriptor);
    console.log('###');
    return {
        enumerable: true,
        configurable: true,
    };
}
function staticGetterAndSetterDecorator(classConstructor, propertyName, propertyDescriptor) {
    console.log('GETTER/SETTER estático');
    console.log(classConstructor);
    console.log(propertyName);
    console.log(propertyDescriptor);
    console.log('###');
    return {
        enumerable: true,
        configurable: true,
    };
}
let People = People_1 = class People {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    method(msg) {
        return `${this.name} ${this.lastname}: ${msg}`;
    }
    static staticMethod(msg) {
        return People_1.staticProperty + ' - ' + msg;
    }
    get fullName() {
        return this.name + ' ' + this.lastname;
    }
    set fullName(valor) {
        const words = valor.split(/\s+/g);
        const firstName = words.shift();
        if (!firstName)
            return;
        this.name = firstName;
        this.lastname = words.join(' ');
    }
    static get staticPropertyGetterSetter() {
        return People_1.staticProperty;
    }
    static set staticPropertyGetterSetter(value) {
        People_1.staticProperty = value;
    }
};
People.staticProperty = 'VALOR PROPRIEDADE ESTÁTICA';
__decorate([
    propertyDecorator,
    __metadata("design:type", String)
], People.prototype, "name", void 0);
__decorate([
    methodDecorator,
    __param(0, decoratorOfParamOfMethod),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], People.prototype, "method", null);
__decorate([
    getterAndSetterDecorator,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], People.prototype, "fullName", null);
__decorate([
    staticPropertyDecorator,
    __metadata("design:type", Object)
], People, "staticProperty", void 0);
__decorate([
    decoratorOfStaticMethod,
    __param(0, decoratorOfParamOfStaticMethod),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], People, "staticMethod", null);
__decorate([
    staticGetterAndSetterDecorator,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], People, "staticPropertyGetterSetter", null);
People = People_1 = __decorate([
    classDecorator,
    __metadata("design:paramtypes", [String, String, Number])
], People);
exports.People = People;
const people = new People('Lucas', 'Corrêa', 30);
people.fullName = 'João Silva Oliveira';
const method = people.method('Olá mundo!');
const staticMethod = People.staticMethod('Olá mundo!');
console.log(people);
console.log(method);
console.log(staticMethod);
console.log(People.staticProperty);
//# sourceMappingURL=index.js.map