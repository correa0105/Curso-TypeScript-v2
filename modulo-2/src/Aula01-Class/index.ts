export class Company {
  public readonly name: string;
  protected readonly cnpj: string;
  private readonly colaborators: Colaborator[] = [];

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public addColaborator(colaborator: Colaborator): void {
    this.colaborators.push(colaborator);
  }

  public showColaborators(): void {
    for (const colaborator of this.colaborators) {
      console.log(colaborator);
    }
  }
}

export class Colaborator {
  constructor(public readonly name: string, public readonly lastname: string) {}
}

const company1 = new Company('Cubic Solutions', '111.111.111/0001-11');

const colaborator1 = new Colaborator('Lucas', 'Corrêa');
const colaborator2 = new Colaborator('Vitor', 'Andrade');
const colaborator3 = new Colaborator('Jefferson', 'Rugal');

company1.addColaborator(colaborator1);
company1.addColaborator(colaborator2);
company1.addColaborator(colaborator3);

console.log(company1);

company1.showColaborators();
