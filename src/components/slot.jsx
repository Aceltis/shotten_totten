var React = require('react'),
	Card = require('./card'),
	CardStore = require('../stores/cardStore'),
	CardActions = require('../actions/cardStoreActions'),
	TurnActions = require('../actions/turnStoreActions');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			card: null
		}
	},
	putCard: function() {
		if (this.state.card === null)
		{
			var card = CardStore.getSelectedCard(this.props.playerIndex);
			if (card) {
				//card.isSelected = false;
				this.setState({card: card});
				CardActions.removeSelectedCard(this.props.playerIndex);
				TurnActions.changeCurrentPlayer();
			}
		}
	},
	render: function() {
		var card = null;
		if(this.state.card !== null)
			card = <Card card={this.state.card} />
		return (
			<div className="slot" onClick={this.putCard}>
				{card}
			</div>
		);
	}
});