import Creature from '../creature';

const skeleton = new Creature('death', 'skeleton', 2, 2, 10);
const zombie = new Creature('death', 'zombie', 1, 0, 2); 
const lich = new Creature('death', 'lich', 6, 4, 12);
const sorcerer = new Creature('death', 'sorcerer', 9, 6, 24);
const darkKnigth = new Creature('death', 'dark knight', 10, 5, 25);

 export default const deathCreatures = [skeleton, zombie, lich, sorcerer, darkKnigth]