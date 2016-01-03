$(document).ready(function(){
  myApp.AppRouter = Backbone.Router.extend({
    routes: {
      "home": "home",
      "users" : "users",
      "users/new": "newUser",
      "users/:id": "showUser",
      "users/:id/edit": "editUser"
    },
    cleanViews: function() {
      if(myApp.userListView) {
        myApp.userListView.clean();
      }
      if(myApp.userShowView) {
        myApp.userShowView.clean();
      }
      if(myApp.userEditView) {
        myApp.userEditView.clean();
      }
      if(myApp.userNewView) {
        myApp.userNewView.clean();
      }
      if(myApp.profileView) {
        myApp.profileView.clean();
      }
    },
    home: function() {
      this.cleanViews();
      if(myApp.profileView) {
        myApp.profileView.render();
      } else {
        myApp.profileView = new myApp.UserProfile();
      }
    },
    users: function() {
      this.cleanViews();
      if(myApp.userListView) {
        myApp.userListView.render();
      } else {
        myApp.userListView = new myApp.UserListView();
      }
    },
    newUser: function() {
      this.cleanViews();
      if(myApp.userNewView) {
        myApp.userNewView.render();
      } else {
        myApp.userNewView = new myApp.UserNewView();
      }
    },
    showUser: function(id) {
      this.cleanViews();
      if(myApp.userShowView) {
        myApp.userShowView.render()
      } else {
        myApp.userShowView= new myApp.UserShowView(id);
      }
    },
    editUser: function(id) {
      this.cleanViews();
      if(myApp.userEditView) {
        myApp.userEditView.render();
      } else {
        myApp.UserEditView = new myApp.UserEditView(id);
      }
    }
  });
  
  myApp.router = new myApp.AppRouter;
});
