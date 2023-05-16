export class People {
  static ageDefault = 18;
  static cpfDefault = '111.111.111-11';

  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}

  public anyMethod(): void {
    console.log(People.ageDefault, People.cpfDefault);
  }

  static cretePeople(name: string, lastname: string): People {
    return new People(name, lastname, People.ageDefault, People.cpfDefault);
  }
}

const people1 = new People('Lucas', 'Corrêa', 23, '000.000.000-13');
const people2 = People.cretePeople('Lucas', 'Corrêa');

people1.cpf = '001.000.000-01';

console.log(people1.cpf);
console.log(people2);
people2.anyMethod();
console.log(People.ageDefault, People.cpfDefault);
