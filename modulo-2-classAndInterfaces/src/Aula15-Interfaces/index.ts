interface TypeName {
  name: string;
}

interface TypeLastName {
  lastname: string;
}

interface TypeFullName {
  fullName(): string;
}

/* type TypePeople = TypeName & TypeLastName & TypeFullName; */
interface TypePeople extends TypeName, TypeLastName, TypeFullName {}

class People implements TypePeople {
  constructor(public name: string, public lastname: string) {}

  public fullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

const peopleObj: TypePeople = {
  name: 'Lucas',
  lastname: 'Corrêa',
  fullName(): string {
    return this.name + ' ' + this.lastname;
  },
};

const people1 = new People('Lucas', 'Corrêa');
console.log(people1.fullName());
console.log(peopleObj.fullName());
