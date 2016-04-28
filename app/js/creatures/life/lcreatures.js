import Creature from '../creature';

const healerImg = 'app/images/creatures/brown-creature-icon.png';
const monkImg = 'app/images/creatures/Scar-Creature-icon.png';
const elementalImg = 'app/images/creatures/orange-creature-icon.png';
const bishopImg = 'app/images/creatures/BlackPower-creature-icon.png';
const angelImg = 'app/images/creatures/BigEyes-Creature-icon.png';

const healer = new Creature('life', 'healer', 2, 2, 10, healerImg);
const monk = new Creature('life', 'monk', 1, 0, 2, monkImg); 
const elemental = new Creature('life', 'elemental', 6, 4, 12, elementalImg);
const bishop = new Creature('life', 'bishop', 9, 6, 24, bishopImg);
const angel = new Creature('life', 'angel', 10, 5, 25, angelImg);

const lifeCreatures = [healer, monk, elemental, bishop, angel];

export default lifeCreatures;