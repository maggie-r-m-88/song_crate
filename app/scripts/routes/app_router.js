(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
      // Light the Fire
      Backbone.history.start();
    },

    routes: {
      '' : 'home',
      'edit/:id' : 'editCoffee'
    },

    home: function () {
      new App.Views.AddCoffee();
      new App.Views.ListCoffee({ collection: App.coffees });
    },

    editCoffee: function (id) {

      var c = App.coffees.get(id);

      new App.Views.SingleCoffee({ coffee: c });
    }

  });

}());