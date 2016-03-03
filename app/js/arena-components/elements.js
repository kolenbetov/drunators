var React = require('react');
var Element = require('./element');

const Elements = React.createClass ({
	render: function () {
		const elements = this.props.elements;
		const className = 'elements';
		const cards = this.props.cards;

		function sortCardsByElement(el) {
			return cards.filter(card => {
				return card.element === el;
			});
		};

		return (
			<div className={className}>
				{Object.keys(elements).map(prop => {
					return (<Element el={prop} value={elements[prop]} cards={sortCardsByElement(prop)} half={this.props.half} disabled={this.props.disabled} key={prop} />);
				})}
			</div>
		);
	}
});

module.exports = Elements;