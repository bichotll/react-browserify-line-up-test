/** @jsx React.DOM */

var React = window.React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Header = require('./Header.js');
var Menu = require('./Menu.js');
var LineEventList = require('./LineEventList.js');

var eventService = require('./services/event-service.js');
var mountNode = document.getElementById("app");

var App = React.createClass({
    mixins: [Router.State],
    getInitialState: function(){
        return {lineEvents: []};
    },
    updateLineEvents: function(){
        var urlParams = this.getParams();
        var params = {};
        
        var today = new Date();
        if (urlParams.when === 'this-week') {
            var lastDay = new Date();
            lastDay.setDate(today.getDate() + 7);
            params['start_date'] = today;
            params['end_date'] = lastDay;
        } else {
            params['start_date'] = today;
            params['end_date'] = today;
        }
        
        if (urlParams.category !== 'all'){
            params['query'] = urlParams.category;
        }
        
        var self = this;
        eventService.getEvents(params).done(function (data) {
            self.setState({
                lineEvents: data.data
            });
        });
    },
    componentWillReceiveProps: function() {
        this.updateLineEvents();
    },
    componentDidMount: function() {
        this.updateLineEvents();
    },
    render: function () {
        return (
            <div className="container">
                <Header/>
                <Menu/>
                <LineEventList lineEvents={this.state.lineEvents} />
            </div>
          );
        }
});

var Routes = (
  <Route handler={App}>
    <Route name="/" path="/category/:category/when/:when" handler={App}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, mountNode);
});