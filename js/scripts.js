window.onload = function() {
  var date = new Date();
  console.log("Date = " + date);

  var year = date.getFullYear();
  console.log(year);

  document.getElementById("copyyear").innerText = year;
}