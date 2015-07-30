'use strict';

var React = require('react/addons');


require('styles/Footer.css');

var Footer = React.createClass({

  render: function () {
    return (
        <div className="Footer-Container">
          <div className="Footer">Content for Footer</div>
        </div>
      );
  }
});

module.exports = Footer;
