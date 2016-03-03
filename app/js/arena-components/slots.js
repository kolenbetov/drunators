var React = require('react');
var Slot = require('./slot');

var Slots = React.createClass ({
	render: function () {
		const slots = this.props.slots;
		const className = 'slots';

		return (
			<div className={className}>
				{slots.map(function(slot, i){
                    return (<Slot slot={slot} key={i} />);
                })}
			</div>
		);
	}
});

module.exports = Slots;