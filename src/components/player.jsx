var React = require('react'),
	CardContainer = require('./cardContainer'),
	CardStore = require('../stores/cardStore'),
	CardActions = require('../actions/cardStoreActions');

function getCardState(playerIndex) {
	return {
		cards: CardStore.getHand(playerIndex)
	}
}

var Player = React.createClass({
	getInitialState: function() {
		return {
			cards: getCardState(this.props.index).cards
		}
	},
	componentDidMount: function() {
		CardStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		CardStore.removeChangeListener(this._onChange);
	},
	drawOneCard: function() {
		var cards = this.state.cards;
		var newCard = CardStore.drawOneCard();
	},
	selectCard: function(cardIndex) {
		// Clear other selected
		var cards = this.state.cards;
		var i = 0,
			length = cards.length;
		for(var i = 0; i < length; i++) {
			cards[i].isSelected = false;
		}

		cards[cardIndex].isSelected = true;
		CardActions.selectCard(this.props.index, cards);
	},
	render: function() {
		var cards = [];
		var that = this;

		this.state.cards.forEach(function(card, index) {
			cards.push(<CardContainer key={index} index={index} card={card} isHidden={!that.props.current} onSelect={that.selectCard} />);
		});

		return (
			<div className="col-md-12 playerContainer">
				<ul className="nav nav-tabs nav-justified fullHeight cardContainer">
					{cards}
				</ul>			
			</div>
		);
	},
	_onChange: function() {
		this.setState(getCardState(this.props.index));
	}
});

module.exports = Player;