//Encadeamento Opcional (?) e Operador de Coalescência Nula (??)

type DocumentX = {
  title: string;
  text: string;
  date?: Date;
};

const documentX: DocumentX = {
  title: 'Meu Titulo',
  text: 'Meu Texto',
  /* date: new Date(), */
};

console.log(documentX.date?.toDateString() ?? 'Não existe data');
console.log(undefined ?? 'É undefined');
console.log(null ?? 'É null');
console.log(false ?? 'É false');
console.log(0 ?? 'É 0');
console.log('' ?? 'É valor vazio');

//RETORNA APENAS NÃO VALORES (NULL E UNDEFINED)
