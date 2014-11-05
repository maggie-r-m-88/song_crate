(function () {

  App.Collections.Coffees = Backbone.Collection.extend({
    model: App.Models.Coffee,
    url: 'https://tiy-atl-fe-server.herokuapp.com/collections/magsmusicapp'
  });

}());
