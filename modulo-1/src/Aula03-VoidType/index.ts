function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

export const people = {
  name: 'Lucas',
  lastname: 'Corrêa',

  showName(): void {
    console.log(this.name + ' ' + this.lastname);
  },
};

noReturn('Lucas', 'Corrêa');
people.showName();
