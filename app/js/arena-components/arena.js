import React, { PropTypes } from 'react';
import Immutable from 'immutable';
var installDevTools = require("immutable-devtools");
import { connect } from 'react-redux';
import { endTurn, heroAttack, putCreature } from '../actions/actions';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Deck from './deck';
import Half from './half';

installDevTools(Immutable);


class Arena extends React.Component{
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
  	const heroTop = this.props.heroes.get(0);
  	const heroBottom = this.props.heroes.get(1);

    return (
      <div className="arena">
  		  <Half hero={heroTop} half={'top'} dropCard={this.props.onDropCard} />
  		  <Deck player={'top'} used_card={heroTop.get('used_card')} />
  		  <Half hero={heroBottom} half={'bottom'} dropCard={this.props.onDropCard} />
  		  <Deck player={'bottom'} used_card={heroBottom.get('used_card')} />
  		  <button className="end" onClick={this.handleClick} text="End"> End Turn </button>
  	  </div>
    );
  }

  handleClick() {
  	this.props.heroAttack();
    this.props.endTurn();
  }
};

Arena.propTypes = {
  heroes: PropTypes.instanceOf(Immutable.List
      // PropTypes.shape({
      //   id: PropTypes.string.isRequired,
      //   name: PropTypes.string.isRequired,
      //   health: PropTypes.number.isRequired,
      //   active: PropTypes.bool.isRequired,
      //   elements: PropTypes.object.isRequired,
      //   cards: PropTypes.array.isRequired,
      //   used_card: PropTypes.bool.isRequired,
      //   slots: PropTypes.array.isRequired,
      // }).isRequired
    ).isRequired,
  onDropCard: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		heroes: state
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDropCard: (card, index) => {
      dispatch(putCreature(card, index)) 
    },
    heroAttack: () => {
      dispatch(heroAttack())
    },
    endTurn: () => {
      dispatch(endTurn())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(Arena));