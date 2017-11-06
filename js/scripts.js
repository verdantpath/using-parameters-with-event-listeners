// get the value of 'username'
var elUsername = document.getElementById('username');
// get feedback element
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
  // check if username is too short
  if (elUsername.value.length < minLength) {
    // Set the error message
    elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
  } else {
    // clear the message
    elMsg.innerHTML = '';
  }
}

// use an anonymous function to wrap the function that you want to pass arguments to
// when username element loses focus
elUsername.addEventListener('blur', function() {
  // call the function and pass arguments
  checkUsername(5);
}, false);
