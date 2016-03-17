var React = require('react');

const Deck = React.createClass ({
	render: function () {	
		return (
			<div className='deck' id={this.props.player + '-player-deck'}>
				<div className={this.props.used_card ? 'cards height100 disabled' : 'cards height100'} id={this.props.player + '-player-cards'}> </div>
				<button onClick={this.handleClick}> X </button>
			</div>
		);
	},

	handleClick: function () {
		document.getElementById(this.props.player + '-player-deck').style.display = 'none';
	}

});

module.exports = Deck;
// <div className='deck-wrapper'>
// </div>