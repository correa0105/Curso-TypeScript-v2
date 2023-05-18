"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.body = void 0;
// Condicional
exports.body = document.querySelector('body');
if (exports.body)
    exports.body.style.background = 'red';
// Non-null assertion (!)
const body1 = document.querySelector('body');
body1.style.background = 'red';
// Type assertion
const body2 = document.querySelector('body');
body2.style.background = 'red';
//HTMLElement
const input = document.querySelector('.input');
input.value = 'Enviar';
