(function () {

  App.Views.Home = Parse.View.extend({

    events: {
    //  'submit #addTrack' : 'addTrack'
    },

    initialize: function () {
      this.render();
      //make a new thing here//
      $('#trackList').html(this.$el);
    },

    render: function () {
      //this will be my script on the home page
      this.$el.html($('#homeView').html());
    }


    //i dont think ill need a function for my home page yet.....
/*    addTrack: function (e) {
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

    }*/


  });

}());
