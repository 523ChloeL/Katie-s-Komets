var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');
var blue = document.getElementById("blue");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  blue.classList.toggle('slide');
});

function clearName() {
if (document.getElementById('emailField').value == 'Email Address'){
  document.getElementById('emailField').value = '';
}
}
//bring back the default text if name field is empty
function resetName() {
  if (document.getElementById('emailField').value == ''){
    document.getElementById('emailField').value = 'Email Address';
  }
}
