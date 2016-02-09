'use strict';

angular.module('wojsApp').directive('sas', function() {
	return {
		link: function(scope, element, attrs){
			element.on('click', function () {
				if ( element.text () === 'Bob') {
					element.text('fix');
				} else {
					element.text('Bob');
				}
			});
		}
	};
})

.directive('fooBar', function(){
	return {
		restrict: 'E',
		transclude: true,
		template: 'This is my directive template',

		link : function(scope,element,attrs, ctrl, transclude){
			// console.log('This is my directive');
			// transclude это функция которая принемает первым пораметром scope и вторым это 
			// функцию первый аргумент будет clone и вторым scope
			transclude(scope, function(clone, scope){ 
				// По факту clone  это содержимое нашего атребута foo-bar {{name}}
				// scope клонируемого элемента 

				// console.log('!',clone, scope);

				// Элемнт тут наша директива. 
				// Результат мы берём наш шаблон template: 'This is my directive',
				// и заапендим в конец его клон
				element.append(clone);
			});
		}
	};
})
.directive('post', function(){
	return {
		template: "<div ng-repeat='post in getPosts()'>{{post.name}}</div>",
		link: function(scope,element,attrs){
		//	console.log('scope',scope)
			// scope.hello= 'Hi';
		}
	}

})

.directive('book', function(){
	return {
		scope: true,
		template: "My name is dir {{name1}}",
		link: function(scope, element, attrs) {
		//	console.log('scope from directive', scope);
		//	console.log(scope.name1);
		}
	};
})
// Изолированый scope в директивах
.directive('fooQwer', function(){
	return {
		scope: {
			// Если нужна директива только для чтения из контроллера мы не будем её менять 
			// тогда всегда используйте '@'
			name: '@',
			// Испльзование знака = знак равно означает двух сторонний биндинг 
			// между переменной в контроллере и директиве
			// Если меняется значени в одном месте, то и измениться значение привязанного эначение 

			color : '=',

			// Выполнение вырожения из родительского контроллера 
			// Знак амперсанта & означает выполнить вырожение из родительского контроллера 
			// Исользуется обычно когда нужно вызвать какую либо функцию

			reverse: '&'



		},
		template: "<div>My name is {{name}} <input type='text' ng-model='name'></div>" +
		"<div>My color is {{color}} <input type='text' ng-model='color'></div>" +
		"<button ng-click ='reverse()'>Reverse name</button>",
		link: function(scope,element, attrs){
			// console.log('scope from directive foo-qwer FFuuuu');
		}
	};
})

.directive('wrapIn', function($templateCache){
	return {
		transclude: 'element',
		link: function(scope, element, attrs, ctrl, transclude){
			var template = $templateCache.get(attrs.wrapIn);
			var templateElement = angular.element(template);
			transclude(scope, function(clone){
				//Сперва в element т.е в нашу директиву,которая пока, что пустая из-за 
				//того, что работает transclude в саммом начале мы добавляем 
				//templateElement т.е. в начало директивы добавляем наш div class=red(HTML) и
				// Дальше в него append-им клон 
				// clone у нас наша форма, её мы апэндим как раз в нутрь div class=red(HTML)
				element.after(templateElement.append(clone));

			});

		}
	};
})
// Compile 
.directive('uiSource', function(){
	return {
		compile: function (elem){
			console.log(elem);
			var pre = angular.element('<pre class="prettyprint"></pre');
			// var pretty = prettyPrintOne(elem.html());
			// console.log(pretty);
			console.log(pre);
		}

	};
});

