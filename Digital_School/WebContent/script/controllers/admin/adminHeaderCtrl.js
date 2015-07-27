require(['controllers/controllers'], function(controllers) {
 	'use strict';
 	controllers.controller('headerCtrl', headerFn);
 	headerFn.$inject = ['$scope'];

 	function headerFn($scope) {
 		var vm = $scope.vm = {};
 		vm.menus = [{
 			name: '实验管理',
 			href: 'sygl'
 		}, {
 			name: '成绩管理',
 			href: 'cjgl'
 		}, {
 			name: '教师管理',
 			href: 'jsgl'
 		}, {
 			name: '学生管理',
 			href: 'xsgl'
 		}, {
 			name: '公告栏',
 			href: 'board'
 		}, {
 			name: '讨论区',
 			href: 'forum'
 		}];
 	}
 });