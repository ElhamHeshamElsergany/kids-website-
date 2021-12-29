//!variables
var logInEmail = document.getElementById("logInEmail");
var logInPass = document.getElementById("logInPass");
var logInButton = document.getElementById("logInButton");
var checkInput = document.getElementById("checkInput");
var emailAlert = document.getElementById("emailAlert");
var passAlert = document.getElementById("passAlert");


logInButton.addEventListener("click", chickValidData);

var storedEmail= localStorage.getItem("Email");
var storedPass= localStorage.getItem("password");
console.log(storedEmail)
console.log(storedPass)


//!function

function chickValidData() {
    if ( storedEmail==logInEmail.value && storedPass==logInPass.value ) {
        alert("go to Homepage")
       window.open("http://127.0.0.1:5501/home.html")
      
    }else{
        invalideInput()
    }
  
}
function invalideInput() {
  checkInput.classList.remove("d-none");
}



