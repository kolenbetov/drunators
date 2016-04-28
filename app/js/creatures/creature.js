export default class Creature {

    constructor(element, name, cost, attack, health, img){
        this.type = 'creature';
        this.element = element;
        this.name = name;
        this.cost = cost;
        this.attack = attack;
        this.health = health;
        this.img = img;
        this.firstTurn = true;
    }

    doDie(slot) {
        slot = 'empty';
        return slot;
    };

    doAttack(oppositeHero, position) {
        if(oppositeHero.slots[position] === 'empty') {
            oppositeHero.health -= this.attack;
            console.log('hero been hit by: ' + this.attack + ' hero health is: ' + oppositeHero.health);
        } else {
            oppositeHero.slots[position].health -= this.attack;
            if (oppositeHero.slots[position].health <= 0) {
                oppositeHero.slots[position] = 'empty';
                // doDie(oppositeHero.slots[position]);
            }
            console.log('creature been hit by: ' + this.attack + ' creature health is: ' + oppositeHero.slots[position].health);

        }
        return oppositeHero; 
    };
    //defence(){}

    //cast(){}
}