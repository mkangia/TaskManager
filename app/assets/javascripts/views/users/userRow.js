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
      myApp.userEditView = new myApp.UserEditView(this.model.get('id'));
    },
    updateContent: function(){
      this.render();
    },
    deleteUser: function(){
      myApp.users.remove(this.model);
      this.$el.remove();
    }
  });
});