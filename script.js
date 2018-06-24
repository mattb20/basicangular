// Instantiate app, 'myApp' parameter must match what
// is in ng-app
var myApp = angular.module('myApp', []);

// Create controller, the 'ToddlerCtrl' parameter
// must match an ng-controller directive
myApp.controller('ToddlerCtrl', function($scope) {
  // Define array of Toddler objects
  $scope.toddlers = [
    {
      "name": "Toddler1",
      "birthday": "1/2/2017",
      "happy": true
    },
    {
      "name": "Toddler2",
      "birthday": "31/7/2016",
      "happy": true
    },
    {
      "name": "SomekidfromRugrats",
      "birthday": "27/12/2017",
      "happy": true
    }
  ];
});
