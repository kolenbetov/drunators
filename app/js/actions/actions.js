export const END_TURN = 'END_TURN';
export const PUT_CREATURE = 'PUT_CREATURE';

export function endTurn() {
	return {type: 'END_TURN'}
}

export function putCreature(card, slot) {
	return {
		type: 'PUT_CREATURE',
		creature: card,
		slotIndex: slot
	}
}
