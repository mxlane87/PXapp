let
  attempts = 3,
  logins = new Map([
    ['maxslane@icloud.com', 'root'],
    ['mxwell.lane@gmail.com', 'root'],
    ['hshahalami@hotmail.com', 'root'],
    ['admin@maxtech.com', 'root']
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
    
      let a = usernameInput.value.substr(8, 5);
      let b = usernameInput.value.substr(-1, 7);

      if (usernameInput.value === "maxslane@icloud.com") {
        aptrinsic("identify",
        {
        //User Fields
          "id": a, // Required for logged in app users
          "email": usernameInput.value,
          "accountId": b, // Required for logged in app users
          "role": "Admin",
          "firstName": "Max",
          "lastName": "Lane",
          "position": "Head,Dev"
        },
        {
          "id": "DEV",
          "name": "Developer",
          "parentGroupId": "TestingAttribute"
        });
      } else if (usernameInput.value === "mxwell.lane@gmail.com") {
        aptrinsic("identify",
        {
          //User Fields
            "id": a, // Required for logged in app users
            "email": usernameInput.value,
            "accountId": b, // Required for logged in app users
            "role": "User",
            "firstName": "Maxwell",
            "lastName": "Lane",
            "language": "es-MX"
          },
          {
            "id": "changedAcctID",
            "name": "Developer"
          });
      } else if (usernameInput.value === "hshahalami@hotmail.com") {
        aptrinsic("identify",
        {
          //User Fields
            "id": a, // Required for logged in app users
            "email": usernameInput.value,
            "accountId": b, // Required for logged in app users
            "role": "User",
            "firstName": "Husna",
            "lastName": "Lane"
          },
          {
            "id": "DEV",
            "name": "Developer"
          });
        } else if (usernameInput.value === "admin@maxtech.com") {
            aptrinsic("identify",
            {
              //User Fields
                "id": a, // Required for logged in app users
                "email": usernameInput.value,
                "accountId": b, // Required for logged in app users
                "role": "Admin",
                "firstName": "Max",
                "lastName": "Lane"
              },
              {
                "id": "DEV",
                "name": "Developer"
              });  
          } 

      attempts = 3;
      sessionStorage.setItem('status','loggedIn');
      alert('User Logged In!');
      localStorage.setItem=('user', usernameInput.value);
      window.location.assign("./home.html");
  
}



function logout() {
  sessionStorage.removeItem('status');
  localStorage.removeItem=('user');
  window.aptrinsic('reset'); 
  window.location.assign("index.html");
}


(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
  (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-PNUVLPA2TANP-2"
    );
    

formElement.addEventListener('submit', onFormSubmit);
    
function customEvent() {
  aptrinsic('track', 'Special Instructions', {"name":"Special Instructions", "completed": true });
}

function apiTest() {
  aptrinsic('track', '8am Start', {"name":"8am Start", "selected": true });
}

function apiTest2() {
  aptrinsic('track', 'testEvent3', {"eventName": "testEvent3",
  "identifyId": "@iclo",
  "propertyKey": "AP-PNUVLPA2TANP-2",
  "userType": "USER" });
}

function setGcxTrue() {
  window.aptrinsic('set', 'globalContext', {"isTrial":"true"});
}

function setGcxFalse() {
  window.aptrinsic('set', 'globalContext', {"isTrial":"false"});
}