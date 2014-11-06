(function () {

  App.Models.Coffee = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      name: '',
      brand: '',
      title: '',
      comments: '',
      rating: '',
      artist: '',
      genre: '',
      bpm: ''
    },

    initialize: function () {
      var t = this.get('name');
      //console.log(t + " has been added");
    }

  });

}());

(function () {

  App.Collections.Coffees = Backbone.Collection.extend({
    model: App.Models.Coffee,
    url: 'https://tiy-atl-fe-server.herokuapp.com/collections/magsmusicapp'
  });

}());

(function () {

  App.Views.AddCoffee = Backbone.View.extend({

    events: {
      'submit #addCoffee' : 'addCoffee'
    },

    initialize: function () {
      this.render();

      $('#coffeeForm').html(this.$el);
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
        comments: $('coffee_comments').val()
      });

      App.coffees.add(c).save();
    $('#addCoffee')[0].reset();
  
    }




  });

}());

(function () {

  App.Views.ListCoffee = Backbone.View.extend({

    tagName: 'ul',
    className: 'allCoffees',

    events: {},

    template: _.template($('#listTemp').html()),

    initialize: function () {
      this.render();

      this.collection.off();
      this.collection.on('sync', this.render, this);

      // Get our Element On Our Page
      $('#coffeeList').html(this.$el);

    },

    render: function () {
      var self = this;

      // Empty out 
      this.$el.empty();

      this.collection.each(function (c) {
        self.$el.append(self.template(c.toJSON()));
      });

      return this;
    }

  });

}());
(function () {

  App.Views.SingleCoffee = Backbone.View.extend({

    tagName: 'ul',
    className: 'coffeeSingle',

    events: {
      'submit #updateCoffee' : 'updateCoffee',
      'click #delete' : 'deleteCoffee'
    },

    template: _.template($('#singleTemp').html()),

    initialize: function (options) {
      this.options = options;
      this.render();

  //    $('.test').hide();
      $('#coffeeForm').empty();

      // Get our Element On Our Page
      $('#coffeeList').html(this.$el);
    },

    render: function () {

      this.$el.empty();

      this.$el.html(this.template(this.options.coffee.toJSON()));

    },

    updateCoffee: function (e) {
      e.preventDefault();

      // Update our Model Instance
      this.options.coffee.set({
      //  name: $('#update_name').val(),
      //  brand: $('#update_brand').val(),

        title: $('#update_title').val(),
        artist: $('#update_artist').val(),
        genre: $('#update_genre').val(),
        comments: $('#update_comments').val(),
        bpm: $('#update_bpm').val()

      });

      // Save Instance
      this.options.coffee.save();

      // Go back to our home page
      App.router.navigate('', {trigger: true});

    },

    deleteCoffee: function (e) {
      e.preventDefault();

      // Remove Coffee
      this.options.coffee.destroy();

      // Go home ET
      App.router.navigate('', {trigger: true});

    }

  });

}());

(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
      // Light the Fire
      Backbone.history.start();
    },

    routes: {
      '' : 'home',
      'edit/:id' : 'editCoffee'
    },

    home: function () {
      new App.Views.AddCoffee();
      new App.Views.ListCoffee({ collection: App.coffees });
    },

    editCoffee: function (id) {

      var c = App.coffees.get(id);

      new App.Views.SingleCoffee({ coffee: c });
    }

  });

}());
(function () {

  // Create Instance of Collection
  App.coffees = new App.Collections.Coffees();

  // Fetch any server-side coffees
  App.coffees.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });
$('#home').on('click', function(event){
        $('#coffeeForm').hide();
        $('#coffeeList').hide();
        $('.main').show();


});


 $('#show_list').on('click', function(event){
            $('#coffeeForm').hide();
            $('#coffeeList').show();
            $('.main').hide();
 });

 $('#add_song').on('click', function(event){
            $('#coffeeList').hide();
            $('#coffeeForm').show();
            $('.main').hide();

 });





}());
