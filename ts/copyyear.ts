// dynamically generate current year on pageload and display on page
window.onload = function () {
  document.getElementById(
    'copyyear',
  ).innerText = new Date().getFullYear().toString();
};
