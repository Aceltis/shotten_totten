var React = require('react'),
	Slot = require('./slot');

module.exports = React.createClass({
	render: function() {
		var topSlots = [], 
			bottomSlots = [];
		
		for(var i = 0; i < this.props.slots; i++) {
			topSlots.push(<Slot key={'top' + i} playerIndex={0} />);
			bottomSlots.push(<Slot key={'bottom' + i} playerIndex={1} />);
		}

		return (
			<li className="fullHeight">
				<div className="slots slots-top">
					{topSlots}
				</div>
				<div className="stone"></div>
				<div className="slots slots-bottom">
					{bottomSlots}
				</div>
			</li>
		);
	}
});