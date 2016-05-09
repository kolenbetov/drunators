import React from 'react';

export default class Deck extends React.Component{
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	render() {	
		return (
			<div className='deck' id={this.props.player + '-player-deck'}>
				<div className={this.props.used_card ? 'cards height100 disabled' : 'cards height100'} id={this.props.player + '-player-cards'}> </div>
				<button onClick={this.handleClick}> X </button>
			</div>
		);
	}

	handleClick() {
		document.getElementById(this.props.player + '-player-deck').style.display = 'none';
	}

};