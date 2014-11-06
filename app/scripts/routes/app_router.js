(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
      // Light the Fire
      Backbone.history.start();
    },

    routes: {
      '' : 'home',
      'add' : 'addCoffee',
      'list' : 'listCoffee',
      'edit/:id' : 'editCoffee'
    },

    home: function () {
      // create home view here i guess//
    },

     addCoffee: function () {
      new App.Views.AddCoffee();

    },

     listCoffee: function () {
       new App.Views.ListCoffee({ collection: App.coffees });
     },

    editCoffee: function (id) {

      var c = App.coffees.get(id);
      new App.Views.SingleCoffee({ coffee: c });
    }

  });

}());
