var React = require('react');
var ItemTypes = require('./constants').ItemTypes;
var DropTarget = require('react-dnd').DropTarget;

const slotTarget = {
	drop: function () {
		return {name: 'slot'}
	}
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

var Slot = React.createClass ({
  renderOverlay: function (color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  },
	
	render: function () {
	const canDrop = this.props.canDrop;
	const isOver = this.props.isOver;
	const connectDropTarget = this.props.connectDropTarget;
	const isActive = canDrop && isOver;

		return connectDropTarget(
				<div className="slot height100 empty-slot"> {isActive ? this.renderOverlay('green') : this.props.slot} </div>
			);
	}
});

module.exports = DropTarget(ItemTypes.CARD, slotTarget, collect)(Slot);