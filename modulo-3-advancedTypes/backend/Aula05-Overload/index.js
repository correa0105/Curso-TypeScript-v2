"use strict";
const calcArea = (form, ...args) => {
    if (form === 'quadrado') {
        const lado = args[0];
        return lado * lado;
    }
    else if (form === 'retangulo') {
        const ladoA = args[0];
        const ladoB = args[1];
        return ladoA * ladoB;
    }
    else if (form === 'circulo') {
        const raio = args[0];
        return Math.PI * raio * raio;
    }
    else {
        throw new Error('Forma geométrica inválida!');
    }
};
console.log(calcArea('quadrado', 5));
console.log(calcArea('retangulo', 4, 6));
console.log(calcArea('circulo', 3));
//# sourceMappingURL=index.js.map