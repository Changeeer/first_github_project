require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('stuManagementCtrl', stuManagementFn);
  stuManagementFn.$inject = ['$scope', '$timeout'];

  function stuManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.changeCollege = function() {
      $timeout(function() {
        vm.defaultClasses = vm.classmanagement[vm.defaultCollege][0];
      });
    }
    vm.defaultCollege = '计算机学院';
    vm.defaultClasses = '软件工程1班';
    vm.classmanagement = {
      "计算机学院": ["软件工程1班", "软件工程2班", "软件工程3班", "软件工程4班"],
      "自动化学院": ["数字与媒体1班", "数字与媒体2班", "数字与媒体3班", "数字与媒体4班"]
    }
    vm.gradeDate = [{
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006245",
      "name": "陈杰勇",
      "college": '自动化学院',
      "classes": '软件工程2班'
    }, {
      "number": "3113006244",
      "name": "何伟婷",
      "college": '自动化学院',
      "classes": '软件工程2班'
    }, {
      "number": "3113006244",
      "name": "刘洁勇",
      "college": '自动化学院',
      "classes": '软件工程2班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程3班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程3班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程3班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程3班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "college": '自动化学院',
      "classes": '软件工程1班'
    }];
  }
});