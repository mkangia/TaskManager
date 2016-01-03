$(document).ready(function(){
  myApp.UserEditView = Backbone.View.extend({
    el: '#userEditView',
    events: {
      'click .save' : 'submitUser'
    },
    template: JST['templates/users/form'],
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
      if(this.model.listView){
        this.model.save({},
          { wait: true,
            success: function(model, response) {
              if(response.success){
                self.model.listView.updateContent();
                myApp.userEditView.$el.html('');
              } else {
                self.model.listView.reportError(response.error);
              }
            },
            error: function(model, response, options){
              self.model.set(model.previousAttributes());
              self.model.listView.reportError(response.responseJSON.error);
            }
          }
        );
      } else {
        this.model.save({},
          { wait: true,
            success: function(model, response) {
              if(response.success){
                myApp.users.add(self.model);
                myApp.userListView.addUser(self.model);
                myApp.userEditView.$el.html('');
              } else {
                myApp.userEditView.reportError(response.error);
              }
            },
            error: function(model, response, options){
              myApp.userEditView.reportError(response.responseJSON.error);
            }
          }
        );
      }
    },
    reportError: function(msg){
      this.$el.find('.error').html(msg);
    }
  });

  myApp.userEditView = new myApp.UserEditView();
});