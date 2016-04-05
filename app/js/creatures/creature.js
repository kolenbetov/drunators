export default class Creature {

    constructor(element, name, cost, attack, health){
        this.type = 'creature';
        this.element = element;
        this.name = name;
        this.cost = cost;
        this.attack = attack;
        this.health = health;
    }

    attack(oppositeSlots, position) {
        oppositeSlots[position].health -= this.attack;
        return oppositeSlots; 
    };

    //defence(){}

    //cast(){}
}