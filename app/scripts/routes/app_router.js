(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {

      Backbone.history.start();
    },

    routes: {
      '' : 'home',
      'add' : 'addTrack',
      'list' : 'listTrack',
      'edit/:id' : 'editTrack'
    },

    home: function () {
      new App.Views.Home();
    },

     addTrack: function () {
      new App.Views.AddTrack();

    },

     listTrack: function () {
       new App.Views.ListTrack({ collection: App.tracks });
     },

    editTrack: function (id) {

      var c = App.tracks.get(id);
      new App.Views.SingleTrack({ track: c });
    }

  });

}());
