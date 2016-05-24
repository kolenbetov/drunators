import React, { PropTypes } from 'react';

export default class Avatar extends React.Component{
	render() {
		const image = 'app/images/heroes/' + this.props.id + '.png';

		return (
				<div className="avatar height100">
					<div className="hero-image">
						<img src={image} alt={this.props.name} />
					</div>
					<div className="hero-name bottom">
						{this.props.name} {this.props.health}
					</div>
				</div>
		);
	}
};

Avatar.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	health: PropTypes.number.isRequired
};