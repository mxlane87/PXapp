let
  attempts = 3,
  logins = new Map([
    ['maxslane@icloud.com', 'root'],
    ['mxwell.lane@icloud.com', 'root'],
    ['hshahalami@hotmail.com', 'root']
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
 
  if (
    
    usernameInput.value == 'maxslane@icloud.com' ||
    usernameInput.value == 'mxwell.lane@gmail.com' ||
    usernameInput.value == 'hshahalami@hotmail.com'
    
    ) {
      let a = usernameInput.substr(8, 5);
      //passing user and account objects:
      aptrinsic("identify",
      {
      //User Fields
        "id": a, // Required for logged in app users
        "email": usernameInput.value
      },
  );
    }

  attempts = 3;
  sessionStorage.setItem('status','loggedIn');
  localStorage.setItem=('user', usernameInput.value);

  window.location.assign("./home.html");
}
  
function logout() {
  sessionStorage.removeItem('status');
  localStorage.removeItem=('user');
  window.aptrinsic('reset'); 
  window.location.assign("index.html");
}

if (sessionStorage.getItem('status') != null) {
    console.log('You are logged in');
}
else{
    console.log('You are not logged in');
    window.location.assign('index.html');
    alert('Please log in');
}

const form = document.getElementById('registration');

 // formElement.addEventListener('submit', onFormSubmit);



(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
  (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-PNUVLPA2TANP-2");

  form.addEventListener('submit', (event) => {
    aptrinsic("identify",
  {
  //User Fields
    "id": "Max123", // Required for logged in app users
    "email": "userEmail@address.com",
    "firstName": "Max",
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
})     
    
