var React = require('react');
var Slot = require('./slot');

var Slots = React.createClass ({
	render: function () {
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
});

module.exports = Slots;