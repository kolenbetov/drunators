import React from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';
import Card from './card';

var cardSource = {
  beginDrag: function (props) {
    return { card: props.card };
  },

	endDrag: function (props, monitor) {
		if (monitor.didDrop()) {
            let decks = document.querySelectorAll('[id$=-player-deck]');
            [].forEach.call(decks, (deck) => {
                if (deck.style.display !== 'none') {
                    deck.style.display = 'none';
                }
            });
		}
	}
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class CardInDeck extends React.Component{
	render() {	
	    var connectDragSource = this.props.connectDragSource;
    	var isDragging = this.props.isDragging;

		return connectDragSource(
		    <div className={'card-in-deck height100 ' + (this.props.disabled ? 'disabled' : '')}>
		    	<Card card={this.props.card} />
		    </div>, {dropEffect: 'copy'}
		);
	}
};

export default DragSource(ItemTypes.CARD, cardSource, collect)(CardInDeck);