$(document).ready(function(){
  myApp.TaskListView = Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    el: '#taskListView',
    render: function(){
      this.$el.html('CoMiNg SoOn!!');
      return this;
    },
    clean: function() {
      this.$el.html('');
    }
  });
});