var React = require('react');
var ItemTypes = require('./constants').ItemTypes;
var DropTarget = require('react-dnd').DropTarget;
import { connect } from 'react-redux';
import { putCreature } from '../actions/actions';
var Card =require('./card');
 
const slotTarget = {
	drop: function (props, monitor) {
        const draggedObject = monitor.getItem();
        props.dispatch(putCreature(draggedObject.card, props.index));
	},

    canDrop: function (props, monitor) {
       return props.slot === 'empty';
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
        let slotValue = this.props.slot === 'empty' ? null : <Card card={this.props.slot} />;

		return connectDropTarget(
				<div className="slot height100"> {slotValue} { isActive && this.renderOverlay('green') } </div>
			);
	}
});

module.exports = connect()(DropTarget(ItemTypes.CARD, slotTarget, collect)(Slot));