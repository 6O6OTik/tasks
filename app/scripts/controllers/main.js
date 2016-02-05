'use strict';

/**
 * @ngdoc function
 * @name wojsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wojsApp
 */
angular.module('wojsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
