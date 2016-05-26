import Creature from '../creature';

const skeletonImg = 'app/images/creatures/red_eyes_creature.png';
const zombieImg = 'app/images/creatures/green_red_eyes.png';
const lichImg = 'app/images/creatures/Glasses-Creature-icon.png';
const sorcererImg = 'app/images/creatures/black-creature-icon.png';
const darkKnightImg = 'app/images/creatures/black-creature.ico';

const skeleton = new Creature('death', 'skeleton', 2, 2, 10, skeletonImg);
const zombie = new Creature('death', 'zombie', 1, 0, 2, zombieImg); 
const lich = new Creature('death', 'lich', 6, 4, 12, lichImg);
const sorcerer = new Creature('death', 'sorcerer', 9, 6, 24, sorcererImg);
const darkKnigth = new Creature('death', 'dark knight', 10, 5, 25, darkKnightImg);

const deathCreatures = [skeleton, zombie, lich, sorcerer, darkKnigth];

 export default deathCreatures;