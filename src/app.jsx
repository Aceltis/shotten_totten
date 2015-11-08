var React = require('react'),
	ReactDOM = require('react-dom'),
	Game = require('./components/game');

//require("./stylesheets/theme.less");

var STONES = 10;

ReactDOM.render(
  <Game stones={STONES} />,
  document.getElementById('content')
);