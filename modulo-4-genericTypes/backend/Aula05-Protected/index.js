"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborator = exports.CubicSolutions = exports.Company = void 0;
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
class CubicSolutions extends Company {
    constructor() {
        super('Cubic Solutions', '000.000.000/0001-00');
    }
    popColaborator() {
        const colaborator = this.colaborators.pop();
        if (colaborator)
            return colaborator;
        return null;
    }
}
exports.CubicSolutions = CubicSolutions;
class Colaborator {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}
exports.Colaborator = Colaborator;
const company1 = new CubicSolutions();
const colaborator1 = new Colaborator('Lucas', 'Corrêa');
const colaborator2 = new Colaborator('Vitor', 'Andrade');
const colaborator3 = new Colaborator('Jefferson', 'Rugal');
company1.addColaborator(colaborator1);
company1.addColaborator(colaborator2);
company1.addColaborator(colaborator3);
const colabRemoved = company1.popColaborator();
console.log(colabRemoved);
console.log(company1);
//# sourceMappingURL=index.js.map