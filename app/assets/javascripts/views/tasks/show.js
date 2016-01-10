$(document).ready(function(){
  myApp.TaskShowView = Backbone.View.extend({
    template: JST['templates/tasks/show'],
    el: '#show',
    initialize: function(id) {
      var self = this;
      var task = new myApp.Task({id: id});
      task.fetch({
        success: function(model) {
          self.render(model);
        }
      })
    },
    render: function(task) {
      this.$el.html('');
      this.$el.html(this.template(task));
      return this;
    },
    clean: function() {
      this.$el.html('');
    }
  });
});