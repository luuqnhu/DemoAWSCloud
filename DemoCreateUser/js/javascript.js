var app = angular.module('myApp', ['ngRoute']);

app.config(function ($httpProvider) {
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
});

app.controller('myCtrl', function($scope, $http, $location) {
		$scope.create = function() {
			//window.alert("hi!");
			var username = $('#username').val();
			var email = $('#email').val();
			var password = $('#password').val();
			var parameter = JSON.stringify({username:username, password:password, email: email});
			//window.alert(parameter);
			$http.post('http://localhost:8080/api/users', parameter)
				.then(function() {
					window.alert("Successfully!!!");
				});
		}
});
