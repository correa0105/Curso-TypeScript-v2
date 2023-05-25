interface PeopleProtocol<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

interface PeopleProtocol1<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

const student: PeopleProtocol<number, number> = {
  name: 123,
  lastname: 321,
  age: 24,
};

const student1: PeopleProtocol1 = {
  name: 'Lucas',
  lastname: 'Corrêa',
  age: 24,
};

console.log(student);
console.log(student1);
