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

    doAttack(defender, slotIdx) {
        if(defender.getIn(['slots', slotIdx] === 'empty')) {
            defender = defender.set('health', defender.get('health') - this.attack);
            console.log('hero been hit by: ' + this.attack + ' hero health is: ' + defender.get('health'));
        } else {
            defender.setIn(['slots', slotIdx, 'health'], defender.getIn(['slots', slotIdx, 'health']) - this.attack);
            if (defender.getIn(['slots', slotIdx, 'health']) <= 0) {
                defender.setIn(['slots', slotIdx], 'empty');
                // doDie(defender.slots[slotIdx]);
            }
            console.log('creature been hit by: ' + this.attack + ' creature health is: ' + defender.slots[slotIdx].health);

        }
        return defender; 
    };
    //defence(){}

    //cast(){}
}