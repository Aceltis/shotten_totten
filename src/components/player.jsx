var React = require('react'),
	Card = require('./card'),
	CardStore = require('../stores/cardStore'),
	CardActions = require('../actions/cardStoreActions');

function getCardState() {
	return {
		cards: CardStore.getLastDraw()
	}
}

var Player = React.createClass({
	getInitialState: function() {
		return {
			cards: getCardState().cards
		}
	},
	componentWillMount: function() {
		CardActions.firstDraw();
	},
	render: function() {
		console.log(this.state.cards);
		return (
			<div>
				Hello
			</div>
		);
	}
});

module.exports = Player;