// Tipo do construtor da classe
type Constructor = new (...args: any[]) => any;

// Classes
function classDecorator(construtor: Constructor): any {
  // Chamado na criação da classe
  console.log('CLASSE');
  console.log(construtor);
  console.log('###');

  // Retorno pode ser omitido
  return class extends construtor {
    // faça o que desejar
  };
}

// Método de instância (normal)
function methodDecorator(
  classPrototype: any,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('MÉTODO NORMAL');
  console.log(classPrototype);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // value altera o retorno original:
    // value: (...args: any[]) => console.log(args),
    writable: true,
    enumerable: true,
    configurable: true,
  };
}

// Método estático
function decoratorOfStaticMethod(
  classConstructor: Constructor,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('MÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Parâmetro de método
function decoratorOfParamOfMethod(
  classPrototype: any,
  methodName: string,
  indiceDaPropriedade: number,
): any {
  // Chamado na criação do método
  console.log('PARÂMETRO DE MÉTODO');
  console.log(classPrototype);
  console.log(methodName);
  console.log(indiceDaPropriedade);
  console.log('###');

  // Retorno é ignorado
}

// Parâmetro de método estático
function decoratorOfParamOfStaticMethod(
  classConstructor: Constructor,
  methodName: string,
  indiceDaPropriedade: number,
): any {
  // Chamado na criação do parâmetro (não precisa chamar o método)
  console.log('PARÂMETRO DE MÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(methodName);
  console.log(indiceDaPropriedade);
  console.log('###');

  // Retorno é ignorado
}

// Propriedade
function propertyDecorator(classPrototype: any, propertyName: string): any {
  // Chamado na criação da propriedade
  console.log('DECORADOR DE PROPRIEDADE');
  console.log(classPrototype);
  console.log(propertyName);
  console.log('###');

  // Retorno pode ser omitido
  // Use get e set para manipular o valor da propriedade
  let valorPropriedade: any;
  return {
    enumerable: true,
    configurable: true,
    get: () => valorPropriedade,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join('');
        return;
      }
      valorPropriedade = valor;
    },
  };
}

// Propriedade estática
function staticPropertyDecorator(
  classConstructor: any,
  propertyName: string,
): any {
  // Chamado na criação da propriedade estática
  console.log('DECORADOR DE PROPRIEDADE ESTÁTICA');
  console.log(classConstructor);
  console.log(propertyName);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Getter/Setter
function getterAndSetterDecorator(
  classPrototype: any,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER normal');
  console.log(classPrototype);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Getter/Setter estático
function staticGetterAndSetterDecorator(
  classConstructor: Constructor,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER estático');
  console.log(classConstructor);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// A classe e o uso dos decorators

@classDecorator
export class People {
  @propertyDecorator
  name: string;
  lastname: string;
  age: number;

  @staticPropertyDecorator
  static staticProperty = 'VALOR PROPRIEDADE ESTÁTICA';

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  @methodDecorator
  method(@decoratorOfParamOfMethod msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  @decoratorOfStaticMethod
  static staticMethod(@decoratorOfParamOfStaticMethod msg: string): string {
    return People.staticProperty + ' - ' + msg;
  }

  get fullName(): string {
    return this.name + ' ' + this.lastname;
  }

  @getterAndSetterDecorator
  set fullName(valor: string) {
    const words = valor.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(' ');
  }

  @staticGetterAndSetterDecorator
  static get staticPropertyGetterSetter(): string {
    return People.staticProperty;
  }

  static set staticPropertyGetterSetter(value: string) {
    People.staticProperty = value;
  }
}

// Uso da classe

const people = new People('Lucas', 'Corrêa', 30);
people.fullName = 'João Silva Oliveira';
const method = people.method('Olá mundo!');
const staticMethod = People.staticMethod('Olá mundo!');
console.log(people);
console.log(method);
console.log(staticMethod);
console.log(People.staticProperty);
