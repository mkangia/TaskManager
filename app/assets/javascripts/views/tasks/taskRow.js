$(document).ready(function(){
  myApp.TaskView = Backbone.View.extend({
    tagName: 'tr',
    events: {
      'click .delete' : 'deleteTask'
    },
    className: 'task',
    template: JST['templates/tasks/list'],
    render: function(){
      this.$el.html(this.template(this.model));
      return this;
    },
    updateContent: function(){
      this.render();
    },
    deleteTask: function(){
      myApp.tasks.remove(this.model);
      this.$el.remove();
    }
  });
});