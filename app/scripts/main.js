(function () {

  // Create Instance of Collection
  App.coffees = new App.Collections.Coffees();

  // Fetch any server-side coffees
  App.coffees.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });

 $('#show_list').on('click', function(event){
            $('#coffeeForm').hide();
            $('#coffeeList').show();

 });

 $('#add_song').on('click', function(event){
            $('#coffeeList').hide();
            $('#coffeeForm').show();

 });





}());
