"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name, attack, life) {
        this.name = name;
        this.attack = attack;
        this.life = life;
    }
    characterAttack(character) {
        this.battleCry();
        character.removeLife(this.attack);
    }
    removeLife(attackPoints) {
        this.life -= attackPoints;
        console.log(`${this.name} agora tem ${this.life} de vida...`);
    }
}
exports.Character = Character;
class Warrior extends Character {
    constructor() {
        super(...arguments);
        this.emoji = '\u{1F9DD}';
    }
    battleCry() {
        console.log(this.emoji + ': Attack!!!');
    }
}
class Mob extends Character {
    constructor() {
        super(...arguments);
        this.emoji = '\u{1F9DF}';
    }
    battleCry() {
        console.log(this.emoji + ': Attack!!!');
    }
}
const warrior1 = new Warrior('Warrior', 100, 500);
const mob1 = new Mob('Mob', 85, 500);
warrior1.characterAttack(mob1);
warrior1.characterAttack(mob1);
mob1.characterAttack(warrior1);
//# sourceMappingURL=index.js.map