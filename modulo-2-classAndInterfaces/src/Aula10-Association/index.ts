export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  public get name(): string {
    return this._name;
  }

  public set tool(tool: Tool | null) {
    this._tool = tool;
  }

  public get tool(): Tool | null {
    return this._tool;
  }

  public writer(): void {
    if (this.tool === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
    this.tool.writer();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  abstract writer(): void;

  public get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  public writer(): void {
    console.log(`${this.name} está escrevendo...`);
  }
}

export class TypeWriter extends Tool {
  public writer(): void {
    console.log(`${this.name} está digitando...`);
  }
}

const writer1 = new Writer('Lucas');
const pen1 = new Pen('Caneta Bic');
const typeWriter1 = new TypeWriter('Writer Mak');

console.log(writer1.name);
console.log(pen1.name);
console.log(typeWriter1.name);

writer1.tool = pen1;

writer1.writer();
