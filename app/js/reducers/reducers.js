import { Map, List, fromJS } from 'immutable';
import { END_TURN, PUT_CREATURE, HERO_ATTACK } from '../actions/actions';
import Creature from '../creatures/creature';
import  fireCreatures  from '../creatures/fire/fcreatures';
import  airCreatures  from '../creatures/air/acreatures';
import  waterCreatures  from '../creatures/water/wcreatures';
import earthCreatures  from '../creatures/earth/ecreatures';
import  lifeCreatures  from '../creatures/life/lcreatures';
import deathCreatures  from '../creatures/death/dcreatures';

const heroTop = fromJS({
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
});

const hero2 = fromJS({
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
});

const doAttack = (creature, defender, slotIdx) => {
	if(defender.getIn(['slots', slotIdx]) === 'empty') {
        defender = defender.set('health', defender.get('health') - creature.get('attack'));
    } else {
    	defender = defender.setIn(['slots', slotIdx, 'health'], defender.getIn(['slots', slotIdx, 'health']) - creature.get('attack'));
    	if (defender.getIn(['slots', slotIdx]).health <= 0) {
                defender = defender.setIn(['slots', slotIdx], 'empty');
            }
    }

    return defender;
};

const heroAttack = (state, attackerIdx, defenderIdx) => {
	state.getIn([attackerIdx, 'slots']).forEach((slot, i) => {
		if(slot !== 'empty') {
			if(slot.get('firstTurn') === undefined) {
				state = state.setIn([attackerIdx, 'slots', i, 'firstTurn'], false)
			} else if (!slot.get('firstTurn')) {
				state = state.set(defenderIdx, doAttack(slot, state.get(defenderIdx), i));
			} 
		}
	});
	return state;
};

export default function arena(state = List.of(heroTop, hero2), action) {
	switch (action.type) {
		case HERO_ATTACK:
			var active;
			var inactive;
			state.forEach((hero, i) => {
				if (hero.get('active')) { active = i }
				else if (!hero.get('active')) { inactive = i }
			});
			state = heroAttack(state, active, inactive);
			// let stateCopy = state.slice(0);
			// heroAttack(stateCopy, active, inactive)
			return state;
		case END_TURN:
			return state.map(hero => {
				if (hero.get('active')) {
					hero = hero.set('elements', hero.get('elements').map(val => {
						return val + 1;
					}));
					hero = hero.set('used_card', false);
				}
				hero = hero.set('active', !hero.get('active'));

				return hero;
			});
		case PUT_CREATURE:
			return state.map(hero => {
				if (hero.get('active')) {
					hero = hero.setIn(['slots', action.slotIndex], action.creature);
					hero = hero.setIn(['elements', action.creature.get('element')], hero.getIn(['elements', action.creature.get('element')]) - action.creature.get('cost'));
					hero = hero.set('used_card', true);
				}
				return hero;
			});
		default:
			return state;
	}
}