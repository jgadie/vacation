 $(document).ready(function() {
   $("form#questions").submit(function(event) {
     var adventurous = parseInt($("input#adventurous").val());

//  Added 'hide' functions

  if (adventurous === 1) {
    $('#RUSTIC').show();
    $('#TROPICAL').hide();
    $('#METROPOLITAN').hide();
    $('#SCENIC').hide();

  } else if (adventurous === 2) {
    $('#TROPICAL').show();
    $('#RUSTIC').hide();
    $('#METROPOLITAN').hide();
    $('#SCENIC').hide();

  } else if (adventurous === 3) {
    alert("Wow, a risk taker!");
    $('#METROPOLITAN').show();
    $('#TROPICAL').hide();
    $('#RUSTIC').hide();
    $('#SCENIC').hide();

  } else if (adventurous === 4) {
    alert("What a travel bug you are!");
    $('#SCENIC').show();
    $('#TROPICAL').hide();
    $('#METROPOLITAN').hide();
    $('#RUSTIC').hide();

  } else {
    $('#TROPICAL').show();
    $('#RUSTIC').hide();
    $('#METROPOLITAN').hide();
    $('#SCENIC').hide();
  }
    event.preventDefault();
  });
});


//    var adventure = confirm("Are you really this adventurous? Click OK for yes or Cancel for no.");
//
//    if (adventure === 1) {
//     $('#one').show();
//   } else if (adventure === 2) {
//     alert("Getting excited?");
//     $('#two').show();
//   } else if (adventure === 3) {
//     alert("You are pretty adventurous!");
//     $('#three').show();
//   } else (adventure === 4) {
//     alert("Wow! What a travel bug you are!");
//     $('#four').show();
//   }
// });







//   $("#adventure form").submit(function() {
//     $(".one").append("blah blah");
//     $(".two").append("blah blah");
//     $(".three").append("blah blah");
//     $(".four").append("blah blah");
//     $(".five").append("blah blah");



//<input name = "firstname" type="text">

// function validateForm() {
//  var name = document.forms["myForm"]["fname"].value;
//  if (name === "") {
//    alert ("Please enter a name!");
//    return false;
