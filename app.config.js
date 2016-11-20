var app = angular.module('alkokollen', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "start.html",
    	controller: welcomeCtrl
    })
    .when("/app", {
        templateUrl : "app.html",
    	controller: appCtrl
    })
    .otherwise({
    	templateUrl: "start.html",
    	controller: welcomeCtrl
    })
});

function welcomeCtrl($scope, $location){
	$scope.person = {};
	$scope.addPerson = function(){
		console.log('adding person');
		$location.path('/app')
	}
}

function appCtrl($scope){
	$scope.drinks = []
	$scope.user = {}

	$scope.addDrink = function(){
		console.log('adding drink');
		$scope.drinks[$scope.drinks.length] = {
			amount: $scope.amount,
			percentage: $scope.percentage,
			time: $scope.time,
		}


	}
}