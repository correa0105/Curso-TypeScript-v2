@decoratorAnimal
class Animal {
  constructor(public name: string, public color: string) {}
}

function decoratorAnimal<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverseString(args[0]);
      this.color = this.reverseString(args[1]);
    }

    reverseString(string: string): string {
      return string.split('').reverse().join('');
    }
  };
}

const animal1 = new Animal('Zebra', 'Branca');
console.log(animal1);
