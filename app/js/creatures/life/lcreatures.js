const healer = {
	element: 'life',
	name: 'healer',
	cost: 2,
	attack: 2,
	health: 10,
	img:'app/images/creatures/brown-creature-icon.png'
};

const monk = {
	element: 'life',
	name: 'monk',
	cost: 2,
	attack: 2,
	health: 10,
	img:'app/images/creatures/Scar-Creature-icon.png'
};

const elemental = {
	element: 'life',
	name: 'elemental',
	cost: 2,
	attack: 2,
	health: 10,
	img:'app/images/creatures/orange-creature-icon.png'
};

const bishop = {
	element: 'life',
	name: 'bishop',
	cost: 2,
	attack: 2,
	health: 10,
	img:'app/images/creatures/BlackPower-creature-icon.png'
};

const angel = {
	element: 'life',
	name: 'angel',
	cost: 2,
	attack: 2,
	health: 10,
	img:'app/images/creatures/BigEyes-Creature-icon.png'
};

const lifeCreatures = [healer, monk, elemental, bishop, angel];

export default lifeCreatures;

//add polymorph creature that can become any other creature or become the creature same as in opposite slot