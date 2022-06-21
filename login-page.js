let
  attempts = 3,
  logins = new Map([
    ['root', 'root'],
    ['admin', 'admin'],
    ['user', 'pass123']
  ]);
  formElement = document.getElementById('login-form');

function disableForm() {
  const
    usernameInput = document.getElementById('username-field'),
    passwordInput = document.getElementById('password-field'),
    submitButton = document.getElementById('login-form-submit');

  usernameInput.setAttribute('disabled', 'disabled');
  passwordInput.setAttribute('disabled', 'disabled');
  submitButton.setAttribute('disabled', 'disabled');  
}

function decreaseAttemptsLeft() {

  attempts--;
  
  
  if (attempts === 0) {
    
    disableForm();
    
    alert('You have failed  to log in 3 times, Fields have been turned off. Please try again later');
  } else {
    
    const
      message = `You have ${attempts} attempt(s) left.`;
    alert(message);  
  }
}

function onFormSubmit(event){
  
  event.preventDefault();
  
  const
    usernameInput = document.getElementById('username-field'),
    passwordInput = document.getElementById('password-field');
  
  if (
    
    !logins.has(usernameInput.value) ||
    
    logins.get(usernameInput.value) !== passwordInput.value
  ) {
    
    decreaseAttemptsLeft();
    
    return;
  }
 
  attempts = 3;
  sessionStorage.setItem('status','loggedIn');
  localStorage.setItem=('user', usernameInput.value);
  window.location.assign("./home.html");
}
  
formElement.addEventListener('submit', onFormSubmit);

//passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": "unique-user-id", // Required for logged in app users
    "email": "userEmail@address.com",
    "firstName": "John",
    "lastName": "Smith",
    "signUpDate": 1522697426479, //unix time in ms
    "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
    "price" : 95.5,
    "userHash": "" // optional transient for HMAC identification
  },
  {
  //Account Fields
    "id":"IBM", //Required
    "name":"International Business Machine",
    "Program": "Platinum" // flat custom attributes
 });