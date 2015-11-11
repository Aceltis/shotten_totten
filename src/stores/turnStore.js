var AppDispatcher = require('../dispatchers/appDispatcher');
var GameConstants = require('../constants/gameConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

// Internal object of card stack
var _currentTurnPlayerIndex = 0;

function changeCurrentPlayer() {
    _currentTurnPlayerIndex = 1 - _currentTurnPlayerIndex;
};

var TurnStore = assign({}, EventEmitter.prototype, {
    // Return cards stack
    getCurrentIndex: function() {
        return _currentTurnPlayerIndex;
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
            case GameConstants.CHANGE_CURRENT_PLAYER:
                changeCurrentPlayer();
                break;
            default:
                return true;
        }

        // If action was acted upon, emit change event
        TurnStore.emitChange();

        return true;
    })
});

module.exports = TurnStore;