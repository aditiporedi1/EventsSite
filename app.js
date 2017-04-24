'use strict';

angular.module('todoApp', [
	'ngRoute',
    'ngResource',
    'todoApp.services',
    'todoApp.controllers'
]).config(function($routeProvider) {
	  $routeProvider.when('/', {templateUrl: 'partial/list.html', controller: 'EventsCtrl'});
	  //$routeProvider.when('/todoDetail/:todoId', {templateUrl: 'partial/detail.html', controller: 'TodoDetailCtrl'});
	  //$routeProvider.when('/todoUpdate/:todoId', {templateUrl: 'partial/update.html', controller: 'TodoUpdateCtrl'});
	  $routeProvider.otherwise({redirectTo: '/'});
	})
.filter("dateFilter", function () {
    return function (item) {
        if (item != null) {
            return new Date(parseInt(item.substr(6)));
        }
        return "";
    };
});;
