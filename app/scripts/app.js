'use strict';


angular
	.module('wojsApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/todo', {
				templateUrl: 'views/todo.html',
				controller: 'TodoCtrl'
			})
			.when('/page', {
				templateUrl: 'views/page.html',
				controller: 'PageCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.html5Mode(true);
	});
