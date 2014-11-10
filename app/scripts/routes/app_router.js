(function () {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function () {

      Parse.history.start();
    },

    routes: {
      '' : 'home',
      'add' : 'addTrack',
      'list' : 'listTrack',
      'edit/:id' : 'editTrack',
      'alltapes' : 'allTapes'
    },

    home: function () {
      new App.Views.Home();
    },

    allTapes: function () {
      new App.Views.AllTapes();
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
