'use strict';

angular.module('wojsApp')
	.controller('TodoCtrl',['$scope','$rootScope',
		function($scope, $rootScope){
			$scope.tasks=[];
			var taskData = localStorage['tasksList'];
			if (taskData !== undefined){
				$scope.tasks = JSON.parse(taskData);
			}

			$scope.searchEnter = function(){
				if( event.which == 1 && $scope.task !=""){  // бла-бла  и не пустой ввод
					$scope.addTask1();
				}
			};
			$scope.addTask1 = function () {
				$scope.tasks.push({'taskMessage':$scope.task, 'status1':false});
				console.log($scope.tasks);
				$scope.task = '';  //при нажатии на ввод инпут очищается
				localStorage['tasksList'] = JSON.stringify($scope.tasks);
				console.log(localStorage);


			};
			$scope.contentEdit = function (msg) {
				console.log($scope.tasks);
						for(var i = 0; i < $scope.tasks.length; i++ ){
					if($scope.tasks[i].taskMessage == msg){
						$scope.tasks[i].taskMessage = event.target.innerText;
					}
				}
				localStorage['tasksList'] = JSON.stringify($scope.tasks);
				console.log($scope.tasks);

				event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";

			};

			$scope.enterAgain = function(msg){
				if( event.which == 32 && msg !=""){
					$scope.contentEdit(msg);
				}

			};

		}

]);