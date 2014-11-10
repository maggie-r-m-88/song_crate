Parse.initialize("QIF9pYag8QklNOvzjJUS9Q7RK4pTfvgWXjJE2ojI", "KMa2VV4AwNoEne9bWjx1PXPGQbpYB0DqXQcoJXS5");
(function () {

  // Create Instance of Collection
  App.tracks = new App.Collections.Tracks();



  //talk to my router

  App.tracks.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });
var test = [];
var test = App.tracks.models;
console.log(test);


}());
