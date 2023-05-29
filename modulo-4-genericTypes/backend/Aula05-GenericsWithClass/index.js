"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = exports.People = void 0;
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.People = People;
class Stack {
    constructor() {
        this.count = 0;
        this.elements = {};
    }
    push(element) {
        this.elements[this.count] = element;
        this.count++;
    }
    pop() {
        if (this.isEmpty())
            return undefined;
        this.count--;
        const element = this.elements[this.count];
        delete this.elements[this.count];
        return element;
    }
    isEmpty() {
        return this.count === 0;
    }
    showStack() {
        for (const key in this.elements) {
            console.log(this.elements[key]);
        }
    }
}
exports.Stack = Stack;
const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
while (!stack1.isEmpty()) {
    stack1.pop();
}
stack1.showStack();
//# sourceMappingURL=index.js.map