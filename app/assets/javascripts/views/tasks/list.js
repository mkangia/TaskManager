$(document).ready(function(){
  myApp.TaskListView = Backbone.View.extend({
    initialize: function(){
      var self = this;
      myApp.tasks.fetch({
        success: function() {
          self.render();
        }
        });
    },
    el: '#taskListView',
    addTask: function(task) {
      task.listView = new myApp.TaskView;
      task.listView.model = task;
      this.$el.append(task.listView.render().el);
    },
    render: function(){
      this.$el.html('<thead><tr><th>Goal</th><th>StartDate</th><th>EndDate</th><th>Completed</th><th>AssignedTo</th><th>Actions</th></tr></thead>');
      _.each(myApp.tasks.models, function(member){
        myApp.taskListView.addTask(member);
      });
      return this;
    }
  });
});