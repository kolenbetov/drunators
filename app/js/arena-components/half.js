import React from 'react';
import Avatar from './avatar';
import Actions from './actions';

export default class Half extends React.Component{
	render() {
		const hero = this.props.hero;
		const className = this.props.half + '-player';

		return (
			<div className={className} >
				<Avatar name={hero.get('name')} id={hero.get('id')} health={hero.get('health')} />
				<Actions elements={hero.get('elements')} cards={hero.get('cards')} slots={hero.get('slots')} half={this.props.half} disabled={!hero.get('active')} dropCard={this.props.dropCard} />
			</div>
		);
	}

	// componentWillReceiveProps(nextProps) {      
 //    	console.log(nextProps.hero.health);
 //    	console.log(this.props.hero.health);
 //  	}
};