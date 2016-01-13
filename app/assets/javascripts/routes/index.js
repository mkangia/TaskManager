//=require ./app

$(document).ready(function(){
  Backbone.history.start();
  myApp.router.navigate('#/home');
});