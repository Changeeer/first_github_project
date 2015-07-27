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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('boardManagementCtrl',boardManagementFn);
         boardManagementFn.$inject=['$scope','$timeout','$sce'];
         function boardManagementFn($scope,$timeout,$sce){
		    $scope.editorConfig={
		        focus:true //自动把光标放到UEditor中。测试config配置
		    }
		    $scope.nowTime=new Date();
		    $scope.$watch('content',function(){
		        $scope.html = $sce.trustAsHtml($scope.content);
		        $scope.nowTime=new Date();
		    })       
       }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('gradeManagementCtrl', gradeManagementFn);
  gradeManagementFn.$inject = ['$scope', '$timeout'];

  function gradeManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.changeCollege = function() {
      $timeout(function() {
        vm.defaultClasses = vm.classmanagement[vm.defaultCollege][0];
      });
    }
    vm.defaultCollege = '计算机学院';
    vm.defaultCourse = '用拉伸法测量杨氏弹性模量';
    vm.defaultClasses = '软件工程1班';
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    vm.classmanagement = {
      "计算机学院": ["软件工程1班", "软件工程2班", "软件工程3班", "软件工程4班"],
      "自动化学院": ["数字与媒体1班", "数字与媒体2班", "数字与媒体3班", "数字与媒体4班"]
    }
    vm.gradeDate = [{
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006245",
      "name": "陈杰勇",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "何伟婷",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }];
  }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('phyManagementCtrl', phyManagementFn);
  phyManagementFn.$inject = ['$scope', '$timeout'];

  function phyManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.editorConfig={
            initialFrameHeight:100,
            initialFrameWidth:740,
            toolbars: [["bold","italic","underline","simpleupload","spechars","insertunorderedlist","insertorderedlist"]]
    }
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    $scope.items = ['A','B','C','D','E','F'];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
  }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
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
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('tecManagementCtrl', tecManagementFn);
  tecManagementFn.$inject = ['$timeout', '$q'];

  function tecManagementFn($timeout, $q) {
    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    self.tecData = [{
      'tecname': '吴老师',
      'classes': [{
        'name': "软件工程5班",
        '_lowername': "软件工程5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "软件工程6班",
        '_lowername': "软件工程6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }, {
      'tecname': '刘老师',
      'classes': [{
        'name': "数字与媒体6班",
        '_lowername': "数字与媒体6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "数字与媒体5班",
        '_lowername': "数字与媒体5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }];
    // var i,j,obj,len;
    // console.log(self.tecData);
    // for(i in self.tecData){
    //   obj=self.tecData[i].classes;
    //   console.info('obj',obj);
    //   for(j=0,len=obj.length;j<len;j++){
    //     if(self.contacts.indexOf(obj[j])<0){
    //       self.contacts.push(obj[j]);
    //     }
    //   }
    // }
    //   console.log(self.contacts);
    //   console.log(self.tecData);
    // function getContacts(tecData) {
    //   // body...

    // }
    /**
     * Search for contacts.
     */
    function querySearch(query) {
      var results = query ?
        self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };

    }

    function loadContacts() {
      var contacts = [
        "软件工程1班",
        "软件工程2班",
        "软件工程3班",
        "软件工程4班",
        "数字与媒体1班",
        "数字与媒体2班",
        "数字与媒体3班",
        "数字与媒体4班"
      ];

      return contacts.map(function(c, index) {
        // var cParts = c.split(' ');
        var contact = {
          name: c,
          image: 'images/admin/iconfont-member.png',
          email: ''
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  }
})
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('boardManagementCtrl',boardManagementFn);
         boardManagementFn.$inject=['$scope','$timeout','$sce'];
         function boardManagementFn($scope,$timeout,$sce){
		    $scope.editorConfig={
		        focus:true //自动把光标放到UEditor中。测试config配置
		    }
		    $scope.nowTime=new Date();
		    $scope.$watch('content',function(){
		        $scope.html = $sce.trustAsHtml($scope.content);
		        $scope.nowTime=new Date();
		    })       
       }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('gradeManagementCtrl', gradeManagementFn);
  gradeManagementFn.$inject = ['$scope', '$timeout'];

  function gradeManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.changeCollege = function() {
      $timeout(function() {
        vm.defaultClasses = vm.classmanagement[vm.defaultCollege][0];
      });
    }
    vm.defaultCollege = '计算机学院';
    vm.defaultCourse = '用拉伸法测量杨氏弹性模量';
    vm.defaultClasses = '软件工程1班';
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    vm.classmanagement = {
      "计算机学院": ["软件工程1班", "软件工程2班", "软件工程3班", "软件工程4班"],
      "自动化学院": ["数字与媒体1班", "数字与媒体2班", "数字与媒体3班", "数字与媒体4班"]
    }
    vm.gradeDate = [{
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006245",
      "name": "陈杰勇",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "何伟婷",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }];
  }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('phyManagementCtrl', phyManagementFn);
  phyManagementFn.$inject = ['$scope', '$timeout'];

  function phyManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.editorConfig={
            initialFrameHeight:100,
            initialFrameWidth:740,
            toolbars: [["bold","italic","underline","simpleupload","spechars","insertunorderedlist","insertorderedlist"]]
    }
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    $scope.items = ['A','B','C','D','E','F'];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
  }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
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
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('tecManagementCtrl', tecManagementFn);
  tecManagementFn.$inject = ['$timeout', '$q'];

  function tecManagementFn($timeout, $q) {
    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    self.tecData = [{
      'tecname': '吴老师',
      'classes': [{
        'name': "软件工程5班",
        '_lowername': "软件工程5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "软件工程6班",
        '_lowername': "软件工程6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }, {
      'tecname': '刘老师',
      'classes': [{
        'name': "数字与媒体6班",
        '_lowername': "数字与媒体6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "数字与媒体5班",
        '_lowername': "数字与媒体5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }];
    // var i,j,obj,len;
    // console.log(self.tecData);
    // for(i in self.tecData){
    //   obj=self.tecData[i].classes;
    //   console.info('obj',obj);
    //   for(j=0,len=obj.length;j<len;j++){
    //     if(self.contacts.indexOf(obj[j])<0){
    //       self.contacts.push(obj[j]);
    //     }
    //   }
    // }
    //   console.log(self.contacts);
    //   console.log(self.tecData);
    // function getContacts(tecData) {
    //   // body...

    // }
    /**
     * Search for contacts.
     */
    function querySearch(query) {
      var results = query ?
        self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };

    }

    function loadContacts() {
      var contacts = [
        "软件工程1班",
        "软件工程2班",
        "软件工程3班",
        "软件工程4班",
        "数字与媒体1班",
        "数字与媒体2班",
        "数字与媒体3班",
        "数字与媒体4班"
      ];

      return contacts.map(function(c, index) {
        // var cParts = c.split(' ');
        var contact = {
          name: c,
          image: 'images/admin/iconfont-member.png',
          email: ''
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  }
})
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('boardManagementCtrl',boardManagementFn);
         boardManagementFn.$inject=['$scope','$timeout','$sce'];
         function boardManagementFn($scope,$timeout,$sce){
		    $scope.editorConfig={
		        focus:true //自动把光标放到UEditor中。测试config配置
		    }
		    $scope.nowTime=new Date();
		    $scope.$watch('content',function(){
		        $scope.html = $sce.trustAsHtml($scope.content);
		        $scope.nowTime=new Date();
		    })       
       }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('gradeManagementCtrl', gradeManagementFn);
  gradeManagementFn.$inject = ['$scope', '$timeout'];

  function gradeManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.changeCollege = function() {
      $timeout(function() {
        vm.defaultClasses = vm.classmanagement[vm.defaultCollege][0];
      });
    }
    vm.defaultCollege = '计算机学院';
    vm.defaultCourse = '用拉伸法测量杨氏弹性模量';
    vm.defaultClasses = '软件工程1班';
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    vm.classmanagement = {
      "计算机学院": ["软件工程1班", "软件工程2班", "软件工程3班", "软件工程4班"],
      "自动化学院": ["数字与媒体1班", "数字与媒体2班", "数字与媒体3班", "数字与媒体4班"]
    }
    vm.gradeDate = [{
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006245",
      "name": "陈杰勇",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "何伟婷",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }];
  }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('phyManagementCtrl', phyManagementFn);
  phyManagementFn.$inject = ['$scope', '$timeout'];

  function phyManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.editorConfig={
            initialFrameHeight:100,
            initialFrameWidth:740,
            toolbars: [["bold","italic","underline","simpleupload","spechars","insertunorderedlist","insertorderedlist"]]
    }
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    $scope.items = ['A','B','C','D','E','F'];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
  }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
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
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('tecManagementCtrl', tecManagementFn);
  tecManagementFn.$inject = ['$timeout', '$q'];

  function tecManagementFn($timeout, $q) {
    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    self.tecData = [{
      'tecname': '吴老师',
      'classes': [{
        'name': "软件工程5班",
        '_lowername': "软件工程5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "软件工程6班",
        '_lowername': "软件工程6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }, {
      'tecname': '刘老师',
      'classes': [{
        'name': "数字与媒体6班",
        '_lowername': "数字与媒体6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "数字与媒体5班",
        '_lowername': "数字与媒体5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }];
    // var i,j,obj,len;
    // console.log(self.tecData);
    // for(i in self.tecData){
    //   obj=self.tecData[i].classes;
    //   console.info('obj',obj);
    //   for(j=0,len=obj.length;j<len;j++){
    //     if(self.contacts.indexOf(obj[j])<0){
    //       self.contacts.push(obj[j]);
    //     }
    //   }
    // }
    //   console.log(self.contacts);
    //   console.log(self.tecData);
    // function getContacts(tecData) {
    //   // body...

    // }
    /**
     * Search for contacts.
     */
    function querySearch(query) {
      var results = query ?
        self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };

    }

    function loadContacts() {
      var contacts = [
        "软件工程1班",
        "软件工程2班",
        "软件工程3班",
        "软件工程4班",
        "数字与媒体1班",
        "数字与媒体2班",
        "数字与媒体3班",
        "数字与媒体4班"
      ];

      return contacts.map(function(c, index) {
        // var cParts = c.split(' ');
        var contact = {
          name: c,
          image: 'images/admin/iconfont-member.png',
          email: ''
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  }
})
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('boardManagementCtrl',boardManagementFn);
         boardManagementFn.$inject=['$scope','$timeout','$sce'];
         function boardManagementFn($scope,$timeout,$sce){
		    $scope.editorConfig={
		        focus:true //自动把光标放到UEditor中。测试config配置
		    }
		    $scope.nowTime=new Date();
		    $scope.$watch('content',function(){
		        $scope.html = $sce.trustAsHtml($scope.content);
		        $scope.nowTime=new Date();
		    })       
       }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('gradeManagementCtrl', gradeManagementFn);
  gradeManagementFn.$inject = ['$scope', '$timeout'];

  function gradeManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.changeCollege = function() {
      $timeout(function() {
        vm.defaultClasses = vm.classmanagement[vm.defaultCollege][0];
      });
    }
    vm.defaultCollege = '计算机学院';
    vm.defaultCourse = '用拉伸法测量杨氏弹性模量';
    vm.defaultClasses = '软件工程1班';
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    vm.classmanagement = {
      "计算机学院": ["软件工程1班", "软件工程2班", "软件工程3班", "软件工程4班"],
      "自动化学院": ["数字与媒体1班", "数字与媒体2班", "数字与媒体3班", "数字与媒体4班"]
    }
    vm.gradeDate = [{
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006245",
      "name": "陈杰勇",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "何伟婷",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }];
  }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('phyManagementCtrl', phyManagementFn);
  phyManagementFn.$inject = ['$scope', '$timeout'];

  function phyManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.editorConfig={
            initialFrameHeight:100,
            initialFrameWidth:740,
            toolbars: [["bold","italic","underline","simpleupload","spechars","insertunorderedlist","insertorderedlist"]]
    }
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    $scope.items = ['A','B','C','D','E','F'];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
  }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
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
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('tecManagementCtrl', tecManagementFn);
  tecManagementFn.$inject = ['$timeout', '$q'];

  function tecManagementFn($timeout, $q) {
    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    self.tecData = [{
      'tecname': '吴老师',
      'classes': [{
        'name': "软件工程5班",
        '_lowername': "软件工程5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "软件工程6班",
        '_lowername': "软件工程6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }, {
      'tecname': '刘老师',
      'classes': [{
        'name': "数字与媒体6班",
        '_lowername': "数字与媒体6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "数字与媒体5班",
        '_lowername': "数字与媒体5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }];
    // var i,j,obj,len;
    // console.log(self.tecData);
    // for(i in self.tecData){
    //   obj=self.tecData[i].classes;
    //   console.info('obj',obj);
    //   for(j=0,len=obj.length;j<len;j++){
    //     if(self.contacts.indexOf(obj[j])<0){
    //       self.contacts.push(obj[j]);
    //     }
    //   }
    // }
    //   console.log(self.contacts);
    //   console.log(self.tecData);
    // function getContacts(tecData) {
    //   // body...

    // }
    /**
     * Search for contacts.
     */
    function querySearch(query) {
      var results = query ?
        self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };

    }

    function loadContacts() {
      var contacts = [
        "软件工程1班",
        "软件工程2班",
        "软件工程3班",
        "软件工程4班",
        "数字与媒体1班",
        "数字与媒体2班",
        "数字与媒体3班",
        "数字与媒体4班"
      ];

      return contacts.map(function(c, index) {
        // var cParts = c.split(' ');
        var contact = {
          name: c,
          image: 'images/admin/iconfont-member.png',
          email: ''
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  }
})
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('boardManagementCtrl',boardManagementFn);
         boardManagementFn.$inject=['$scope','$timeout','$sce'];
         function boardManagementFn($scope,$timeout,$sce){
		    $scope.editorConfig={
		        focus:true //自动把光标放到UEditor中。测试config配置
		    }
		    $scope.nowTime=new Date();
		    $scope.$watch('content',function(){
		        $scope.html = $sce.trustAsHtml($scope.content);
		        $scope.nowTime=new Date();
		    })       
       }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('gradeManagementCtrl', gradeManagementFn);
  gradeManagementFn.$inject = ['$scope', '$timeout'];

  function gradeManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.changeCollege = function() {
      $timeout(function() {
        vm.defaultClasses = vm.classmanagement[vm.defaultCollege][0];
      });
    }
    vm.defaultCollege = '计算机学院';
    vm.defaultCourse = '用拉伸法测量杨氏弹性模量';
    vm.defaultClasses = '软件工程1班';
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    vm.classmanagement = {
      "计算机学院": ["软件工程1班", "软件工程2班", "软件工程3班", "软件工程4班"],
      "自动化学院": ["数字与媒体1班", "数字与媒体2班", "数字与媒体3班", "数字与媒体4班"]
    }
    vm.gradeDate = [{
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006245",
      "name": "陈杰勇",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "何伟婷",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }];
  }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('phyManagementCtrl', phyManagementFn);
  phyManagementFn.$inject = ['$scope', '$timeout'];

  function phyManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.editorConfig={
            initialFrameHeight:100,
            initialFrameWidth:740,
            toolbars: [["bold","italic","underline","simpleupload","spechars","insertunorderedlist","insertorderedlist"]]
    }
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    $scope.items = ['A','B','C','D','E','F'];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
  }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
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
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('tecManagementCtrl', tecManagementFn);
  tecManagementFn.$inject = ['$timeout', '$q'];

  function tecManagementFn($timeout, $q) {
    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    self.tecData = [{
      'tecname': '吴老师',
      'classes': [{
        'name': "软件工程5班",
        '_lowername': "软件工程5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "软件工程6班",
        '_lowername': "软件工程6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }, {
      'tecname': '刘老师',
      'classes': [{
        'name': "数字与媒体6班",
        '_lowername': "数字与媒体6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "数字与媒体5班",
        '_lowername': "数字与媒体5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }];
    // var i,j,obj,len;
    // console.log(self.tecData);
    // for(i in self.tecData){
    //   obj=self.tecData[i].classes;
    //   console.info('obj',obj);
    //   for(j=0,len=obj.length;j<len;j++){
    //     if(self.contacts.indexOf(obj[j])<0){
    //       self.contacts.push(obj[j]);
    //     }
    //   }
    // }
    //   console.log(self.contacts);
    //   console.log(self.tecData);
    // function getContacts(tecData) {
    //   // body...

    // }
    /**
     * Search for contacts.
     */
    function querySearch(query) {
      var results = query ?
        self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };

    }

    function loadContacts() {
      var contacts = [
        "软件工程1班",
        "软件工程2班",
        "软件工程3班",
        "软件工程4班",
        "数字与媒体1班",
        "数字与媒体2班",
        "数字与媒体3班",
        "数字与媒体4班"
      ];

      return contacts.map(function(c, index) {
        // var cParts = c.split(' ');
        var contact = {
          name: c,
          image: 'images/admin/iconfont-member.png',
          email: ''
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  }
})
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('boardManagementCtrl',boardManagementFn);
         boardManagementFn.$inject=['$scope','$timeout','$sce'];
         function boardManagementFn($scope,$timeout,$sce){
		    $scope.editorConfig={
		        focus:true //自动把光标放到UEditor中。测试config配置
		    }
		    $scope.nowTime=new Date();
		    $scope.$watch('content',function(){
		        $scope.html = $sce.trustAsHtml($scope.content);
		        $scope.nowTime=new Date();
		    })       
       }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('gradeManagementCtrl', gradeManagementFn);
  gradeManagementFn.$inject = ['$scope', '$timeout'];

  function gradeManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.changeCollege = function() {
      $timeout(function() {
        vm.defaultClasses = vm.classmanagement[vm.defaultCollege][0];
      });
    }
    vm.defaultCollege = '计算机学院';
    vm.defaultCourse = '用拉伸法测量杨氏弹性模量';
    vm.defaultClasses = '软件工程1班';
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    vm.classmanagement = {
      "计算机学院": ["软件工程1班", "软件工程2班", "软件工程3班", "软件工程4班"],
      "自动化学院": ["数字与媒体1班", "数字与媒体2班", "数字与媒体3班", "数字与媒体4班"]
    }
    vm.gradeDate = [{
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006245",
      "name": "陈杰勇",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "何伟婷",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }];
  }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('phyManagementCtrl', phyManagementFn);
  phyManagementFn.$inject = ['$scope', '$timeout'];

  function phyManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.editorConfig={
            initialFrameHeight:100,
            initialFrameWidth:740,
            toolbars: [["bold","italic","underline","simpleupload","spechars","insertunorderedlist","insertorderedlist"]]
    }
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    $scope.items = ['A','B','C','D','E','F'];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
  }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
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
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('tecManagementCtrl', tecManagementFn);
  tecManagementFn.$inject = ['$timeout', '$q'];

  function tecManagementFn($timeout, $q) {
    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    self.tecData = [{
      'tecname': '吴老师',
      'classes': [{
        'name': "软件工程5班",
        '_lowername': "软件工程5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "软件工程6班",
        '_lowername': "软件工程6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }, {
      'tecname': '刘老师',
      'classes': [{
        'name': "数字与媒体6班",
        '_lowername': "数字与媒体6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "数字与媒体5班",
        '_lowername': "数字与媒体5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }];
    // var i,j,obj,len;
    // console.log(self.tecData);
    // for(i in self.tecData){
    //   obj=self.tecData[i].classes;
    //   console.info('obj',obj);
    //   for(j=0,len=obj.length;j<len;j++){
    //     if(self.contacts.indexOf(obj[j])<0){
    //       self.contacts.push(obj[j]);
    //     }
    //   }
    // }
    //   console.log(self.contacts);
    //   console.log(self.tecData);
    // function getContacts(tecData) {
    //   // body...

    // }
    /**
     * Search for contacts.
     */
    function querySearch(query) {
      var results = query ?
        self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };

    }

    function loadContacts() {
      var contacts = [
        "软件工程1班",
        "软件工程2班",
        "软件工程3班",
        "软件工程4班",
        "数字与媒体1班",
        "数字与媒体2班",
        "数字与媒体3班",
        "数字与媒体4班"
      ];

      return contacts.map(function(c, index) {
        // var cParts = c.split(' ');
        var contact = {
          name: c,
          image: 'images/admin/iconfont-member.png',
          email: ''
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  }
})
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('boardManagementCtrl',boardManagementFn);
         boardManagementFn.$inject=['$scope','$timeout','$sce'];
         function boardManagementFn($scope,$timeout,$sce){
		    $scope.editorConfig={
		        focus:true //自动把光标放到UEditor中。测试config配置
		    }
		    $scope.nowTime=new Date();
		    $scope.$watch('content',function(){
		        $scope.html = $sce.trustAsHtml($scope.content);
		        $scope.nowTime=new Date();
		    })       
       }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('gradeManagementCtrl', gradeManagementFn);
  gradeManagementFn.$inject = ['$scope', '$timeout'];

  function gradeManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.changeCollege = function() {
      $timeout(function() {
        vm.defaultClasses = vm.classmanagement[vm.defaultCollege][0];
      });
    }
    vm.defaultCollege = '计算机学院';
    vm.defaultCourse = '用拉伸法测量杨氏弹性模量';
    vm.defaultClasses = '软件工程1班';
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    vm.classmanagement = {
      "计算机学院": ["软件工程1班", "软件工程2班", "软件工程3班", "软件工程4班"],
      "自动化学院": ["数字与媒体1班", "数字与媒体2班", "数字与媒体3班", "数字与媒体4班"]
    }
    vm.gradeDate = [{
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006245",
      "name": "陈杰勇",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "何伟婷",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }];
  }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('phyManagementCtrl', phyManagementFn);
  phyManagementFn.$inject = ['$scope', '$timeout'];

  function phyManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.editorConfig={
            initialFrameHeight:100,
            initialFrameWidth:740,
            toolbars: [["bold","italic","underline","simpleupload","spechars","insertunorderedlist","insertorderedlist"]]
    }
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    $scope.items = ['A','B','C','D','E','F'];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
  }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
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
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('tecManagementCtrl', tecManagementFn);
  tecManagementFn.$inject = ['$timeout', '$q'];

  function tecManagementFn($timeout, $q) {
    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    self.tecData = [{
      'tecname': '吴老师',
      'classes': [{
        'name': "软件工程5班",
        '_lowername': "软件工程5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "软件工程6班",
        '_lowername': "软件工程6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }, {
      'tecname': '刘老师',
      'classes': [{
        'name': "数字与媒体6班",
        '_lowername': "数字与媒体6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "数字与媒体5班",
        '_lowername': "数字与媒体5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }];
    // var i,j,obj,len;
    // console.log(self.tecData);
    // for(i in self.tecData){
    //   obj=self.tecData[i].classes;
    //   console.info('obj',obj);
    //   for(j=0,len=obj.length;j<len;j++){
    //     if(self.contacts.indexOf(obj[j])<0){
    //       self.contacts.push(obj[j]);
    //     }
    //   }
    // }
    //   console.log(self.contacts);
    //   console.log(self.tecData);
    // function getContacts(tecData) {
    //   // body...

    // }
    /**
     * Search for contacts.
     */
    function querySearch(query) {
      var results = query ?
        self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };

    }

    function loadContacts() {
      var contacts = [
        "软件工程1班",
        "软件工程2班",
        "软件工程3班",
        "软件工程4班",
        "数字与媒体1班",
        "数字与媒体2班",
        "数字与媒体3班",
        "数字与媒体4班"
      ];

      return contacts.map(function(c, index) {
        // var cParts = c.split(' ');
        var contact = {
          name: c,
          image: 'images/admin/iconfont-member.png',
          email: ''
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  }
})
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('boardManagementCtrl',boardManagementFn);
         boardManagementFn.$inject=['$scope','$timeout','$sce'];
         function boardManagementFn($scope,$timeout,$sce){
		    $scope.editorConfig={
		        focus:true //自动把光标放到UEditor中。测试config配置
		    }
		    $scope.nowTime=new Date();
		    $scope.$watch('content',function(){
		        $scope.html = $sce.trustAsHtml($scope.content);
		        $scope.nowTime=new Date();
		    })       
       }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('gradeManagementCtrl', gradeManagementFn);
  gradeManagementFn.$inject = ['$scope', '$timeout'];

  function gradeManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.changeCollege = function() {
      $timeout(function() {
        vm.defaultClasses = vm.classmanagement[vm.defaultCollege][0];
      });
    }
    vm.defaultCollege = '计算机学院';
    vm.defaultCourse = '用拉伸法测量杨氏弹性模量';
    vm.defaultClasses = '软件工程1班';
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    vm.classmanagement = {
      "计算机学院": ["软件工程1班", "软件工程2班", "软件工程3班", "软件工程4班"],
      "自动化学院": ["数字与媒体1班", "数字与媒体2班", "数字与媒体3班", "数字与媒体4班"]
    }
    vm.gradeDate = [{
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006245",
      "name": "陈杰勇",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "何伟婷",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }];
  }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('phyManagementCtrl', phyManagementFn);
  phyManagementFn.$inject = ['$scope', '$timeout'];

  function phyManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.editorConfig={
            initialFrameHeight:100,
            initialFrameWidth:740,
            toolbars: [["bold","italic","underline","simpleupload","spechars","insertunorderedlist","insertorderedlist"]]
    }
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    $scope.items = ['A','B','C','D','E','F'];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
  }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
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
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('tecManagementCtrl', tecManagementFn);
  tecManagementFn.$inject = ['$timeout', '$q'];

  function tecManagementFn($timeout, $q) {
    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    self.tecData = [{
      'tecname': '吴老师',
      'classes': [{
        'name': "软件工程5班",
        '_lowername': "软件工程5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "软件工程6班",
        '_lowername': "软件工程6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }, {
      'tecname': '刘老师',
      'classes': [{
        'name': "数字与媒体6班",
        '_lowername': "数字与媒体6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "数字与媒体5班",
        '_lowername': "数字与媒体5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }];
    // var i,j,obj,len;
    // console.log(self.tecData);
    // for(i in self.tecData){
    //   obj=self.tecData[i].classes;
    //   console.info('obj',obj);
    //   for(j=0,len=obj.length;j<len;j++){
    //     if(self.contacts.indexOf(obj[j])<0){
    //       self.contacts.push(obj[j]);
    //     }
    //   }
    // }
    //   console.log(self.contacts);
    //   console.log(self.tecData);
    // function getContacts(tecData) {
    //   // body...

    // }
    /**
     * Search for contacts.
     */
    function querySearch(query) {
      var results = query ?
        self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };

    }

    function loadContacts() {
      var contacts = [
        "软件工程1班",
        "软件工程2班",
        "软件工程3班",
        "软件工程4班",
        "数字与媒体1班",
        "数字与媒体2班",
        "数字与媒体3班",
        "数字与媒体4班"
      ];

      return contacts.map(function(c, index) {
        // var cParts = c.split(' ');
        var contact = {
          name: c,
          image: 'images/admin/iconfont-member.png',
          email: ''
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  }
})
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('boardManagementCtrl',boardManagementFn);
         boardManagementFn.$inject=['$scope','$timeout','$sce'];
         function boardManagementFn($scope,$timeout,$sce){
		    $scope.editorConfig={
		        focus:true //自动把光标放到UEditor中。测试config配置
		    }
		    $scope.nowTime=new Date();
		    $scope.$watch('content',function(){
		        $scope.html = $sce.trustAsHtml($scope.content);
		        $scope.nowTime=new Date();
		    })       
       }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('gradeManagementCtrl', gradeManagementFn);
  gradeManagementFn.$inject = ['$scope', '$timeout'];

  function gradeManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.changeCollege = function() {
      $timeout(function() {
        vm.defaultClasses = vm.classmanagement[vm.defaultCollege][0];
      });
    }
    vm.defaultCollege = '计算机学院';
    vm.defaultCourse = '用拉伸法测量杨氏弹性模量';
    vm.defaultClasses = '软件工程1班';
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    vm.classmanagement = {
      "计算机学院": ["软件工程1班", "软件工程2班", "软件工程3班", "软件工程4班"],
      "自动化学院": ["数字与媒体1班", "数字与媒体2班", "数字与媒体3班", "数字与媒体4班"]
    }
    vm.gradeDate = [{
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006245",
      "name": "陈杰勇",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "何伟婷",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }];
  }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('phyManagementCtrl', phyManagementFn);
  phyManagementFn.$inject = ['$scope', '$timeout'];

  function phyManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.editorConfig={
            initialFrameHeight:100,
            initialFrameWidth:740,
            toolbars: [["bold","italic","underline","simpleupload","spechars","insertunorderedlist","insertorderedlist"]]
    }
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    $scope.items = ['A','B','C','D','E','F'];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
  }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
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
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('tecManagementCtrl', tecManagementFn);
  tecManagementFn.$inject = ['$timeout', '$q'];

  function tecManagementFn($timeout, $q) {
    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    self.tecData = [{
      'tecname': '吴老师',
      'classes': [{
        'name': "软件工程5班",
        '_lowername': "软件工程5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "软件工程6班",
        '_lowername': "软件工程6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }, {
      'tecname': '刘老师',
      'classes': [{
        'name': "数字与媒体6班",
        '_lowername': "数字与媒体6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "数字与媒体5班",
        '_lowername': "数字与媒体5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }];
    // var i,j,obj,len;
    // console.log(self.tecData);
    // for(i in self.tecData){
    //   obj=self.tecData[i].classes;
    //   console.info('obj',obj);
    //   for(j=0,len=obj.length;j<len;j++){
    //     if(self.contacts.indexOf(obj[j])<0){
    //       self.contacts.push(obj[j]);
    //     }
    //   }
    // }
    //   console.log(self.contacts);
    //   console.log(self.tecData);
    // function getContacts(tecData) {
    //   // body...

    // }
    /**
     * Search for contacts.
     */
    function querySearch(query) {
      var results = query ?
        self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };

    }

    function loadContacts() {
      var contacts = [
        "软件工程1班",
        "软件工程2班",
        "软件工程3班",
        "软件工程4班",
        "数字与媒体1班",
        "数字与媒体2班",
        "数字与媒体3班",
        "数字与媒体4班"
      ];

      return contacts.map(function(c, index) {
        // var cParts = c.split(' ');
        var contact = {
          name: c,
          image: 'images/admin/iconfont-member.png',
          email: ''
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  }
})
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('boardManagementCtrl',boardManagementFn);
         boardManagementFn.$inject=['$scope','$timeout','$sce'];
         function boardManagementFn($scope,$timeout,$sce){
		    $scope.editorConfig={
		        focus:true //自动把光标放到UEditor中。测试config配置
		    }
		    $scope.nowTime=new Date();
		    $scope.$watch('content',function(){
		        $scope.html = $sce.trustAsHtml($scope.content);
		        $scope.nowTime=new Date();
		    })       
       }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('gradeManagementCtrl', gradeManagementFn);
  gradeManagementFn.$inject = ['$scope', '$timeout'];

  function gradeManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.changeCollege = function() {
      $timeout(function() {
        vm.defaultClasses = vm.classmanagement[vm.defaultCollege][0];
      });
    }
    vm.defaultCollege = '计算机学院';
    vm.defaultCourse = '用拉伸法测量杨氏弹性模量';
    vm.defaultClasses = '软件工程1班';
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    vm.classmanagement = {
      "计算机学院": ["软件工程1班", "软件工程2班", "软件工程3班", "软件工程4班"],
      "自动化学院": ["数字与媒体1班", "数字与媒体2班", "数字与媒体3班", "数字与媒体4班"]
    }
    vm.gradeDate = [{
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006245",
      "name": "陈杰勇",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "何伟婷",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }];
  }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('phyManagementCtrl', phyManagementFn);
  phyManagementFn.$inject = ['$scope', '$timeout'];

  function phyManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.editorConfig={
            initialFrameHeight:100,
            initialFrameWidth:740,
            toolbars: [["bold","italic","underline","simpleupload","spechars","insertunorderedlist","insertorderedlist"]]
    }
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    $scope.items = ['A','B','C','D','E','F'];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
  }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
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
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('tecManagementCtrl', tecManagementFn);
  tecManagementFn.$inject = ['$timeout', '$q'];

  function tecManagementFn($timeout, $q) {
    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    self.tecData = [{
      'tecname': '吴老师',
      'classes': [{
        'name': "软件工程5班",
        '_lowername': "软件工程5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "软件工程6班",
        '_lowername': "软件工程6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }, {
      'tecname': '刘老师',
      'classes': [{
        'name': "数字与媒体6班",
        '_lowername': "数字与媒体6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "数字与媒体5班",
        '_lowername': "数字与媒体5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }];
    // var i,j,obj,len;
    // console.log(self.tecData);
    // for(i in self.tecData){
    //   obj=self.tecData[i].classes;
    //   console.info('obj',obj);
    //   for(j=0,len=obj.length;j<len;j++){
    //     if(self.contacts.indexOf(obj[j])<0){
    //       self.contacts.push(obj[j]);
    //     }
    //   }
    // }
    //   console.log(self.contacts);
    //   console.log(self.tecData);
    // function getContacts(tecData) {
    //   // body...

    // }
    /**
     * Search for contacts.
     */
    function querySearch(query) {
      var results = query ?
        self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };

    }

    function loadContacts() {
      var contacts = [
        "软件工程1班",
        "软件工程2班",
        "软件工程3班",
        "软件工程4班",
        "数字与媒体1班",
        "数字与媒体2班",
        "数字与媒体3班",
        "数字与媒体4班"
      ];

      return contacts.map(function(c, index) {
        // var cParts = c.split(' ');
        var contact = {
          name: c,
          image: 'images/admin/iconfont-member.png',
          email: ''
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  }
})
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('boardManagementCtrl',boardManagementFn);
         boardManagementFn.$inject=['$scope','$timeout','$sce'];
         function boardManagementFn($scope,$timeout,$sce){
		    $scope.editorConfig={
		        focus:true //自动把光标放到UEditor中。测试config配置
		    }
		    $scope.nowTime=new Date();
		    $scope.$watch('content',function(){
		        $scope.html = $sce.trustAsHtml($scope.content);
		        $scope.nowTime=new Date();
		    })       
       }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('gradeManagementCtrl', gradeManagementFn);
  gradeManagementFn.$inject = ['$scope', '$timeout'];

  function gradeManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.changeCollege = function() {
      $timeout(function() {
        vm.defaultClasses = vm.classmanagement[vm.defaultCollege][0];
      });
    }
    vm.defaultCollege = '计算机学院';
    vm.defaultCourse = '用拉伸法测量杨氏弹性模量';
    vm.defaultClasses = '软件工程1班';
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    vm.classmanagement = {
      "计算机学院": ["软件工程1班", "软件工程2班", "软件工程3班", "软件工程4班"],
      "自动化学院": ["数字与媒体1班", "数字与媒体2班", "数字与媒体3班", "数字与媒体4班"]
    }
    vm.gradeDate = [{
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006245",
      "name": "陈杰勇",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "何伟婷",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }, {
      "number": "3113006244",
      "name": "吴丹武",
      "title_0": 20,
      "title_1": 20,
      "title_2": 20,
      "title_3": 20,
      "title_4": 20,
      "title": 100
    }];
  }
});
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('phyManagementCtrl', phyManagementFn);
  phyManagementFn.$inject = ['$scope', '$timeout'];

  function phyManagementFn($scope, $timeout) {
    var vm = $scope.vm = {};
    $scope.editorConfig={
            initialFrameHeight:100,
            initialFrameWidth:740,
            toolbars: [["bold","italic","underline","simpleupload","spechars","insertunorderedlist","insertorderedlist"]]
    }
    vm.course = [
      '用拉伸法测量杨氏弹性模量',
      '用光栅法测定氢原子光谱线的波长',
      '冷却法测量金属的比热容',
      '迈克耳逊干涉仪',
      '超声波在空气中传播速度的测定',
      '密立根油滴实验',
      '夫兰克－赫兹实验',
      '光电效应和普朗克常量测定',
      '铁磁材料的磁滞回线和基本磁化曲线',
      '电子和场',
      '激光全息照相',
      '弹簧振子周期经验公式总结',
      '双光栅测量微弱振动的位移量',
      '光导纤维中光速的实验测定',
      '半导体热敏电阻特性的研究',
      '用光栅法测定光栅常数和超声波的波速',
      '电表改装与校准',
      '利用霍尔效应测量磁场分布和磁阻',
      '落体法测转动惯量',
      '用拉脱法测定液体表面张力系数',
      '用模拟法测绘静电场'
    ];
    $scope.items = ['A','B','C','D','E','F'];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
  }
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('forumManagementCtrl',forumManagementFn);
         forumManagementFn.$inject=['$scope','$timeout']
         function forumManagementFn($scope,$timeout){
         var vm=$scope.vm={};
         vm.course = [
	      '用拉伸法测量杨氏弹性模量',
	      '用光栅法测定氢原子光谱线的波长',
	      '冷却法测量金属的比热容',
	      '迈克耳逊干涉仪',
	      '超声波在空气中传播速度的测定',
	      '密立根油滴实验',
	      '夫兰克－赫兹实验',
	      '光电效应和普朗克常量测定',
	      '铁磁材料的磁滞回线和基本磁化曲线',
	      '电子和场',
	      '激光全息照相',
	      '弹簧振子周期经验公式总结',
	      '双光栅测量微弱振动的位移量',
	      '光导纤维中光速的实验测定',
	      '半导体热敏电阻特性的研究',
	      '用光栅法测定光栅常数和超声波的波速',
	      '电表改装与校准',
	      '利用霍尔效应测量磁场分布和磁阻',
	      '落体法测转动惯量',
	      '用拉脱法测定液体表面张力系数',
	      '用模拟法测绘静电场'
	    ];
	    vm.response=[];
	    for(var i=0;i<15;i++)
	    {
            vm.response.push(i);
	    }         
       }
});
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
require(['controllers/controllers'], function(controllers) {
  'use strict';

  controllers.controller('tecManagementCtrl', tecManagementFn);
  tecManagementFn.$inject = ['$timeout', '$q'];

  function tecManagementFn($timeout, $q) {
    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    self.tecData = [{
      'tecname': '吴老师',
      'classes': [{
        'name': "软件工程5班",
        '_lowername': "软件工程5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "软件工程6班",
        '_lowername': "软件工程6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }, {
      'tecname': '刘老师',
      'classes': [{
        'name': "数字与媒体6班",
        '_lowername': "数字与媒体6班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }, {
        'name': "数字与媒体5班",
        '_lowername': "数字与媒体5班",
        'email': "",
        'image': "images/admin/iconfont-member.png"
      }]
    }];
    // var i,j,obj,len;
    // console.log(self.tecData);
    // for(i in self.tecData){
    //   obj=self.tecData[i].classes;
    //   console.info('obj',obj);
    //   for(j=0,len=obj.length;j<len;j++){
    //     if(self.contacts.indexOf(obj[j])<0){
    //       self.contacts.push(obj[j]);
    //     }
    //   }
    // }
    //   console.log(self.contacts);
    //   console.log(self.tecData);
    // function getContacts(tecData) {
    //   // body...

    // }
    /**
     * Search for contacts.
     */
    function querySearch(query) {
      var results = query ?
        self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };

    }

    function loadContacts() {
      var contacts = [
        "软件工程1班",
        "软件工程2班",
        "软件工程3班",
        "软件工程4班",
        "数字与媒体1班",
        "数字与媒体2班",
        "数字与媒体3班",
        "数字与媒体4班"
      ];

      return contacts.map(function(c, index) {
        // var cParts = c.split(' ');
        var contact = {
          name: c,
          image: 'images/admin/iconfont-member.png',
          email: ''
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  }
})