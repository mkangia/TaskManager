$(document).ready(function(){
  myApp.UserView = Backbone.View.extend({
    tagName: 'p',
    events: {
      'click .edit' : 'edit',
      'click .delete' : 'deleteUser',
    },
    className: 'user',
    template: JST['templates/users/list'],
    render: function(){
      this.$el.html(this.template(this.model));
      return this;
    },
    edit: function(){
      myApp.userEditView.model = this.model;
      myApp.userEditView.render();
    },
    updateContent: function(){
      this.render();
    },
    deleteUser: function(){
      myApp.users.remove(this.model);
      this.$el.remove();
    },
    reportError: function(msg){
      this.$el.find('.error').html(msg);
    }
  });
});