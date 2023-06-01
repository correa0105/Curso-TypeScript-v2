/* eslint-disable @typescript-eslint/no-namespace */
namespace TestNamespace {
  export const nameTestNamespace = 'Lucas Corrêa';

  export class PeopleNamespace {
    constructor(public name: string) {}
  }

  const people = new PeopleNamespace('Lucas');
  console.log(people);

  export namespace OtherNamespace {
    export const nameTestNamespace = 'Welson Fraga';
  }
}

const peopleNamespace = new TestNamespace.PeopleNamespace('Lucas');
console.log(peopleNamespace);
console.log(TestNamespace.nameTestNamespace);
console.log(TestNamespace.OtherNamespace.nameTestNamespace);
