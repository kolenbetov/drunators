import React from 'react';
import Cards from './cards';
import { unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer } from 'react-dom';

export default class Element extends React.Component{
		constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		const className = 'element element-' + this.props.el + ' height100';
		
		return (
			<div className={className}> 
				<button disabled={this.props.disabled} onClick={this.handleClick} className='height100'> {this.props.value} </button>
			</div>
		);
	}

	handleClick() {
		renderSubtreeIntoContainer(this, <Cards cards={this.props.cards} curValue={this.props.value} />, document.getElementById(this.props.half + '-player-cards'));	
		document.getElementById(this.props.half + '-player-deck').style.display = 'initial';
	}
};