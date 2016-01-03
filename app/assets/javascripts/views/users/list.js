$(document).ready(function(){
  myApp.UserListView = Backbone.View.extend({
    initialize: function(){
      var self = this;
      myApp.users.fetch({
        success: function() {
          self.render();
        }
      });
    },
    tagName: 'li',
    el: '#userListView',
    addUser: function(user) {
      user.listView = new myApp.UserView;
      user.listView.model = user;
      this.$el.append(user.listView.render().el);
    },
    render: function(){
      _.each(myApp.users.models, function(member){
        myApp.userListView.addUser(member);
      });
    }
  });

  myApp.userListView = new myApp.UserListView();
});