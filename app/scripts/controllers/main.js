'use strict';

angular.module('wojsApp').controller('MainCtrl',['$scope','$http',
	function($scope, $http){


		$scope.name = 'Bob';

		// console.log('ctrl scope', $scope);
		
		$scope.posts = [];
		$scope.hello = "world";
		$scope.posts = [
		{
			name: "This is post about cats"
		},
		{
			name: "This is post about dogs"
		}
		];

		$scope.getPosts = function() {
			return $scope.posts;
		};

		// console.log('scope from controller', $scope)
		$scope.name1 = "harry";


		$scope.color = '#333333';


		// Переменная реверс
		$scope.reverse = function(){
			// Пишем функцию revers
			// т.е. разобъём переменную $scope.name по символьно,
			// вызовим функцию reverse которая перевернёт её 
			// и склеем её обрано join
			$scope.name = $scope.name.split('').reverse().join('');

		};

	}

]);
