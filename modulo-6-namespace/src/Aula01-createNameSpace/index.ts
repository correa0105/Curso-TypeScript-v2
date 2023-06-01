/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNamespace {
  export const nameOfNamespace = 'Lucas Corrêa';

  export class PeopleNamespace {
    constructor(public name: string) {}
  }

  const people = new PeopleNamespace('Lucas');
  console.log(people);

  export namespace OtherNamespace {
    export const nameOfNamespace = 'Welson Fraga';
  }
}

const peopleOfNamespace = new MyNamespace.PeopleNamespace('Lucas');
console.log(peopleOfNamespace);
console.log(MyNamespace.nameOfNamespace);
console.log(MyNamespace.OtherNamespace.nameOfNamespace);
