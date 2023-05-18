function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type People = { type: 'people'; name: string };
type Animal = { type: 'animal'; color: string };
type PeopleOrAnimal = People | Animal;

class Student implements People {
  type = 'people' as const;
  constructor(public name: string) {}
}

function showName(obj: PeopleOrAnimal): void {
  /* if ('name' in obj) console.log(obj.name); */
  /* if (obj instanceof Student) console.log(obj.name); */
  switch (obj.type) {
    case 'people':
      console.log(obj.name);
      return;
    case 'animal':
      console.log('Isto é um animal');
      return;
  }
}

showName(new Student('Lucas'));
showName({ type: 'animal', color: 'red' });
