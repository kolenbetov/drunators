import React from 'react';
import Elements from './elements';
import Slots from './slots';

export default class Actions extends React.Component{
	render() {
		return (
			<div className="actions height100">
				<Elements elements={this.props.elements} cards={this.props.cards} half={this.props.half} disabled={this.props.disabled} />
				<Slots slots={this.props.slots} dropCard={this.props.dropCard} />
			</div>
		);
	}
};
