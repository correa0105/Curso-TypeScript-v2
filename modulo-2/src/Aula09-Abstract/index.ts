export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  public characterAttack(character: Character): void {
    this.battleCry();
    character.removeLife(this.attack);
  }

  public removeLife(attackPoints: number): void {
    this.life -= attackPoints;
    console.log(`${this.name} agora tem ${this.life} de vida...`);
  }

  public abstract battleCry(): void;
}

class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  public battleCry(): void {
    console.log(this.emoji + ': Attack!!!');
  }
}

class Mob extends Character {
  protected emoji = '\u{1F9DF}';

  public battleCry(): void {
    console.log(this.emoji + ': Attack!!!');
  }
}

const warrior1 = new Warrior('Warrior', 100, 500);
const mob1 = new Mob('Mob', 85, 500);

warrior1.characterAttack(mob1);
warrior1.characterAttack(mob1);
mob1.characterAttack(warrior1);
