'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

import Container from './Container.jsx';

var SpacerancherApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <Container />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = SpacerancherApp;
