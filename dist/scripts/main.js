(function () {

  App.Models.Track = Backbone.Model.extend({

    idAttribute: '_id',

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

(function () {

  App.Collections.Tracks = Backbone.Collection.extend({
    model: App.Models.Track,
      comparator: function (model) {
      return parseInt(model.get('number'));
    },
    url: 'https://tiy-atl-fe-server.herokuapp.com/collections/magsmusicapp'
  });

}());

(function () {

  App.Views.Home = Backbone.View.extend({

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
        bpm: $('#track_bpm').val(),
        number: $('#track_number').val(),
        url:$('#track_url').val(),
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

(function () {

  App.Views.ListTrack = Backbone.View.extend({

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

(function () {

  App.Views.AllTapes = Backbone.View.extend({

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
      this.$el.html($('#tapesView').html());
    }




  });

}());

(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {

      Backbone.history.start();
    },

    routes: {
      '' : 'home',
      'add' : 'addTrack',
      'list' : 'listTrack',
      'edit/:id' : 'editTrack',
      'alltapes' : 'allTapes'
    },

    home: function () {
      new App.Views.Home();
    },

    allTapes: function () {
      new App.Views.AllTapes();
    },

     addTrack: function () {
      new App.Views.AddTrack();

    },

     listTrack: function () {
       new App.Views.ListTrack({ collection: App.tracks });
     },

    editTrack: function (id) {

      var c = App.tracks.get(id);
      new App.Views.SingleTrack({ track: c });
    }

  });

}());

(function () {

  // Create Instance of Collection
  App.tracks = new App.Collections.Tracks();



  //talk to my router

  App.tracks.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });
var test = [];
var test = App.tracks.models;
console.log(test)



}());
