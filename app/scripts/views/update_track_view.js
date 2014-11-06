(function () {

  App.Views.SingleTrack = Backbone.View.extend({
    //each track will be an li under this ul
    tagName: 'ul',
    className: 'trackSingle',

    events: {
      'submit #updateTrack' : 'updateTrack',
      'click #delete' : 'deleteTrack'

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
