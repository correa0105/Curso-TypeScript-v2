"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestBuilder = exports.SubCalculator = exports.Calculator = void 0;
class Calculator {
    constructor(number) {
        this.number = number;
    }
    add(n) {
        this.number += n;
        return this;
    }
    sub(n) {
        this.number -= n;
        return this;
    }
    div(n) {
        this.number /= n;
        return this;
    }
    mult(n) {
        this.number *= n;
        return this;
    }
}
exports.Calculator = Calculator;
class SubCalculator extends Calculator {
    pow(n) {
        this.number **= n;
        return this;
    }
}
exports.SubCalculator = SubCalculator;
class RequestBuilder {
    constructor() {
        this.method = null;
        this.url = null;
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
    setUrl(url) {
        this.url = url;
        return this;
    }
    send() {
        console.log(`Enviando dados via ${this.method} para ${this.url}`);
    }
}
exports.RequestBuilder = RequestBuilder;
const calculator1 = new SubCalculator(10);
calculator1.add(5).mult(2).div(2).sub(5).pow(2);
console.log(calculator1);
const request1 = new RequestBuilder();
request1.setUrl('http://localhost:3000').setMethod('post').send();
//# sourceMappingURL=index.js.map