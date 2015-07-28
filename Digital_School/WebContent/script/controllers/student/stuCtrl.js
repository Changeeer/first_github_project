require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuDiscussionCtrl',stuDiscussionFn);
         stuDiscussionFn.$inject=['$scope','$timeout']
         function stuDiscussionFn($scope,$timeout){
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
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuIndexCtrl',stuIndexFn);
         stuIndexFn.$inject=['$scope','$timeout']
         function stuIndexFn($scope,$timeout){
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

	controllers.controller('stuLessonCtrl', stuLessonFn);
	stuLessonFn.$inject = ['$scope', '$timeout']

	function stuLessonFn($scope, $timeout) {
		var vm = $scope.vm = {};
		vm.lesson = [{
			'id': '1',
			'title': '实验仪器',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '2',
			'title': '工作原理',
			'content': '<img src="images/lesson/phy-1-part2.jpg" alt=""><p>示波器的电路结构框图如图所示。包括三大部分： 示波管，x轴系统，Y轴系统。如果要观测一个正弦信号， 那么只要把被测信号转变成电压加到Y偏转板上， 电子束就会在y方向按信号的规律变化， 任意瞬间的偏转距离正比于该瞬间的电压。 但是如果水平偏转板没加电压， 在屏幕上只能看到1条垂直的直线。 这是因为电子束在水平方向未受到偏转电场的作用。 如果在X偏转板上加上一个锯齿波电压， 也叫做扫描电压， 那么光点在x方向的变化就反映了时间的变化。 当Y轴加上观测信号， X轴加上一个锯齿波信号的时候， 荧光屏上的光点的y和x坐标就分别与这一瞬间的信号电压和扫描电压成正比。 由于扫描电压和时间成比例， 所以荧光屏上所描绘的就是被测信号随时间变化的波形。</p><p>当扫描电压的周期和被测信号的周期成整数倍时,扫描的后一个周期描绘的波形与前一个周期完全一样,荧光屏上得到清晰而稳定的波形, 此时，信号和扫描电压同步。</p>'
		}, {
			'id': '3',
			'title': '示波器种类',
			'content': '<img src="images/lesson/phy-1-part3-1.jpg" alt=""><p>模拟示波器工作方式是直接测量信号电压，并通过从左到右穿过示波器屏幕的电子束在垂直方向描绘电压。示波器屏幕通常是阴极射线管（CRT）。电子束投到荧幕的某处，屏幕后面总会有明亮的荧光物质。当电子束水平扫过显示器时，信号的电压是电子束发生上下偏转，跟踪波形直接反映到屏幕上。在屏幕同一位置电子束投射的频度越大，显示得也越亮。</p><p>与模拟示波器不同，数字示波器通过模数转换器（ ADC）把被测电压转换为数字信息。它捕获的是波形的一系列样值，并对样值进行存储，存储限度是判断累计的样值是否能描绘出波形为止。随后，数字示波器重构波形</p><img src="images/lesson/phy-1-part3-2.jpg" alt="">'
		}, {
			'id': '4',
			'title': '面板含义',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '5',
			'title': '示波器的使用及口诀',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '6',
			'title': '频率测量',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}, {
			'id': '7',
			'title': '用途',
			'content': '<img src="images/lesson/phy-1-part1.jpg" alt="">'
		}];
		vm.lessonstep=[
			'实验内容介绍',
			'实验微课堂',
			'实验预习测试',
			'实验简答题',
			'实验数据处理',
			'实验思考题'
		]
	}
});
require(['controllers/controllers'], function (controllers) {
 'use strict';
 
         controllers.controller('stuZoneCtrl',stuZoneFn);
         stuZoneFn.$inject=['$scope','$timeout'];
         function stuZoneFn($scope,$timeout){
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