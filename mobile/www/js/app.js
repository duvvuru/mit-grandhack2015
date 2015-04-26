var pulsymetricApp = angular.module('pulsymetricApp', [
  'ngRoute',
  'pulsymetricControllers'
]);

pulsymetricApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      when('/setup/patient/:patientId/demographics', {
        templateUrl: 'partials/setup-patient-demographics.html',
        controller: 'SetupPatientController'
      }).
      when('/setup/patient/:patientId/chads', {
        templateUrl: 'partials/setup-patient-chads.html',
        controller: 'SetupPatientController'
      }).
      when('/setup/patient/:patientId/supporters', {
        templateUrl: 'partials/setup-patient-supporters.html',
        controller: 'SetupPatientController'
      }).
      when('/setup/provider/:providerId', {
        templateUrl: 'partials/setup-provider.html',
        controller: 'SetupProviderController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);