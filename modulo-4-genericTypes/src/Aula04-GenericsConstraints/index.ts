type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (object, key) => object[key];

const animal = {
  color: 'Blue',
  vaccine: ['Vacina 1', 'Vacina 2'],
};

const vaccine1 = getKey(animal, 'vaccine');
console.log(vaccine1);
