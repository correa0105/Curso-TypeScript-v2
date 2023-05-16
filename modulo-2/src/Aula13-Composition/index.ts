export class Car {
  private readonly engine: Engine = new Engine();

  public on(): void {
    this.engine.on();
  }

  public speedUp(): void {
    this.engine.speedUp();
  }

  public stop(): void {
    this.engine.stop();
  }

  public off(): void {
    this.engine.off();
  }
}

export class Engine {
  public on(): void {
    console.log('Motor está ligado...');
  }

  public speedUp(): void {
    console.log('Motor está acelerando...');
  }

  public stop(): void {
    console.log('Motor está parado...');
  }

  public off(): void {
    console.log('Motor está desligado...');
  }
}

const car1 = new Car();

car1.on();
car1.speedUp();
car1.stop();
car1.off();
