export class Calculator {
  constructor(public number: number) {}

  public add(n: number): this {
    this.number += n;
    return this;
  }

  public sub(n: number): this {
    this.number -= n;
    return this;
  }

  public div(n: number): this {
    this.number /= n;
    return this;
  }

  public mult(n: number): this {
    this.number *= n;
    return this;
  }
}

export class SubCalculator extends Calculator {
  public pow(n: number): this {
    this.number **= n;
    return this;
  }
}

// Builder - GoF

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  public setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  public setUrl(url: string): this {
    this.url = url;
    return this;
  }

  public send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const calculator1 = new SubCalculator(10);
calculator1.add(5).mult(2).div(2).sub(5).pow(2);
console.log(calculator1);

const request1 = new RequestBuilder(); //Builder
request1.setUrl('http://localhost:3000').setMethod('post').send();
