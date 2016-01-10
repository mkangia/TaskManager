$(document).ready(function(){
  myApp.AppRouter = Backbone.Router.extend({
    routes: {
      "home": "home",
      "users" : "users",
      "tasks" : "tasks",
      "tasks/new" : "newTask",
      "users/new": "newUser",
      "users/:id": "showUser",
      "tasks/:id": "showTask",
      "users/:id/edit": "editUser",
      "tasks/:id/edit": "editTask"
    },
    cleanViews: function() {
      appView.$el.find('#appNotice').html('').removeClass('alert');
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
      if(myApp.users.length == 0) {
        appView.$el.find('#appNotice').html('No Users Present in System').addClass('alert');
      } else {
        if(myApp.taskListView) {
          myApp.taskListView.initialize();
        } else {
          myApp.taskListView = new myApp.TaskListView();
        }
      }
    },
    newTask: function() {
      this.cleanViews();
      if(myApp.users.length == 0) {
        appView.$el.find('#appNotice').html('No Users Present in System').addClass('alert');
      } else {
        if(myApp.taskNewView) {
          myApp.taskNewView.render();
        } else {
          myApp.taskNewView = new myApp.TaskNewView();
        }
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
    showTask: function(id) {
      if(myApp.users.length == 0) {
        appView.$el.find('#appNotice').html('No Users Present in System').addClass('alert');
      } else {
        this.cleanViews();
        myApp.taskShowView = new myApp.TaskShowView(id);
      }
    },
    editUser: function(id) {
      this.cleanViews();
      myApp.userEditView = new myApp.UserEditView(id);
    },
    editTask: function(id) {
      if(myApp.users.length == 0) {
        appView.$el.find('#appNotice').html('No Users Present in System').addClass('alert');
      } else {
        this.cleanViews();
        myApp.taskEditView = new myApp.TaskEditView(id);
      }
    }
  });
  
  myApp.router = new myApp.AppRouter;
});
