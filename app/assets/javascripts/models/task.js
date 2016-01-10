$(document).ready(function(){
  myApp.Task = Backbone.Model.extend({
    urlRoot: '/api/v1/tasks',
    parse: function(response) {
      if(response.task){
        return response.task;
      }
      return response;
    },
    defaults: {
      id: null,
      task: 'ToDo',
      start_date: '2015-01-01',
      end_date: '2015-01-01',
      completed: false,
      user_id: null
    },
    initialize: function() {
      this.on('change', this.notifyChange, this);
    },
    notifyChange: function(myself) {
    },
    statusMessage: function() {
      return this.get('completed') == 'true' ? 'Wrapped Up' : 'Pending'
    }
  })
});