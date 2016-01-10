$(document).ready(function(){
  myApp.Tasks = Backbone.Collection.extend({
    url: '/api/v1/tasks',
    urlRoot: '/api/v1/tasks/',
    parse: function(data) {
      return data.tasks;
    },
    model: myApp.Task,
    initialize: function() {
      // [TODO]adding a member to collection to appendTask in the view
      // this.on('add', this.appendTask)
    },
    appendTask: function(){
      // [TODO]appending task view in list from collection
      // myApp.taskListView.addTask(myApp.tasks.last)
    }
  });

  myApp.tasks = new myApp.Tasks();
});