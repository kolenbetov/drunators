import React from 'react';
import { connect } from 'react-redux';
import { endTurn, heroAttack } from '../actions/actions';
var HTML5Backend = require('react-dnd-html5-backend');
var DragDropContext = require('react-dnd').DragDropContext;
var Deck = require('./deck');
var Half = require('./half');

const Arena = React.createClass({
  render: function() {
  	const heroTop = this.props.heroes[0];
  	const heroBottom = this.props.heroes[1];

    return (
      <div className="arena">
  		<Half hero={heroTop} half={'top'} />
  		<Deck player={'top'} used_card={heroTop.used_card} />
  		<Half hero={heroBottom} half={'bottom'} />
  		<Deck player={'bottom'} used_card={heroBottom.used_card} />
  		<button className="end" onClick={this.onClick} text="End"> End Turn </button>
  	  </div>
    );
  },

  onClick: function () {
  	this.props.dispatch(heroAttack());
  }
});

const mapStateToProps = (state) => {
	return {
		heroes: state
	}
}

// const ConnectedArena = connect(mapStateToProps)(Arena);

export default connect(mapStateToProps)(DragDropContext(HTML5Backend)(Arena));