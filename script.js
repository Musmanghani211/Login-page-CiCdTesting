const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('error');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === 'standard_user' && password === 'secret_sauce') {
    alert('Login successful!');
    errorMsg.textContent = '';
  } else if(username === 'locked_out_user') {
    errorMsg.textContent = 'Sorry, this user has been locked out';
  } else {
    errorMsg.textContent = 'Sorry, your username or password is incorrect.';
  }
});