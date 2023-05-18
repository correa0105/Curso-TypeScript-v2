"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeWriter = exports.Pen = exports.Tool = exports.Writer = void 0;
class Writer {
    constructor(_name) {
        this._name = _name;
        this._tool = null;
    }
    get name() {
        return this._name;
    }
    set tool(tool) {
        this._tool = tool;
    }
    get tool() {
        return this._tool;
    }
    writer() {
        if (this.tool === null) {
            console.log('Não posso escrever sem ferramenta...');
            return;
        }
        this.tool.writer();
    }
}
exports.Writer = Writer;
class Tool {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
}
exports.Tool = Tool;
class Pen extends Tool {
    writer() {
        console.log(`${this.name} está escrevendo...`);
    }
}
exports.Pen = Pen;
class TypeWriter extends Tool {
    writer() {
        console.log(`${this.name} está digitando...`);
    }
}
exports.TypeWriter = TypeWriter;
const writer1 = new Writer('Lucas');
const pen1 = new Pen('Caneta Bic');
const typeWriter1 = new TypeWriter('Writer Mak');
console.log(writer1.name);
console.log(pen1.name);
console.log(typeWriter1.name);
writer1.tool = pen1;
writer1.writer();
//# sourceMappingURL=index.js.map