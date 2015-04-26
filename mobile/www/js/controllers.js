var pulsymetricControllers = angular.module('pulsymetricControllers', []);

pulsymetricControllers.controller('HomeController', ["$scope", 
  function($scope) {
    $scope.options = [
      {'name': 'Setup Patient', 'href': '#/setup/patient/1/demographics'},
      {'name': 'Setup Provider', 'href': '#/setup/provider/1'}
    ];
  }]);

pulsymetricControllers.controller('SetupPatientController', [ "$scope", "$http", "$routeParams", "$rootScope",
  function(scope, http, routeParams, rootScope) {

    scope.patientId = routeParams.patientId;

    if (!rootScope.patient) {

      http.get('http://pulsymetric.azurewebsites.net/api/providers/1/patients').success(function(data) {
        scope.patient = data[0];
        rootScope.patient = data[0];
      });

    }
    else {

      scope.patient = rootScope.patient;
console.log(scope.patient);
    }
  }]);

