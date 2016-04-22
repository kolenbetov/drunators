import { END_TURN, PUT_CREATURE, HERO_ATTACK } from '../actions/actions';
import  fireCreatures  from '../creatures/fire/fcreatures';
import  airCreatures  from '../creatures/air/acreatures';
import  waterCreatures  from '../creatures/water/wcreatures';
import  earthCreatures  from '../creatures/earth/ecreatures';
import  lifeCreatures  from '../creatures/life/lcreatures';
import  deathCreatures  from '../creatures/death/dcreatures';

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
	cards: [ ...fireCreatures, ...airCreatures, ...waterCreatures, ...earthCreatures, ...lifeCreatures, ...deathCreatures ],
	used_card: false,
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


const heroAttack = (state, attack, defense) => {
	state[attack].slots.forEach((slot, i) => {
		if(slot !== 'empty') {
			slot.firstTurn ? slot.firstTurn = false : slot.doAttack(state[defense], i);
		} 
	});
	return state;
};

export default function arena(state = [heroTop, hero2], action) {
	switch (action.type) {
		case HERO_ATTACK: 
			var active;
			var inactive;
			state.forEach((hero, i) => {
				if (hero.active) { active = i }
				else if (!hero.active) {inactive = i }
			});
			return heroAttack(state, active, inactive);
		
		// case SLOT_ATTACK:
		// 	var active;
		// 	var inactive;
		// 	state.forEach((hero, i) => {
		// 		if (hero.active) { active = i }
		// 		else if (!hero.active) {inactive = i }
		// 	});
		// 	heroAttack(state[active], state[inactive]);


		// case CREATURE_ATTACK:
		// 	return state.map(hero => {
		// 		if (hero.active) {
		// 			hero.slots.forEach((slot, i) => {
		// 				if(slot !== empty) {
		// 					return slot.attack(defense.slots, i);
		// 				} 
		// 			});
		// 		}
		// 	});


		case END_TURN:
			return state.map(hero => {
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