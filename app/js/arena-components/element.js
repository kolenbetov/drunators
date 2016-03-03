var React = require('react');
var ReactDOM = require('react-dom');
var Cards = require('./cards');
var renderSubtreeIntoContainer = require('react-dom').unstable_renderSubtreeIntoContainer;

var Element = React.createClass ({
	render: function () {
		const className = 'element element-' + this.props.el + ' height100';
		
		return (
			<div className={className}> 
				<button disabled={this.props.disabled} onClick={this.handleClick} className='height100'> {this.props.value} </button>
			</div>
		);
	},

	handleClick: function () {

		renderSubtreeIntoContainer(this, <Cards cards={this.props.cards} curValue={this.props.value} />, document.getElementById(this.props.half + '-player-cards'));	
		document.getElementById(this.props.half + '-player-deck').style.display = 'initial';
	}
});

module.exports = Element;