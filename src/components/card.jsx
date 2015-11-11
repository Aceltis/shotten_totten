var React = require('react');

module.exports = React.createClass({
	selectCard: function() {
		this.props.onSelect(this.props.index);
	},
	render: function() {
		var cardClasses = "card " + this.props.card.color;
		if(this.props.card.isSelected)
			cardClasses += " selected";

		var content = <span>{this.props.card.value}</span>;

		if (this.props.isHidden) {
			cardClasses += " hidden";
			content = null;
		}
		return (
			<div className={cardClasses}>
				{content}
			</div>
		);
	}
});