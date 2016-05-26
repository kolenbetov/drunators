import Creature from '../creature';

const snakeImg = 'app/images/creatures/favicon.png';
const centaurImg = 'app/images/creatures/Ears-Creature-icon.png';
const elementalImg = 'app/images/creatures/green-creature-icon.png';
const elfImg = 'app/images/creatures/pirate_creature.ico';
const dragonImg = 'app/images/creatures/dragon-creature.png';

const snake = new Creature('earth', 'snake', 2, 2, 10, snakeImg);
const centaur = new Creature('earth', 'centaur', 1, 0, 2, centaurImg); 
const elemental = new Creature('earth', 'elemental', 6, 4, 12, elementalImg);
const elf = new Creature('earth', 'elf', 9, 6, 24, elfImg);
const dragon = new Creature('earth', 'dragon', 10, 5, 25, dragonImg);

const earthCreatures = [snake, centaur, elemental, elf, dragon];

 export default earthCreatures;