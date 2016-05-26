import React from 'react';
import Avatar from './avatar';
import Actions from './actions';

export default class Half extends React.Component{
	render() {
		const hero = this.props.hero;
		const className = this.props.half + '-player';

		return (
			<div className={className} >
				<Avatar name={hero.name} id={hero.id} health={hero.health} />
				<Actions elements={hero.elements} cards={hero.cards} slots={hero.slots} half={this.props.half} disabled={!hero.active} dropCard={this.props.dropCard} />
			</div>
		);
	}
};