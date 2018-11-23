// Creating module.
var forge = angular.module('forge', ['ngRoute']);

// Configuring routes for main page.
forge.config(function($routeProvider) {
  $routeProvider

  // Main page.
  .when('/', {
    templateUrl : 'includes/main.html',
    controller  : 'mainCtrl'
  })

  // Guide page.
  .when('/guide', {
    templateUrl : 'static/guide.html',
    controller  : 'guideCtrl'
  })

  // About page.
  .when('/about', {
    templateUrl : 'static/about.html',
    controller  : 'aboutCtrl'
  })

  // License page.
  .when('/license', {
    templateUrl : 'static/license.html',
    controller  : 'licenseCtrl'
  });
});

// Main page controller.
proud_peach.controller('mainCtrl', function($scope) {
  //
});

// Guide static page controller.
proud_peach.controller('guideCtrl', function($scope) {
  //
});

// About static page controller.
proud_peach.controller('aboutCtrl', function($scope) {
  //
});

// License static page controller.
proud_peach.controller('licenseCtrl', function($scope) {
  //
});
