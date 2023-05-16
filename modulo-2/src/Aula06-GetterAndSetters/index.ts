export class People {
  constructor(
    private name: string,
    private lastname: string,
    private age: number,
    private _cpf: string,
  ) {}

  public set cpf(cpf: string) {
    this._cpf = cpf;
  }

  public get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const people1 = new People('Lucas', 'Corrêa', 23, '000.000.000-13');
/* people1.cpf = '001.000.000-01'; */
console.log(people1.cpf);
