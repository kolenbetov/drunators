import Creature from '../creature';

const healer = new Creature('life', 'healer', 2, 2, 10);
const monk = new Creature('life', 'monk', 1, 0, 2); 
const elemental = new Creature('life', 'elemental', 6, 4, 12);
const bishop = new Creature('life', 'bishop', 9, 6, 24);
const angel = new Creature('life', 'angel', 10, 5, 25);

const lifeCreatures = [healer, monk, elemental, bishop, angel];

export default lifeCreatures;