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
    el: '#userListView',
    addUser: function(user) {
      user.listView = new myApp.UserView;
      user.listView.model = user;
      this.$el.append(user.listView.render().el);
    },
    render: function(){
      this.$el.html('<thead><tr><th>Email</th><th>FullName</th><th>Phone</th><th>Gender</th><th>Actions</th></tr></thead>');
      _.each(myApp.users.models, function(member){
        myApp.userListView.addUser(member);
      });
      return this;
    }
  });
});