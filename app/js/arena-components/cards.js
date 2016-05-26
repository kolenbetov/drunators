import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Card from './card-in-deck';

export default class Cards extends React.Component{
	render() {	
		const cards = this.props.cards;

		return (
			<div>
				{cards.map(card => {
					return (<Card card={card} key={card.name} disabled={card.cost > this.props.curValue} />);
				})}
			</div>
		);
	}
};