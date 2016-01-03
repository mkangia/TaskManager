//= require_tree ./users
$(document).ready(function(){
  myApp.AppView = Backbone.View.extend({
    el: '#appView',
    initialize: function(){
      this.render();
    },
    events: {
      'click #newUser' : 'addNewUser'
    },
    addNewUser: function() {
      var newUser = new myApp.User();
      this.editUser(newUser);
    },
    editUser: function(member) {
      myApp.userEditView.model = member;
      myApp.userEditView.render();
    }
  });

  var appView = new myApp.AppView();
});