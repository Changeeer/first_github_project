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