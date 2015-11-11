var React = require('react'),
	Card = require('./card');

module.exports = React.createClass({
	selectCard: function() {
		this.props.onSelect(this.props.index);
	},
	render: function() {
		return (
			<li className="fullHeight" onClick={this.selectCard}>
				<Card card={this.props.card} isHidden={this.props.isHidden} />
			</li>
		);
	}
});