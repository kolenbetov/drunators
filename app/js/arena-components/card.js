var React = require('react');

const Card = React.createClass ({
	render: function () {
		return (
			<div className={'card height100'} onMouseOver={this.onMouseOver} >
				<div> <img src={this.props.card.img} /></div>
		    	<div className='creature-attack'> {this.props.card.attack} </div>
		    	<div className='creature-health'> {this.props.card.health} </div>
		    	<div className='card-name'> {this.props.card.name} </div>
		    </div>
		)
	},

	onMouseOver: function () {
		this.forceUpdate();
	}
});

module.exports = Card;