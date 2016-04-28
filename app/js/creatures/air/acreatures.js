import Creature from '../creature';

const fairyImg = 'app/images/creatures/creature_girl.png';
const cloudImg = 'app/images/creatures/white-creature-icon.png';
const elementalImg = 'app/images/creatures/Flickr_creatures.png';
const thunderbirdImg = 'app/images/creatures/red_eyes_creature.png';
const winderImg = 'app/images/creatures/tie-creature-icon.png';

const fairy = new Creature('air', 'fairy', 2, 2, 10, fairyImg);
const cloud = new Creature('air', 'cloud', 1, 0, 2, cloudImg); //cloud takes any damage from creature in the opposite slot and disappears
const elemental = new Creature('air', 'elemental', 6, 4, 12, elementalImg);
const thunderbird = new Creature('air', 'thunderbird', 9, 6, 24, thunderbirdImg);
const winder = new Creature('air', 'winder', 10, 5, 25, winderImg);

const airCreatures = [fairy, cloud, elemental, thunderbird, winder];

export default airCreatures;