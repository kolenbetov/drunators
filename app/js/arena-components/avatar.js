var React = require('react');

module.exports = React.createClass ({
	render: function () {
	const image = 'app/images/heroes/' + this.props.id + '.png';

		return (
				<div className="avatar height100">
					<div className="hero-image">
						<img src={image} alt={this.props.name} />
					</div>
					<div className="hero-name bottom">
						{this.props.name}
					</div>
				</div>
			);
	}
});