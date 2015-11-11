var AppDispatcher = require('../dispatchers/appDispatcher');
var GameConstants = require('../constants/gameConstants');

var TurnStoreActions = {
    changeCurrentPlayer: function() {
        AppDispatcher.handleViewAction({
            actionType: GameConstants.CHANGE_CURRENT_PLAYER,
        });
    }
};

module.exports = TurnStoreActions;