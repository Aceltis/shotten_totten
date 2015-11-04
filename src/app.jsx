var React = require('react'),
	ReactDOM = require('react-dom'),
	Game = require('./components/game');

require("./stylesheets/theme.less");

ReactDOM.render(
  <Game />,
  document.getElementById('content')
);