$(document).ready(function(){
  myApp.UserView = Backbone.View.extend({
    tagName: 'tr',
    events: {
      'click .delete' : 'deleteUser'
    },
    className: 'user',
    template: JST['templates/users/list'],
    render: function(){
      this.$el.html(this.template(this.model));
      return this;
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