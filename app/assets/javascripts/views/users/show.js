$(document).ready(function(){
  myApp.UserShowView = Backbone.View.extend({
    template: JST['templates/users/profile'],
    el: '#profile',
    initialize: function(id) {
      var self = this;
      var user = new myApp.User({id: id});
      user.fetch({
        success: function(model) {
          self.render(model);
        }
      })
    },
    render: function(user) {
      this.$el.html('');
      this.$el.html(this.template(user));
      return this;
    }
  });
});