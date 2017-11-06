var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
  if (elUsername.value.length < minLength) {
    // Set the error message
    elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
  } else {
    elMsg.innerHTML = '';
  }
}


elUsername.addEventListener('blur', function() {
  checkUsername(5);
}, false);
