(function () {

  App.Collections.Tracks = Parse.Collection.extend({
    model: App.Models.Track,
      comparator: function (model) {
      return parseInt(model.get('number'));
    },
  
  });

}());
