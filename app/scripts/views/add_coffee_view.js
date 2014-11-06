(function () {

  App.Views.AddCoffee = Backbone.View.extend({

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

      var c = new App.Models.Coffee({

        title: $('#coffee_title').val(),
        artist: $('#coffee_artist').val(),
        genre: $('#coffee_genre').val(),
        bpm: $('#coffee_bpm').val(),
        number: $('#coffee_number').val(),
        comments: $('coffee_comments').val()
      });

      App.coffees.add(c).save(null, {
        success: function (){
          App.router.navigate('list', { trigger: true });
        }


      });


    }


  });

}());
