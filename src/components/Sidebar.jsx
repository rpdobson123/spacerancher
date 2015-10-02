'use strict';

var React = require('react/addons');


require('styles/Sidebar.css');

import Chat from './Chat.jsx';

var Sidebar = React.createClass({

  render: function () {
    return (
        <div className="Sidebar">
           <p>I love Amy Licht</p>
          <Chat />
        </div>
      );
  }
});

module.exports = Sidebar;
