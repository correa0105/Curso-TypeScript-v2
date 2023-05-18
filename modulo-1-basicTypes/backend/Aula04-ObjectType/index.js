"use strict";
const objectA = {
    keyA: 'Valor A',
    keyB: 'Valor B',
};
/* objectA.keyA = 'Outro Valor'; //Não posso alterar pois é readonly */
objectA.keyC = 'New Key';
objectA.keyD = 'New Key';
console.log(objectA);
