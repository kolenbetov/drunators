import { END_TURN, PUT_CREATURE } from '../actions/actions';

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
	cards: [{type: 'creature', name: 'skeleton', element: 'death', cost: 2, attack: 2, health: 6}],
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
	cards: [
		{type: 'creature', name: 'mermaid', element: 'water', cost: 3, attack: 2, health: 28},
		{type: 'creature', name: 'poseidon', element: 'water', cost: 7, attack: 5, health: 18},
		{type: 'creature', name: 'skeleton', element: 'death', cost: 2, attack: 2, health: 6}
	],
	used_card: false,
	slots: ['empty', 'empty', 'empty', 'empty', 'empty']
};

export default function arena(state = [heroTop, hero2], action) {
	switch (action.type) {
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