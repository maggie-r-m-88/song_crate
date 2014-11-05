(function () {

  // Create Instance of Collection
  App.coffees = new App.Collections.Coffees();

  // Fetch any server-side coffees
  App.coffees.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });

 $('#show_list').click(function(){
            $('#coffeeForm').hide();
            $('#coffeeList').fadeIn();
            $('#show_list').hide();
 });

}());
