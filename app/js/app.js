import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import arena from './reducers/reducers';
import Arena from './arena-components/arena';

let store = createStore(arena);

render (
	<Provider store={store}>
		<Arena />
	</Provider>,
	document.getElementById('arena')
);




// var React = require('react');
// var ReactDOM = require('react-dom');
// var Arena = require('./arena');
// import { createStore } from 'redux'

// const heroTop = {
// 	id: "1",
// 	name: "baltor",
// 	health: 50,
// 	active: true,
// 	elements: {
// 		earth: 5,
// 		water: 4,
// 		air: 3,
// 		fire: 2,
// 		life: 5,
// 		death: 4
// 	},
// 	cards: ['fdsf', 'card2', 'hfdhht', 'card4', 'tyert'],
// 	slots: ['empty', 'empty', 'empty', 'empty', 'empty']
// };

// const hero2 = {
// 	id: "2",
// 	name: "draopc",
// 	health: 45,
// 	active: false,
// 	elements: {
// 		earth: 2,
// 		water: 2,
// 		air: 5,
// 		fire: 5,
// 		life: 3,
// 		death: 5
// 	},
// 	cards: [
// 		{type: 'creature', name: 'mermaid', element: 'water', cost: 3, attack: 2, health: 28},
// 		{type: 'creature', name: 'poseidon', element: 'water', cost: 7, attack: 5, health: 18},
// 		{type: 'creature', name: 'skeleton', element: 'death', cost: 2, attack: 2, health: 6}
// 	],
// 	slots: ['empty', 'empty', 'empty', 'empty', 'empty']
// };

// function endTurn(state = [heroTop, hero2], action) {
// 	switch (action.type) {
// 		case 'END_TURN':
// 			return state.map(hero => {
// 				console.log(hero);
// 				if (hero.active) {
// 					for(let prop in hero.elements) {
// 						hero.elements[prop] += 1;
// 					}
// 				}
// 				hero.active = !hero.active;
// 				return hero;				
// 			});
// 		case 'PUT_CREATURE': 
// 			return state.map
// 		default:
// 			return state;
// 	}
// };

// const store = createStore(endTurn);

// const render = () => {
// 	ReactDOM.render(<Arena heroes={store.getState()} onClick={() => store.dispatch({type: 'END_TURN'})}  />, document.getElementById('arena'));
// };

// store.subscribe(render);
// render();