$(document).ready(function(){
  myApp.AppRouter = Backbone.Router.extend({
    routes: {
      "home": "home",
      "users" : "users",
      "tasks" : "tasks",
      "tasks/new" : "newTask",
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
      if(myApp.taskListView) {
        myApp.taskListView.clean();
      }
      if(myApp.taskShowView) {
        myApp.taskShowView.clean();
      }
      if(myApp.taskEditView) {
        myApp.taskEditView.clean();
      }
      if(myApp.taskNewView) {
        myApp.taskNewView.clean();
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
        myApp.userListView.initialize();
      } else {
        myApp.userListView = new myApp.UserListView();
      }
    },
    tasks: function() {
      this.cleanViews();
      if(myApp.taskListView) {
        myApp.taskListView.initialize();
      } else {
        myApp.taskListView = new myApp.TaskListView();
      }
    },
    newTask: function() {
      this.cleanViews();
      if(myApp.taskNewView) {
        myApp.taskNewView.render();
      } else {
        myApp.taskNewView = new myApp.TaskNewView();
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
      myApp.userShowView = new myApp.UserShowView(id);
    },
    editUser: function(id) {
      this.cleanViews();
      myApp.userEditView = new myApp.UserEditView(id);
    }
  });
  
  myApp.router = new myApp.AppRouter;
});
