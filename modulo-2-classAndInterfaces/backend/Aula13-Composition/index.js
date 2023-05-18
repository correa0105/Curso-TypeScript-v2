"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = exports.Car = void 0;
class Car {
    constructor() {
        this.engine = new Engine();
    }
    on() {
        this.engine.on();
    }
    speedUp() {
        this.engine.speedUp();
    }
    stop() {
        this.engine.stop();
    }
    off() {
        this.engine.off();
    }
}
exports.Car = Car;
class Engine {
    on() {
        console.log('Motor está ligado...');
    }
    speedUp() {
        console.log('Motor está acelerando...');
    }
    stop() {
        console.log('Motor está parado...');
    }
    off() {
        console.log('Motor está desligado...');
    }
}
exports.Engine = Engine;
const car1 = new Car();
car1.on();
car1.speedUp();
car1.stop();
car1.off();
//# sourceMappingURL=index.js.map