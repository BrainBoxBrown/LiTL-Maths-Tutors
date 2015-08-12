app.controller("LoginController", ['$scope', '$location', function($scope, $location){
	$scope.goHome = function (){
		$location.path("/home");
	};
}]);