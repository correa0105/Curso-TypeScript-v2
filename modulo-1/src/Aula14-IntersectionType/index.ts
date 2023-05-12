type hasName = { name: string };
type hasLastname = { lastname: string };
type hasAge = { age: number };
type People = hasName & hasLastname & hasAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersection = AB & AC & AD;

export const people: People = {
  name: 'Lucas',
  lastname: 'Corrêa',
  age: 23,
};

console.log(people);
