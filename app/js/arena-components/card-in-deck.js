var React = require('react');
var ItemTypes = require('./constants').ItemTypes;
var DragSource = require('react-dnd').DragSource;
var Card = require('./card');

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

const CardInDeck = React.createClass ({
	render: function () {	
	    var connectDragSource = this.props.connectDragSource;
    	var isDragging = this.props.isDragging;

		return connectDragSource(
		    <div className={'card-in-deck height100 ' + (this.props.disabled ? 'disabled' : '')}>
		    	<Card card={this.props.card} />
		    </div>, {dropEffect: 'copy'}
		);
	}
});

module.exports = DragSource(ItemTypes.CARD, cardSource, collect)(CardInDeck);