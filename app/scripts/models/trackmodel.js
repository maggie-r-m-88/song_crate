(function () {

  App.Models.Track = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      name: '',
      title: '',
      comments: '',
      artist: '',
      bpm: '',
      number: ''
    },

    initialize: function () {
      var t = this.get('name');

    }

  });

}());
