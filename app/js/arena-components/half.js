var React = require('react');
var Avatar = require('./avatar');
var Actions = require('./actions');

const Half = React.createClass({
	render:function () {
		var hero = this.props.hero;
		const className = this.props.half + '-player';

		return (
			<div className={className} >
				<Avatar name={hero.name} id={hero.id} />
				<Actions elements={hero.elements} cards={hero.cards} slots={hero.slots} disabled={!hero.active} half={this.props.half} />
			</div>
			);
	}
});

module.exports = Half;