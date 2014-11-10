(function () {

  App.Views.ListTrack = Parse.View.extend({

    tagName: 'ul',
    className: 'allTracks',

    events: {},

    template: _.template($('#listTemp').html()),

    initialize: function () {
      this.render();

      this.collection.off();
      this.collection.on('sync', this.render, this);

      // Get our Element On Our Page
      $('#trackList').html(this.$el);

    },

    render: function () {
      var self = this;

      // Empty out
      this.$el.empty();
      //default sort set on collection
      this.collection.sort();
      this.collection.each(function (c) {
        self.$el.append(self.template(c.toJSON()));
      });

      return this;
    }

  });

}());
