'use strict';

/**
 * @ngdoc function
 * @name meanprojectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanprojectsApp
 */
angular.module('meanprojectsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
