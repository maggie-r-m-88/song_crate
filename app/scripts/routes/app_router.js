(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
      // Light the Fire
      Backbone.history.start();
    },

    routes: {
      '' : 'home',
      'add' : 'addCoffee',
    
      'edit/:id' : 'editCoffee'
    },

    home: function () {
      new App.Views.ListCoffee({ collection: App.coffees });
    },

     addCoffee: function () {
      new App.Views.AddCoffee();

    },



    editCoffee: function (id) {

      var c = App.coffees.get(id);

      new App.Views.SingleCoffee({ coffee: c });
    }

  });

}());
