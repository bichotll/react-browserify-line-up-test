'use strict';

var React = require('react/addons');
var _ = require('underscore');
var LineEvent = require('./LineEvent.js');

var config = require('./services/config.js');

//require('../../styles/LineEventList.sass');


var LineEventList = React.createClass({
  render: function () {
    var self = this;
    var lineEventRows = function(){
        //map to ReactElements
        var lineEvents = _.map(self.props.lineEvents, function(lineEvent){
            return (<LineEvent eventData={lineEvent} />);
        });
        
        //chunk
        var arrayRows = new Array();
        for (var i = 0, j = lineEvents.length; i < j; i += 3) {
            arrayRows.push(lineEvents.slice(i, i + 3));
            // do whatever
        }
        
        //arrayRows
        var rows = new Array();
        rows = _.map(arrayRows, function(arrayRow, key){
            return (<div className="row" >{arrayRow}</div>);
        });
        return rows;
    };
    
    return (
            <div>{lineEventRows()}</div>
            );
  }
});

module.exports = LineEventList;