"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborator = exports.Company = void 0;
class Company {
    constructor(name, cnpj) {
        this.colaborators = [];
        this.name = name;
        this.cnpj = cnpj;
    }
    addColaborator(colaborator) {
        this.colaborators.push(colaborator);
    }
    showColaborators() {
        for (const colaborator of this.colaborators) {
            console.log(colaborator);
        }
    }
}
exports.Company = Company;
class Colaborator {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}
exports.Colaborator = Colaborator;
const company1 = new Company('Cubic Solutions', '111.111.111/0001-11');
const colaborator1 = new Colaborator('Lucas', 'Corrêa');
const colaborator2 = new Colaborator('Vitor', 'Andrade');
const colaborator3 = new Colaborator('Jefferson', 'Rugal');
company1.addColaborator(colaborator1);
company1.addColaborator(colaborator2);
company1.addColaborator(colaborator3);
console.log(company1);
company1.showColaborators();
//# sourceMappingURL=index.js.map