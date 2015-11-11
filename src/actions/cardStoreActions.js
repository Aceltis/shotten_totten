var AppDispatcher = require('../dispatchers/appDispatcher');
var CardConstants = require('../constants/cardConstants');

var CardStoreActions = {
    selectCard: function(playerIndex, cards) {
        AppDispatcher.handleViewAction({
            actionType: CardConstants.SELECT_PLAYER_CARD,
            playerIndex: playerIndex,
            cards: cards
        });
    },
    removeSelectedCard: function(playerIndex) {
        AppDispatcher.handleViewAction({
            actionType: CardConstants.REMOVE_SELECTED_CARD,
            playerIndex: playerIndex
        });
    },
};

module.exports = CardStoreActions;