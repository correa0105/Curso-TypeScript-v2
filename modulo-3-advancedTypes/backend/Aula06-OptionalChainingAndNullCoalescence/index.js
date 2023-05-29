"use strict";
const documentX = {
    title: 'Meu Titulo',
    text: 'Meu Texto',
};
console.log(documentX.date?.toDateString() ?? 'Não existe data');
console.log(undefined ?? 'É undefined');
console.log(null ?? 'É null');
console.log(false ?? 'É false');
console.log(0 ?? 'É 0');
console.log('' ?? 'É valor vazio');
//# sourceMappingURL=index.js.map