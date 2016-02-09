'use strict';
angular.module('wojsApp')
.run(function($templateCache){
	
	$templateCache.put('bookmarks.html',"<div ng-repeat='book in books'>{{book.name}}</div>");
});

angular.module('wojsApp')
	.directive('fooUser', function($templateCache){
		var BOOKS = [
			{
				id: 1,
				name: 'Ember.Js'
			},
			{
				id: 2,
				name: 'Angular.js'
			}
		];
		return {
			restrict: 'E',

			templateUrl: "bookmarks.html",
			link : function(scope,element,attrs){
				// console.log('directive');
				scope.books = BOOKS;
				// Метод $temolateCache.info() позволяет увидеть количество шаблонов 
				// которые находятся сейчас в templateCache
				// console.log($templateCache.info());
		}
	};
});
	
	