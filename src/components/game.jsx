var React = require('react'),
	Rules = require('./rules'),
	Table = require('./table');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			showRules: !this.isMobile()
		}
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
			buttonClasses = "btn";
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
								<div className="col-md-12 fullHeight">
									<Table />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});