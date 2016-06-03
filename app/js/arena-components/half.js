import React, { PropTypes } from 'react';
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
//    	console.log(nextProps.hero.health + '---' + this.props.hero.health);
//  	}
};

Half.propTypes = {
	hero: PropTypes.shape({
    	id: PropTypes.string.isRequired,
       	name: PropTypes.string.isRequired,
        health: PropTypes.number.isRequired,
        active: PropTypes.bool.isRequired,
        elements: PropTypes.object.isRequired,
        cards: PropTypes.array.isRequired,
        used_card: PropTypes.bool.isRequired,
        slots: PropTypes.array.isRequired,
    }).isRequired,
	half: PropTypes.string.isRequired,
	dropCard: PropTypes.func.isRequired

};