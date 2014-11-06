(function () {

  App.Models.Coffee = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      name: '',
      title: '',
      comments: '',
      artist: '',
      genre: '',
      bpm: ''
    },

    initialize: function () {
      var t = this.get('name');
      //console.log(t + " has been added");
    }

  });

}());
