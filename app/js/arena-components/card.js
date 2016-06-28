import React from 'react';

export default class Card extends React.Component{
	render() {
		const card = this.props.card;

		return (
			<div className={'card height100'}>
				<div> <img src={card.get('img')} /></div>
		    	<div className='creature-attack'> {card.get('attack')} </div>
		    	<div className='creature-health'> {card.get('health')} </div>
		    	<div className='card-name'> {card.get('name')} </div>
		    </div>
		)
	}

  	// componentWillReceiveProps(nextProps) {      
   //  	console.log(nextProps.card.health + '---' + this.props.card.health);
  	// }
};