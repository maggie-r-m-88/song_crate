(function () {

  // Create Instance of Collection
  App.tracks = new App.Collections.Tracks();

  // Fetch any server-side coffees
  App.tracks.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });


//  $('#home').on('click', function(){
//    $('.main').show(200);

//  });



}());
