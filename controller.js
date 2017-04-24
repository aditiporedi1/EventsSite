'use strict';

angular.module("todoApp.controllers", [])
	.controller("EventsCtrl", function($rootScope, $scope, $http){
        $scope.eventnames = [];
        $scope.eventdates = [];
        $scope.eventvenue = [];
        $scope.eventsArr = [];
        $scope.eventsFoodArr = [];
        $scope.eventsHealthArr = [];


        function _getEvents() {

            //Getting Data for Music events from Eventful API with REST call
            $http.get('http://api.eventful.com/rest/events/search?...&q=music&location=London&app_key=wwBbdkNz33t5R5T6').
            then(function(response) {
                var x2js = new X2JS();
                $scope.eventsArr = x2js.xml_str2json(response.data);
            	console.log($scope.eventsArr);
                //$scope.eventsArr = response.data;
            });


            //Getting Data for Food events from Eventful API with REST call
            $http.get('http://api.eventful.com/rest/events/search?...&q=food&location=London&app_key=wwBbdkNz33t5R5T6').
            then(function(response) {
                var x2js = new X2JS();
                $scope.eventsFoodArr = x2js.xml_str2json(response.data);
                console.log($scope.eventsFoodArr);
                //$scope.eventsArr = response.data;
            });

            //Getting Data for Health events from Eventful API with REST call
            $http.get('http://api.eventful.com/rest/events/search?...&q=health&location=London&app_key=wwBbdkNz33t5R5T6').
            then(function(response) {
                var x2js = new X2JS();
                $scope.eventsHealthArr = x2js.xml_str2json(response.data);
                console.log($scope.eventsHealthArr);
                //$scope.eventsArr = response.data;
            });



        }


        _getEvents();

    });