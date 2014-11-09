(function () {

  App.Views.AllTapes = Backbone.View.extend({

    events: {
    //  'submit #addTrack' : 'addTrack'
    },

    initialize: function () {
      this.render();
      //make a new thing here//
      $('#trackList').html(this.$el);
    },

    render: function () {
      //this will be my script on the home page
      this.$el.html($('#tapesView').html());
    }




  });

}());
