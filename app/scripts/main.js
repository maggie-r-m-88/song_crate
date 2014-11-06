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
