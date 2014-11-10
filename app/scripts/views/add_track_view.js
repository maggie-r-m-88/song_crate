(function () {

  App.Views.AddTrack = Parse.View.extend({

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
        bpm: $('#track_bpm').val(),
        number: $('#track_number').val(),
        url:$('#track_url').val()

      });

      c.save(null, {
       success: function (){
        App.tracks.add(c);
          App.router.navigate('list', { trigger: true });
        }
       });



    }


  });

}());
