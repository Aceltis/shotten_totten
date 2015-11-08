var AppDispatcher = require('../dispatcher/appDispatcher');
var CardConstants = require('../constants/cardConstants');

var CardStoreActions = {
    createStack: function() {
        AppDispatcher.handleAction({
            actionType: CardConstants.CREATE_STACK
        });
    },

    firstDraw: function() {
        AppDispatcher.handleAction({
            actionType: CardConstants.FIRST_DRAW
        });
    },

    getCard: function() {
        AppDispatcher.handleAction({
            actionType: CardConstants.GET_CARD
        });
    }
};

module.exports = CardStoreActions;