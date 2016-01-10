$(document).ready(function(){
  myApp.AppView = Backbone.View.extend({
    el: '#appView',
    template: JST['templates/layouts/app'],
    initialize: function(){
      this.render();
    },
    editUser: function(member) {
      myApp.userEditView.model = member;
      myApp.userEditView.render();
    },
    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });

  appView = new myApp.AppView();
});