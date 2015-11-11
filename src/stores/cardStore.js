var AppDispatcher = require('../dispatchers/appDispatcher');
var CardConstants = require('../constants/cardConstants');
var GameConstants = require('../constants/gameConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

// Internal object of card stack
var _cards = [];
var _hands = [];
var _selectedCard = [];

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

(function createStack() {
    // Create a random stack off all cards in game
    var cardsPopulation = [];
    var colors = CardConstants.COLORS;
    var values = CardConstants.VALUES;

    for (var i = 0; i < colors.length; i++) {
        var color = colors[i];
        for (var j = values.min; j <= values.max; j++) {
            cardsPopulation.push({
                color: color,
                value: j
            });
        }
    }

    // Shuffle the cards
    _cards = shuffle(cardsPopulation);
    _hands[0] = firstDraw();
    _hands[1] = firstDraw();
})();

function firstDraw() {
    // Get first cards
    var numberCard = GameConstants.CARDS_IN_HAND;
    var draw = [];

    for (var i = 0; i < numberCard; i++) {
        var card = _cards.pop();
        draw.push(card);
    }
    return draw;
};

function drawOneCard() {
    // Return card on top
    return _cards.pop();
};

function saveSelectedCard(playerIndex, cards) {
    _hands[playerIndex] = cards;
};

function removeSelectedCard(playerIndex) {
    var i = 0,
        length = _hands[playerIndex].length;
    for (i = 0; i < length; i++) {
        var card = _hands[playerIndex][i];
        if (card.isSelected) {
            _hands[playerIndex].splice(i, 1);
            break;
        }
    }

    if (_cards.length > 0) {
        var card = drawOneCard();
        _hands[playerIndex].push(card);
    }
};

var CardStore = assign({}, EventEmitter.prototype, {
    // Return cards stack
    getCards: function() {
        return _cards;
    },

    getHand: function(playerIndex) {
        return _hands[playerIndex];
    },

    getSelectedCard: function(playerIndex) {
        var i = 0,
            length = _hands[playerIndex].length;
        for (i = 0; i < length; i++) {
            var card = _hands[playerIndex][i];
            if (card.isSelected)
                return card;
        }
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;

        // Define what to do for certain actions
        switch (action.actionType) {
            case CardConstants.SELECT_PLAYER_CARD:
                saveSelectedCard(action.playerIndex, action.cards);
                break;
            case CardConstants.REMOVE_SELECTED_CARD:
                removeSelectedCard(action.playerIndex);
                break;
            default:
                return true;
        }

        // If action was acted upon, emit change event
        CardStore.emitChange();

        return true;
    })
});

module.exports = CardStore;