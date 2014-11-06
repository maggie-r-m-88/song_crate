(function () {

  App.Views.AddTrack = Backbone.View.extend({

    events: {
      'submit #addTrack' : 'addTrack'
    },

    initialize: function () {
      this.render();

      $('#trackList').html(this.$el);
    },

    render: function () {
      this.$el.html($('#addTemp').html());
    },

    addTrack: function (e) {
      e.preventDefault();

      var c = new App.Models.Track({

        title: $('#track_title').val(),
        artist: $('#track_artist').val(),
        genre: $('#track_genre').val(),
        bpm: $('#track_bpm').val(),
        number: $('#track_number').val(),
        comments: $('#track_comments').val()
      });

      App.tracks.add(c).save(null, {
        success: function (){
          App.router.navigate('list', { trigger: true });
        }


      });


    }


  });

}());
