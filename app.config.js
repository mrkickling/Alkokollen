var app = angular.module('alkokollen', ['ngRoute']);


function welcomeController($scope){
	$scope.person = {};
	$scope.addPerson = function(){
	}
}

app.controller('appCtrl', function($scope){
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
});