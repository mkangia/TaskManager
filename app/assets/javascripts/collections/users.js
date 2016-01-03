$(document).ready(function(){
  myApp.Users = Backbone.Collection.extend({
    url: '/api/v1/users',
    urlRoot: '/api/v1/users/',
    parse: function(data) {
      return data.users;
    },
    model: myApp.User,
    initialize: function() {
      // [TODO]adding a member to collection to appendUser in the view
      // this.on('add', this.appendUser)
    },
    appendUser: function(){
      // [TODO]appending user view in list from collection
      // myApp.userListView.addUser(myApp.users.last)
    }
  });

  myApp.users = new myApp.Users();
});