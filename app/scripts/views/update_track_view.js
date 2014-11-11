(function () {

  App.Views.SingleTrack = Parse.View.extend({
    //each track will be an li under this ul
    tagName: 'ul',
    className: 'trackSingle',

    events: {
      'submit #updateTrack' : 'updateTrack',
      'click #delete' : 'deleteTrack',
      'submit #addGenre' : 'addGenre'
    },

    template: _.template($('#singleTemp').html()),

    initialize: function (options) {
      this.options = options;
      this.render();

      // Get our Element On Our Page
      $('#trackList').html(this.$el);
    },

    render: function () {

      this.$el.empty();

      this.$el.html(this.template(this.options.track.toJSON()));

      var genreTemplate = _.template($('#genreTemp').html());
      var genre_query = new Parse.Query(App.Models.Genre);
      genre_query.equalTo('parent', this.options.tracks);

      this.$el.append('<h2>Genre</h2><ul class="genres"></ul>');

      genre_query.find({
        success: function (results){
          _.each(results, function(genre) {
            $('ul.genres').append(genreTemplate(genre.toJSON()));
          })
        }
      })
    },

    addGenre: function (e) {
      e.preventDefault();

      var genre = new App.Models.Genre({

        genreText: $('#genreText').val(),
        parent: this.options.track
      });

      genre.save(null, {
        success: function () {
          console.log('genre added');
          App.router.navigate('list', {trigger: true});
        }
      });
    },

    updateTrack: function (e) {
      e.preventDefault();

      // Update our Model Instance
      this.options.track.set({

        title: $('#update_title').val(),
        artist: $('#update_artist').val(),
        comments: $('#update_comments').val(),
        bpm: $('#update_bpm').val(),
        number: $('#update_number').val()

      });

      // Save Instance
      this.options.track.save();

      // Go back to our home page
      App.router.navigate('list', {trigger: true});

    },

    deleteTrack: function (e) {
      e.preventDefault();

      // Remove Coffee
      this.options.track.destroy();

      // Go home ET
      App.router.navigate('list', {trigger: true});

    }

  });

}());
