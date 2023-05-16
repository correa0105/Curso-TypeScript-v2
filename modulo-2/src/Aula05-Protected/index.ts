export class Company {
  public readonly name: string;
  private readonly cnpj: string;
  protected readonly colaborators: Colaborator[] = [];

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

export class CubicSolutions extends Company {
  constructor() {
    super('Cubic Solutions', '000.000.000/0001-00');
  }

  public popColaborator(): Colaborator | null {
    const colaborator = this.colaborators.pop();
    if (colaborator) return colaborator;
    return null;
  }
}

export class Colaborator {
  constructor(public readonly name: string, public readonly lastname: string) {}
}

const company1 = new CubicSolutions();

const colaborator1 = new Colaborator('Lucas', 'Corrêa');
const colaborator2 = new Colaborator('Vitor', 'Andrade');
const colaborator3 = new Colaborator('Jefferson', 'Rugal');

company1.addColaborator(colaborator1);
company1.addColaborator(colaborator2);
company1.addColaborator(colaborator3);
const colabRemoved = company1.popColaborator();

console.log(colabRemoved);

console.log(company1);
