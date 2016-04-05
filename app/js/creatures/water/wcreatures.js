import Creature from '../creature';

const shark = new Creature('water', 'shark', 2, 2, 10);
const mermaid = new Creature('water', 'mermaid', 4, 4, 14);
const toad = new Creature('water', 'toad', 6, 4, 12);
const poseidon = new Creature('water', 'poseidon', 9, 6, 24);
const hydra = new Creature('water', 'hydra', 10, 5, 25);

const waterCreatures = [shark, mermaid, toad, poseidon, hydra];

export default waterCreatures;