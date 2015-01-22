'use strict';

var React = require('react/addons');

//require('../../styles/Menu.sass');

var Menu = React.createClass({
  render: function () {
    return (
        <div>
            <ul className="nav nav-pills">
                <li>
                    <a href="#category/all/when/this-week">All</a>
                </li>
                <li>
                    <a href="#category/music/when/this-week">Music</a>
                </li>
            </ul>
            <ul className="nav nav-pills">
                <li>
                    <a href="#category/music/when/today">Today</a>
                </li>
                <li>
                    <a href="#category/music/when/this-week">This week</a>
                </li>
            </ul>
        </div>
      );
  }
});

module.exports = Menu;


