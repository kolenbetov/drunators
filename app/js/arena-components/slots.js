import React from 'react';
import Slot from './slot';

export default class Slots extends React.Component {
	render() {
		const slots = this.props.slots;
		const dropCard = this.props.dropCard;
		const className = 'slots';

		return (
			<div className={className}>
				{slots.map(function(slot, i){
                    return (<Slot slot={slot} index={i} key={i} dropCard={dropCard} />);
                })}
			</div>
		);
	}
};