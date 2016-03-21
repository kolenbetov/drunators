import Creature from '../creature';

const demon = new Creature('fire', 'demon', 2, 2, 10);
const cerber = new Creature('fire', 'cerber', 4, 4, 14);
const elemental = new Creature('fire', 'elemental', 6, 4, 12);
const phoenix = new Creature('fire', 'phoenix', 9, 6, 24);
const devil = new Creature('fire', 'devil', 10, 5, 25);

 export default const fireCreatures = [demon, cerber, elemental, phoenix, devil]