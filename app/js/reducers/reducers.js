import { END_TURN, PUT_CREATURE } from '../actions/actions';
import { fireCreatures } from '../creatures/air/fcreatures';
import { airCreatures } from '../creatures/air/acreatures';
import { waterCreatures } from '../creatures/air/wcreatures';
import { earthCreatures } from '../creatures/air/ecreatures';
import { lifeCreatures } from '../creatures/air/lcreatures';
import { deathCreatures } from '../creatures/air/dcreatures';

const heroAttack = (attack, defense) => {
	attack.slots.forEach((slot, i) => {
		if(slot !== empty) {
			return slot.attack(defense.slots, i);
		} 
	})
};

const heroTop = {
	id: "1",
	name: "baltor",
	health: 50,
	active: true,
	elements: {
		earth: 5,
		water: 4,
		air: 3,
		fire: 2,
		life: 5,
		death: 4
	},
	cards: [ ...fireCreatures, ...airCreatures, ...waterCreatures, ...earthCreatures, ...lifeCreatures, ...deathCreatures ]
	slots: ['empty', 'empty', 'empty', 'empty', 'empty']
};

const hero2 = {
	id: "2",
	name: "draopc",
	health: 45,
	active: false,
	elements: {
		earth: 2,
		water: 7,
		air: 5,
		fire: 5,
		life: 3,
		death: 5
	},
	cards: [ ...fireCreatures, ...airCreatures, ...waterCreatures, ...earthCreatures, ...lifeCreatures, ...deathCreatures ],
	used_card: false,
	slots: ['empty', 'empty', 'empty', 'empty', 'empty']
};




export default function arena(state = [heroTop, hero2], action) {
	switch (action.type) {
		case END_TURN:
			return state.map(hero => {
				heroAttack(heroTop, hero2);
				if (hero.active) {
					for(let prop in hero.elements) {
						hero.elements[prop] += 1;
					}
				}
                hero.used_card = false;
				hero.active = !hero.active;
				return hero;				
			});
		case PUT_CREATURE: 
			return state.map(hero => {
				if (hero.active) {
					hero.slots[action.slotIndex] = action.creature;
					hero.elements[action.creature.element] -= action.creature.cost;
					hero.used_card = true;
				}
				return hero;
			});
		default: 
			return state;
	}
}