'use strict';

var React = require('react/addons');

var logoURL1 = 'images/SpaceRancher1.png';
require('styles/Header.css');

var Header = React.createClass({

  render: function () {
    return (
        <div className="Header">
          <img src={logoURL1} className = "spaceLogo" />
        </div>
      );
  }
});

module.exports = Header;
