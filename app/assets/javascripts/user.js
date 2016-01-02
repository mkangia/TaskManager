// var oldSync;

// oldSync = Backbone.sync;

// Backbone.sync = function(method, model, options) {
//   var csrfSafeMethod;
//   csrfSafeMethod = function(method) {
//     return /^(GET|HEAD|OPTIONS|TRACE)$/.test(method);
//   };
//   options.beforeSend = function(xhr, settings) {
//     if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
//       xhr.setRequestHeader('X-CSRFToken', $("meta[name='csrf-token']").attr('content'));
//     }
//   };
//   return oldSync(method, model, options);
// };


//creating a namespace for our app, So we nest everyting on it
var myApp = {}
$(document).ready(function(){
  myApp.User = Backbone.Model.extend({
    urlRoot: '/api/v1/users',
    parse: function(response) {
      if(response.user){
        return response.user
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
      return [this.title(), this.fullName()].join(' ')
    },
    fullName: function() {
      return [this.get('firstname'), this.get('lastname')].join(' ')
    },
    title: function() {
      return (this.get('gender') == 'Male' ? 'Mr.' : 'Ms.')
    },
    notifyChange: function(myself) {
    }
  })

  myApp.Users = Backbone.Collection.extend({
    url: '/api/v1/users',
    urlRoot: '/api/v1/users/',
    parse: function(data) {
      return data.users
    },
    model: myApp.User,
    initialize: function() {
      // this.on('add', this.appendUser)
    },
    appendUser: function(){
      // myApp.userListView.addUser(myApp.users.last)
    }
  })

  myApp.users = new myApp.Users();
  // myApp.users.add({firstname: 'Manish', lastname: 'Kangia'});
  // myApp.users.add({firstname: 'Ramesh', lastname: 'Kangia'});
  // myApp.users.add({firstname: 'Pike', lastname: 'Sharma'});

  myApp.UserView = Backbone.View.extend({
    tagName: 'p',
    events: {
      'click .edit' : 'edit',
      'click .delete' : 'deleteUser',
    },
    className: 'user',
    template: _.template($('#userListTemplate').html()),
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
      myApp.users.remove(this.model)
      this.$el.remove();
    },
    reportError: function(msg){
      this.$el.find('.error').html(msg);
    }
  })

  myApp.UserListView = Backbone.View.extend({
    initialize: function(){
      var self = this;
      myApp.users.fetch({
        success: function() {
          self.render();
        }
      });
    },
    tagName: 'li',
    el: '#userListView',
    addUser: function(user) {
      user.listView = new myApp.UserView({model: user})
      this.$el.append(user.listView.render().el);
    },
    render: function(){
      _.each(myApp.users.models, function(member){
        myApp.userListView.addUser(member)
      });
    }
  })

  myApp.UserEditView = Backbone.View.extend({
    el: '#userEditView',
    events: {
      'click .save' : 'submitUser'
    },
    template: _.template($('#userNewTemplate').html()),
    render: function(){
      this.$el.html(this.template(this.model))
      this.$el.find('.gender').val(this.model.get('gender'))
      return this;
    },
    submitUser: function(){
      this.model.set('firstname', this.$el.find('.firstname').val())
      this.model.set('lastname', this.$el.find('.lastname').val())
      this.model.set('phone', this.$el.find('.phone').val())
      this.model.set('gender', this.$el.find('.gender').val())
      this.model.set('email', this.$el.find('.email').val())
      var self = this;
      if(this.model.listView){
        this.model.save({}, 
          { wait: true,
            success: function(model, response) {
              if(response.success){
                self.model.listView.updateContent();
                myApp.userEditView.$el.html('');
              } else {
                self.model.listView.reportError(response.error)
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
                myApp.users.add(self.model)
                myApp.userListView.addUser(self.model)
                myApp.userEditView.$el.html('');
              } else {
                myApp.userEditView.reportError(response.error)
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
  })
  myApp.userListView = new myApp.UserListView();
  myApp.userEditView = new myApp.UserEditView();

  myApp.AppView = Backbone.View.extend({
    el: '#appView',
    initialize: function(){
      this.render();
    },
    events: {
      'click #newUser' : 'addNewUser'
    },
    render: function(){
      // var self = this;
      // _.each(myApp.users.models, function(member){
      //   myApp.userListView.addUser(member)
      // });
    },
    addNewUser: function() {
      var newUser = new myApp.User();
      this.editUser(newUser);
    },
    editUser: function(member) {
      myApp.userEditView.model = member;
      myApp.userEditView.render();
    }
  })

  var appView = new myApp.AppView();

});