var React = require('react'),
	Stone = require('./stone'),
	GameConstants = require('../constants/gameConstants');

module.exports = React.createClass({
	render: function() {
		var stones = [];
		for(var i = 0; i < GameConstants.STONES; i++) {
			stones.push(<Stone key={i} slots={GameConstants.STONES_SLOTS} />)
		}
		return (
			<div className="col-md-12 boardContainer">
				<ul className="nav nav-tabs nav-justified fullHeight stoneContainer">
					{stones}
				</ul>
			</div>
		);
	}
});