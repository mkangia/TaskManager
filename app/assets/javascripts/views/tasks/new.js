$(document).ready(function(){
  myApp.TaskNewView = Backbone.View.extend({
    el: '#taskEditView',
    events: {
      'click .save' : 'submitTask'
    },
    template: JST['templates/tasks/form'],
    initialize: function() {
      var self = this;
      this.model = new myApp.Task;
      this.render();
    },
    render: function(){
      this.$el.html(this.template({ task : this.model, users : myApp.users.models}));
      this.$el.find('.user_id').val(this.model.get('user_id'));
      this.$el.find('.completed').checked = this.model.get('completed');
      return this;
    },
    submitTask: function(){
      this.model.set('goal', this.$el.find('.goal').val());
      this.model.set('start_date', this.$el.find('.start_date').val());
      this.model.set('end_date', this.$el.find('.end_date').val());
      this.model.set('user_id', this.$el.find('.user_id').val());
      this.model.set('completed', this.$el.find('.completed').checked);
      var self = this;
      this.model.save({},
        { wait: true,
          success: function(model, response) {
            myApp.router.navigate('#/tasks');
          },
            error: function(model, response, options){
              self.reportError(response.responseJSON.error)
          }
        }
      )
    },
    reportError: function(msg){
      this.$el.find('.error').html(msg);
    },
    clean: function() {
      this.$el.html('');
    }
  });
});