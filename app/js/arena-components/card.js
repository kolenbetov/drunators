import React from 'react';

export default class Card extends React.Component{
	render() {
		return (
			<div className={'card height100'}>
				<div> <img src={this.props.card.img} /></div>
		    	<div className='creature-attack'> {this.props.card.attack} </div>
		    	<div className='creature-health'> {this.props.card.health} </div>
		    	<div className='card-name'> {this.props.card.name} </div>
		    </div>
		)
	}

  	// componentWillReceiveProps: function(nextProps) {      
   //  	console.log(nextProps.card.health + '---' + this.props.card.health);
  	// }
};