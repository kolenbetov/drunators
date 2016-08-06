import React, { PropTypes } from 'react';
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

// Actions.propTypes = {
// 	elements: PropTypes.shape({
// 		earth: PropTypes.number.isRequired,
// 		water: PropTypes.number.isRequired,
// 		air: PropTypes.number.isRequired,
// 		fire: PropTypes.number.isRequired,
// 		life: PropTypes.number.isRequired,
// 		death: PropTypes.number.isRequired		
// 	}).isRequired,
// 	cards: PropTypes.arrayOf(
// 		PropTypes.object.isRequired
// 	).isRequired,
// 	half: PropTypes.string.isRequired,
// 	disabled: PropTypes.bool.isRequired,
// 	slots: PropTypes.oneOfType([
// 		PropTypes.string.isRequired,
// 		PropTypes.object.isRequired
// 	]).isRequired,
// 	dropCard: PropTypes.func.isRequired
// };
