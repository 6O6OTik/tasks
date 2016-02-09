'use strict';

angular.module('wojsApp').controller('PageCtrl',['$scope',
	function($scope){
	// $scope.money = "244";
		console.log('pageCtrl');
		$scope.money1 = '1.22$';
		$scope.money2 = '$52.33';
		$scope.money3 = '4.33';
	}

])
.filter('moneyFilter', function(){
	return function (str) {
		var lastChar = str.slice(-1),
			firstChar = str.slice(0, 1),
			slicedPart;

			if (lastChar === '$') {
				slicedPart = str.slice(0, str.length - 1);
				console.log(slicedPart);
				return '$' + slicedPart;
			} else if ( firstChar === "$"){
				return str;
			} else {
				return '$' + str;
			}

			console.log('str',str);

		};
	});



