$(document).ready(function(){
  myApp.UserProfile = Backbone.View.extend({
    template: JST['templates/users/profile'],
    el: '#profile',
    initialize: function() {
      var self = this;
      // [TODO] Fetch logged in user instead of first
      var user = new myApp.User({id: 1});
      user.fetch({
        success: function(model) {
          self.model = model;
          self.render();
        }
      })
    },
    render: function() {
      this.$el.html('');
      this.$el.html(this.template(this.model));
      return this;
    }
  });
});