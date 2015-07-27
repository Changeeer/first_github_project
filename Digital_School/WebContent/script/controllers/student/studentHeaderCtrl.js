require(['controllers/controllers'], function(controllers) {
 	'use strict';
 	controllers.controller('headerCtrl', headerFn);
 	headerFn.$inject = ['$scope'];

 	function headerFn($scope) {
 		var vm = $scope.vm = {};
 		vm.menus = [{
 			name: '实验课堂',
 			href: 'Index'
 		}, {
 			name: '讨论区',
 			href: 'Discussion'
 		}, {
 			name: '个人中心',
 			href: 'Zone'
 		}];
 	}
 });