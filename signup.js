var userName = document.getElementById("name");
var userAge = document.getElementById("age");
var userEmail = document.getElementById("Email");
var userPass = document.getElementById("password");
var userRePass = document.getElementById('repassword');
var signUpButton = document.getElementById("button");
var nameAlert = document.getElementById('alertName');
var ageAlert = document.getElementById('alertAge')
var emailAlert = document.getElementById('alertEmail');
var PassAlert = document.getElementById('alertPassword');
var RePassAlert = document.getElementById('alertrePassword');

//events
signUpButton.addEventListener("click", signUp);
userName.addEventListener("keyup", validationName);
userEmail.addEventListener("keyup", validationEmail);
userPass.addEventListener("keyup", validationPass);
userAge.addEventListener("keyup", validationAge)
userRePass.addEventListener('keyup', Validationrepass)


function moveToNextPage() {

    goToLoginPage.href = "home.html";

}
// goToLoginPage.addEventListener("click", moveToNextPage);

function signUp() {
    if (userName.value == "" || userEmail.value == "" || userPass.value == "" || userRePass.value == "" || userAge.value == "") {
        signUpButton.disabled = "true";
        alert('all inputs requerd');

    } else {
        signUpButton.addEventListener("click", moveToNextPage);
        localStorage.setItem('user Name', userName.value);
        localStorage.setItem('Email', userEmail.value);
        localStorage.setItem('password', userPass.value);
    }
}


///name validation 
function validationName() {
    var nameRejex = /^[A-Za-z]{3,6}\s{1}[A-Za-z]{3,6}$/i;
    if (!nameRejex.test(userName.value)) {
        signUpButton.disabled = "true";
        userName.classList.add("is-invalid");
        userName.classList.remove("is-valid");
        nameAlert.classList.remove("d-none");

    } else {
        signUpButton.removeAttribute("disabled");
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        nameAlert.classList.add("d-none");

    }
}
//Email validation
function validationEmail() {
    var emailRejex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRejex.test(userEmail.value)) {
        signUpButton.disabled = "true";
        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
        emailAlert.classList.remove("d-none");


    } else {
        signUpButton.removeAttribute("disabled");
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        emailAlert.classList.add("d-none");

    }
}
//age validation 
function validationAge() {
    if (!((userAge.value >= 5)&& (userAge.value < 60))) {
        signUpButton.disabled = "true";
        userAge.classList.add("is-invalid");
        userAge.classList.remove("is-valid");
        ageAlert.classList.remove("d-none");

    } else {
        signUpButton.removeAttribute("disabled");
        userAge.classList.remove("is-invalid");
        userAge.classList.add("is-valid");
        ageAlert.classList.add("d-none");

    }

}
// validation password input

function validationPass() {
    var passRejex = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{4,8}$/;
    var paasre = passRejex.test(userPass.value)
    if (!paasre) {
        signUpButton.disabled = "true";
        userPass.classList.add("is-invalid");
        userPass.classList.remove("is-valid");
        PassAlert.classList.remove("d-none");

    } else {
        signUpButton.removeAttribute("disabled");
        userPass.classList.remove("is-invalid");
        userPass.classList.add("is-valid");
        PassAlert.classList.add("d-none");

    }
}

function Validationrepass() {
    var userPass = document.getElementById("password").value;
    var userRePass = document.getElementById('repassword').value;
    if (userPass == userRePass && userPass != "" && userRePass != "") {
        signUpButton.removeAttribute("disabled");
        userRePass.classList.remove("is-invalid");
        userRePass.classList.add("is-valid");
        alertrePassword.classList.add("d-none");
    } else {
        signUpButton.disabled = "true";
        userRePass.classList.add("is-invalid");
        userRePass.classList.remove("is-valid");
        alertrePassword.classList.remove("d-none");

    }
}