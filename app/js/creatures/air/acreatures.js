import Creature from '../creature';

const fairy = new Creature('air', 'fairy', 2, 2, 10);
const cloud = new Creature('air', 'cloud', 1, 0, 2); //cloud takes any damage from creature in the opposite slot and disappears
const elemental = new Creature('air', 'elemental', 6, 4, 12);
const thunderbird = new Creature('air', 'thunderbird', 9, 6, 24);
const winder = new Creature('air', 'winder', 10, 5, 25);

 export default const airCreatures = [fairy, cloud, elemental, thunderbird, winder]