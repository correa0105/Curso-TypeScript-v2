interface Constructor {
  new (...args: any[]): any;
}

export function reverseNameAndColor(param1: string, param2: string) {
  return function (target: Constructor) {
    console.log('Sou decorador e recebi:', target);

    return class extends target {
      name: string;
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverseString(args[0]);
        this.color = this.reverseString(args[1]);
      }

      reverseString(string: string): string {
        return (
          string.split('').reverse().join('') + ' ' + param1 + ' ' + param2
        );
      }
    };
  };
}

function otherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('Outro Decorator: ' + param1);
    return target;
  };
}

@otherDecorator('Param do Outro Decorator')
@reverseNameAndColor('Qualquer Coisa', 'Valor2')
class Animal {
  constructor(public name: string, public color: string) {
    console.log('Classe Chamada');
  }
}

const animal1 = new Animal('Zebra', 'Branca');
console.log(animal1);
