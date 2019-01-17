$(document).ready(function() {
  var height = parseInt(prompt("What is your height in inches?"));

  if (height > 0) {
    $("#any").show();
  } if (height <= 36) {
    $("#short").show();
  } else {
    $("tall").show();
  }
});
