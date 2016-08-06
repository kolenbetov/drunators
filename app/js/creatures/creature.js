export default class Creature {


    constructor(card){
        this.type = 'creature';
        this.element = card.element;
        this.name = card.name;
        this.cost = card.cost;
        this.attack = card.attack;
        this.health = card.health;
        this.img = card.img;
        this.firstTurn = true;
    }

    doDie(slot) {
        console.log('YES!');
        // slot = 'empty';
        // return slot;
    };

    doAttack(defender, slotIdx) {
            let self = this;

        if(defender.getIn(['slots', slotIdx]) === 'empty') {
            defender = defender.set('health', defender.get('health') - this.attack);
            console.log('hero been hit by: ' + this.attack + ' hero health is: ' + defender.get('health'));
        } else {
            defender = defender.set('slots', defender.get('slots').map(function(slot, idx){
                if(slotIdx === idx) {
                    slot.health -= self.attack
                }; 
                return slot
            }));
            // defender.getIn(['slots', slotIdx]).health = defender.getIn(['slots', slotIdx]).health - this.attack;
            if (defender.getIn(['slots', slotIdx]).health <= 0) {
                defender = defender.setIn(['slots', slotIdx], 'empty');
                // doDie(defender.slots[slotIdx]);
            }
            // console.log('creature been hit by: ' + this.attack + ' creature health is: ' + defender.slots[slotIdx].health);

        }
        return defender; 
    };
    //defence(){}

    //cast(){}
}


    // constructor(card){
    //     this.type = 'creature';
    //     this.element = card.get('element');
    //     this.name = card.get('name');
    //     this.cost = card.get('cost');
    //     this.attack = card.get('attack');
    //     this.health = card.get('health');
    //     this.img = card.get('img');
    //     this.firstTurn = true;
    // }


    //     constructor(card){
    //     this.type = 'creature';
    //     this.element = card.element;
    //     this.name = card.name;
    //     this.cost = card.cost;
    //     this.attack = card.attack;
    //     this.health = card.health;
    //     this.img = card.img;
    //     this.firstTurn = true;
    // }