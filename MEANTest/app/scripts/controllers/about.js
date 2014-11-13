'use strict';

/**
 * @ngdoc function
 * @name meanprojectsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meanprojectsApp
 */
angular.module('meanprojectsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
