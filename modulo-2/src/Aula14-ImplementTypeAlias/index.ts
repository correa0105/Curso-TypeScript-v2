export type TypeName = {
  name: string;
};

export type TypeLastName = {
  lastname: string;
};

export type TypeFullName = {
  fullName(): string;
};

class People implements TypeName, TypeLastName, TypeFullName {
  constructor(public name: string, public lastname: string) {}

  public fullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

const people1 = new People('Lucas', 'Corrêa');
console.log(people1.fullName());
