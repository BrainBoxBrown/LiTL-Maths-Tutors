app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
      }).
      otherwise({
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
      });
  }]);