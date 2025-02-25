// stuff
// w3s: https://www.w3schools.com/JQuery/event_ready.asp
$(document).ready(function () {
    console.log("Welcome to Dev Charlie's Past Projects Dashboard! 🦭");

    // Easter egg: Secret function in console
    window.easterEgg = function() {
        console.log("You found the Easter egg!", "color: purple; font-size: 16px; font-weight: bold;");
        console.log("You just walked the prank🦭🦭🦭🦭🦭👌");
    };

    console.log("Type %c easterEgg() %c in the console to discover a surprise! 🦭", "color: green; font-weight: bold;", "");

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
