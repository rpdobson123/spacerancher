'use strict';

var React = require('react/addons');

require('styles/Container.css');

import Sidebar from './Sidebar.jsx';
import Content from './Content.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

var Container = React.createClass({

  render: function () {
    return (
        <div className="Container">
          <div>
            <div className="spacer-160"></div>
            <Header/>
          </div>
          <div>
            <Sidebar />
            <Content />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      );
  }
});

module.exports = Container;
