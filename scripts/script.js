// doc ready and alert w3s: https://www.w3schools.com/JQuery/event_ready.asp
$(document).ready(function () {
  //log hint in console
  console.log("Totally don't click the text that says don't click (or do)... Please click it");

  //trigger alert when clicked
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
