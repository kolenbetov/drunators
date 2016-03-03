var React = require('react');
var HTML5Backend = require('react-dnd-html5-backend');
var DragDropContext = require('react-dnd').DragDropContext;
const Card = require('./card-in-deck');

const Cards = React.createClass ({
	render: function () {	
		const cards = this.props.cards;

		return (
			<div>
				{cards.map(card => {
					return (<Card card={card} key={card.name} disabled={card.cost > this.props.curValue} />);
				})}
			</div>
		);
	}
});

module.exports = Cards;