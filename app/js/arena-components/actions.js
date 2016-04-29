var React = require('react');
var Elements = require('./elements');
var Slots = require('./slots');

const Actions = React.createClass({
	render: function () {
		return (
			<div className="actions height100">
				<Elements elements={this.props.elements} cards={this.props.cards} half={this.props.half} disabled={this.props.disabled} />
				<Slots slots={this.props.slots} dropCard={this.props.dropCard} />
			</div>
		);
	}
});

module.exports = Actions;