var React = require('react');

const Deck = React.createClass ({
	render: function () {	
		return (
			<div className='deck' id={this.props.player + '-player-deck'}> 
				<div className='cards height100' id={this.props.player + '-player-cards'}> </div>

			</div>
		);
	},

	handleClick: function () {
		document.getElementById(this.props.player + '-player-deck').style.display = 'none';
	}

});

module.exports = Deck;


				// <div className='deck-wrapper'>
				// 	<button onClick={this.handleClick}> X </button>
				// </div>