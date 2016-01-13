$(document).ready(function(){
  myApp.UserEditView = Backbone.View.extend({
    el: '#userEditView',
    events: {
      'click .save' : 'submitUser'
    },
    template: JST['templates/users/form'],
    initialize: function(id) {
      var self = this;
      this.model = new myApp.User({id: id});
      this.model.fetch({
        success: function() { self.render(); }
      })
    },
    render: function(){
      this.$el.html(this.template(this.model));
      this.$el.find('.gender').val(this.model.get('gender'));
      return this;
    },
    submitUser: function(){
      this.model.set('firstname', this.$el.find('.firstname').val());
      this.model.set('lastname', this.$el.find('.lastname').val());
      this.model.set('phone', this.$el.find('.phone').val());
      this.model.set('gender', this.$el.find('.gender').val());
      this.model.set('email', this.$el.find('.email').val());
      var self = this;
      this.model.save({},
        { wait: true,
          success: function(model, response) {
            myApp.router.navigate('#/users');
          },
          error: function(model, response, options){
            self.reportError(response.responseJSON.error)
          }
        }
      )
    },
    reportError: function(msg){
      this.$el.find('.error').html(msg);
    }
  });
});