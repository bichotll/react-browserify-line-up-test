'use strict';

var React = require('react/addons');

//require('../../styles/Header.sass');

var Header = React.createClass({
  render: function () {
    return (
        <div className="header"> 
            <a className="btn btn-default pull-right" href="http://lineupnow.com/submit/" target="_blank">Add event</a>
            <h3 className="text-muted">LineUp is cool! Let's improve it!</h3>
        </div>
      );
  }
});

module.exports = Header;