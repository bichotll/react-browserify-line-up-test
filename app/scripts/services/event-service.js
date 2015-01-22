'use strict';

var config = require('./../services/config.js');
var $ = require('jquery');
var _ = require('underscore');

/**
 * To get all related to events from api
 */
var eventService = function () {
    var urlBase = config.api.url + '/event';
    var definedData = _.extend(config.predefined.eventFactoryData, {api_key: config.api.key});
//    var data = angular.extend({}, params, configConstant.predefined.eventFactoryData);
//                data['api_key'] = configConstant.api.key;
//                data['callback'] = 'JSON_CALLBACK';
    this.getEvents = function (params) {
        var data = _.extend(definedData, params);
        return $.ajax({
            url: urlBase,
            dataType: 'jsonp',
            data: data
        });
    };

//    dataFactory.getEvents = function (params) {
//        var data = angular.extend({}, params, configConstant.predefined.eventFactoryData);
//        data['api_key'] = configConstant.api.key;
//        data['callback'] = 'JSON_CALLBACK';
//        return $http.jsonp(urlBase, {
//            params: data,
//            isArray: true
//        });
//    };

};

module.exports = new eventService();
