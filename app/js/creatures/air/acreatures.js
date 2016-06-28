const fairy = {
	element: 'air',
	name: 'fairy',
	cost: 2,
	attack: 2,
	health: 10,
	img:'app/images/creatures/creature_girl.png'
};

const cloud = {  //cloud takes any damage from creature in the opposite slot and disappears
	element: 'air',
	name: 'cloud',
	cost: 2,
	attack: 2,
	health: 10,
	img:'app/images/creatures/white-creature-icon.png'
};

const elemental = {
	element: 'air',
	name: 'elemental',
	cost: 2,
	attack: 2,
	health: 10,
	img:'app/images/creatures/Flickr_creatures.png'
};

const thunderbird = {
	element: 'air',
	name: 'thunderbird',
	cost: 2,
	attack: 2,
	health: 10,
	img:'app/images/creatures/red_eyes_creature.png'
};

const winder = {
	element: 'air',
	name: 'winder',
	cost: 2,
	attack: 2,
	health: 10,
	img:'app/images/creatures/tie-creature-icon.png'
};

const airCreatures = [fairy, cloud, elemental, thunderbird, winder];

export default airCreatures;