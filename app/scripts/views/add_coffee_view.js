(function () {

  App.Views.AddCoffee = Backbone.View.extend({

    events: {
      'submit #addCoffee' : 'addCoffee'
    },

    initialize: function () {
      this.render();

      $('#coffeeList').html(this.$el);
    },

    render: function () {
      this.$el.html($('#addTemp').html());
    },

    addCoffee: function (e) {
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
