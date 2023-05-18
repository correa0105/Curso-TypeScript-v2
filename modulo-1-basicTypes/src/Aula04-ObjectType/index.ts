const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Valor A',
  keyB: 'Valor B',
};

/* objectA.keyA = 'Outro Valor'; //Não posso alterar pois é readonly */
objectA.keyC = 'New Key';
objectA.keyD = 'New Key';

console.log(objectA);
