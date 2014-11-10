(function () {

  App.Models.Track = Parse.Object.extend({

    className: 'tracks',

    idAttribute: 'objectId',

    defaults: {
      name: '',
      title: '',
      comments: '',
      artist: '',
      bpm: '',
      number: '',
      url:''
    },

    initialize: function () {
      var t = this.get('name');

    }

  });

}());
