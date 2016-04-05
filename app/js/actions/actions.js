export const END_TURN = 'END_TURN';
export const HERO_ATTACK = 'HERO_ATTACK';
export const PUT_CREATURE = 'PUT_CREATURE';

export function endTurn() {
	return {type: 'END_TURN'}
}

export function heroAttack() {
	return {type: 'HERO_ATTACK'}
}

export function putCreature(card, slot) {
	return {
		type: 'PUT_CREATURE',
		creature: card,
		slotIndex: slot
	}
}
