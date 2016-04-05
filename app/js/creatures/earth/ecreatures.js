import Creature from '../creature';

const snake = new Creature('earth', 'snake', 2, 2, 10);
const centaur = new Creature('earth', 'centaur', 1, 0, 2); 
const elemental = new Creature('earth', 'elemental', 6, 4, 12);
const elf = new Creature('earth', 'elf', 9, 6, 24);
const dragon = new Creature('earth', 'dragon', 10, 5, 25);

const earthCreatures = [snake, centaur, elemental, elf, dragon];

 export default earthCreatures;