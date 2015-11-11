var React = require('react'),
	Rules = require('./rules'),
	Player = require('./player'),
	Board = require('./board'),
	TurnStore = require('../stores/turnStore');

function getTurnState() {
	return {
		currentPlayerIndex: TurnStore.getCurrentIndex()
	}
}

var Game = React.createClass({
	getInitialState: function() {
		return {
			showRules: false,
			currentPlayerIndex: getTurnState().currentPlayerIndex,
		}
	},
	componentDidMount: function() {
		TurnStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		TurnStore.removeChangeListener(this._onChange);
	},
	isMobile: function() {
		return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	},
	toggleRules: function() {
		var showRules = this.state.showRules;
		this.setState({showRules: !showRules});
	},
	render: function() {
		var containerClasses = "st-container st-effect-sidebar",
			buttonClasses = "btn btn-primary";
		if (this.state.showRules) {
			containerClasses += " st-menu-open";
			buttonClasses += " active";
		}
		
		return (
			<div className={containerClasses}>
				<div className="st-pusher">
					<nav className="st-menu st-effect-sidebar">
						<Rules ref="rules" />
					</nav>
					<button id="show-rules" className={buttonClasses} type="button" onClick={this.toggleRules}><span className="glyphicon glyphicon-menu-right"></span><span className="glyphicon glyphicon-menu-left"></span></button>
					<div className="st-content">
						<div className="container-fluid fullHeight no-padding">
							<div className="row fullHeight">
								<Player index={0} current={this.state.currentPlayerIndex===0} />
								<Board />
								<Player index={1} current={this.state.currentPlayerIndex===1} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
	_onChange: function() {
		this.setState(getTurnState());
	}
});

module.exports = Game;