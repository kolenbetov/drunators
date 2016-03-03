var React = require('react');
var ItemTypes = require('./constants').ItemTypes;
var DragSource = require('react-dnd').DragSource;

var cardSource = {
  beginDrag: function (props) {
    return {};
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
		    <div className={'card-in-deck height100 ' + (this.props.disabled ? 'disabled' : '')} style={{opacity: isDragging ? 0.5 : 1}}>
		    	<div> <img src="http://icons.iconarchive.com/icons/fasticon/creatures/512/orange-creature-icon.png" /></div>
		    	<div className='creature-attack'> {this.props.card.attack} </div>
		    	<div className='creature-health'> {this.props.card.health} </div>
		    	<div className='card-name'> {this.props.card.name} </div>
		    </div>, {dropEffect: 'copy'}
		);
	}
});

module.exports = DragSource(ItemTypes.CARD, cardSource, collect)(CardInDeck);