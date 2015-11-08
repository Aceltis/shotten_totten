var AppDispatcher = require('../dispatchers/appDispatcher');
var CardConstants = require('../constants/cardConstants');

var CardStoreActions = {
    createStack: function() {
        AppDispatcher.handleViewAction({
            actionType: CardConstants.CREATE_STACK
        });
    },

    firstDraw: function() {
        AppDispatcher.handleViewAction({
            actionType: CardConstants.FIRST_DRAW
        });
    },

    getCard: function() {
        AppDispatcher.handleViewAction({
            actionType: CardConstants.GET_CARD
        });
    }
};

module.exports = CardStoreActions;