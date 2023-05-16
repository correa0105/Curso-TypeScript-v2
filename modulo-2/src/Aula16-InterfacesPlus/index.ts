export interface People {
  name: string;
}

export interface People {
  readonly lastname: string;
}

export interface People {
  readonly adress: readonly string[];
}

export interface People {
  age?: number;
}

const people: People = {
  name: 'Lucas',
  lastname: 'Corrêa',
  adress: ['Rua Safira, 71'],
  age: 23,
};

console.log(people);
