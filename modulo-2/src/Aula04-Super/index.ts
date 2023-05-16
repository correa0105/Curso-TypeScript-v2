export class People {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + '' + this.lastname;
  }
}

export class Student extends People {
  constructor(
    name: string,
    lastname: string,
    age: number,
    cpf: string,
    public classRoom: string,
  ) {
    super(name, lastname, age, cpf);
  }

  getFullName(): string {
    const result = super.getFullName();
    return result + ' - Editado!';
  }
}

export class Client extends People {
  getFullName(): string {
    return 'Isto vem do cliente: ' + this.name + '' + this.lastname;
  }
}

const people1 = new People('Vitor', 'Silevira', 21, '000.000.000-00');
const student1 = new Student('Lucas', 'Corrêa', 23, '000.000.000-01', '0001');
const client1 = new Client('Lucas', 'Corrêa', 23, '000.000.000-02');

console.log(people1);
console.log(student1);
console.log(client1.getFullName());
