(function () {

  App.Collections.Tracks = Backbone.Collection.extend({
    model: App.Models.Track,
      comparator: function (model) {
      return parseInt(model.get('number'));
    },
    url: 'https://tiy-atl-fe-server.herokuapp.com/collections/magsmusicapp'
  });

}());
