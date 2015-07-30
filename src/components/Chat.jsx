'use strict';

var React = require('react/addons');


require('styles/Chat.css');

var Chat = React.createClass({

  render: function () {
    return (
        <div className="Chat">
          <p>Content for Chat</p>
        </div>
      );
  }
});

module.exports = Chat;
