function myFunc() {
  var x = document.getElementById("loginForm").elements.length;
  var y = document.getElementById("loginForm").elements[0].value;

  document.getElementById("displayHere").innerHTML = "found " + x + " y " + y;
}
