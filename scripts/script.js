// stuff
// w3s: https://www.w3schools.com/JQuery/event_ready.asp
$(document).ready(function () {
  $("#easterEggText").on("click", function () {
    alert("You just walked the prank! 🦭🦭🦭🦭👌👌");
  });
});

// w3s: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
