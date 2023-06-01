"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
lodash_1.default.mul = function (array) {
    return array.reduce((acc, cv) => acc * cv, 1);
};
global.MINHAGLOBAL = 'Teste';
exports.default = lodash_1.default;
//# sourceMappingURL=module.js.map