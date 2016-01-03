$(document).ready(function(){
  myApp.User = Backbone.Model.extend({
    urlRoot: '/api/v1/users',
    parse: function(response) {
      if(response.user){
        return response.user;
      }
      return response;
    },
    defaults: {
      id: null,
      email: 'Email',
      firstname: 'New',
      lastname: 'User',
      phone: '0000000000',
      active: false,
      gender: 'Male'
    },
    initialize: function() {
      this.on('change', this.notifyChange, this);
    },
    completeName: function() {
      return [this.title(), this.fullName()].join(' ');
    },
    fullName: function() {
      return [this.get('firstname'), this.get('lastname')].join(' ');
    },
    title: function() {
      return (this.get('gender') == 'Male' ? 'Mr.' : 'Ms.');
    },
    notifyChange: function(myself) {
    }
  })
});