const clientData: readonly [number, string] = [1, 'Lucas'];

/* clientData[1] = 120; //Não permite mudar pois foi definido como String */
/* clientData.pop(); //Não permite mudar pois é readonly */

//Outra forma
const clientData2: ReadonlyArray<string> = [
  'Lucas',
  'Corrêa',
];

console.log(clientData);
console.log(clientData2);
