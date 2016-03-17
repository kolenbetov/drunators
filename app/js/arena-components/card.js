var React = require('react');

const Card = React.createClass ({
	render: function () {
		return (
			<div className={'card height100'}>
				<div> <img src="http://icons.iconarchive.com/icons/fasticon/creatures/512/orange-creature-icon.png" /></div>
		    	<div className='creature-attack'> {this.props.card.attack} </div>
		    	<div className='creature-health'> {this.props.card.health} </div>
		    	<div className='card-name'> {this.props.card.name} </div>
		    </div>
		)
	}
});

module.exports = Card;