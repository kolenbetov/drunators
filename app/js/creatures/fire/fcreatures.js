import Creature from '../creature';

const demonImg = 'app/images/creatures/pink-creature-icon.png';
const cerberImg = 'app/images/creatures/astrid.png';
const elementalImg = 'app/images/creatures/fire_creature.png';
const phoenixImg = 'app/images/creatures/red_creature.png';
const devilImg = 'app/images/creatures/creature_boy.png';

const demon = new Creature('fire', 'demon', 2, 2, 10, demonImg);
const cerber = new Creature('fire', 'cerber', 4, 4, 14, cerberImg);
const elemental = new Creature('fire', 'elemental', 6, 4, 12, elementalImg);
const phoenix = new Creature('fire', 'phoenix', 9, 6, 24, phoenixImg);
const devil = new Creature('fire', 'devil', 10, 5, 25, devilImg);

 const fireCreatures = [demon, cerber, elemental, phoenix, devil];

 export default fireCreatures;