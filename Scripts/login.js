const emailSignIn = document.getElementById("email-signIn");
const emailSignInErrorElement = document.getElementById("validation-msg-emailSignIn");
const passwordSignIn = document.getElementById("password-signIn");
const nameRegister = document.getElementById("name");
const surnameRegister = document.getElementById("surname");
const emailRegister = document.getElementById("email-reg");
const emailRegisterErrorElement = document.getElementById("validation-msg-emailRegistration");
const emailRegisterRepeat = document.getElementById("email-reg-repeat");
const passwordRegister = document.getElementById("password-reg");
const passwordRegisterRepeat = document.getElementById("password-reg-repeat");

let text;

const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail (email, errorMessageElement) {
    if (email.value === "") {
        text = "Please enter email";
        errorMessageElement.innerHTML = text;
        email.classList.add("error-input");
    } else if (!emailPattern.test(email.value)) {
        text = "Please enter a valid email address";
        errorMessageElement.innerHTML = text;
        email.classList.add("error-input");
    } 
    else {
        errorMessageElement.innerHTML = "";
        email.classList.remove("error-input");
        return true;
    }
}

function validatePasswordSignIn (password) {
    if (passwordSignIn.value === "") {
        text = "Please enter password";
        document.getElementById("validation-msg-passwordSignIn").innerHTML = text;
        passwordSignIn.classList.add("error-input");
    } else {
        document.getElementById("validation-msg-passwordSignIn").innerHTML = "";
        passwordSignIn.classList.remove("error-input");
        return true;
    }  
}

function validateFormSignInAndRedirect() {

    validateEmail (emailSignIn, emailSignInErrorElement);
    validatePasswordSignIn(passwordSignIn);
    
    if (validateEmail (emailSignIn, emailSignInErrorElement) &&
        validatePasswordSignIn(passwordSignIn)
    ) {
        window.location.href = "home.html";
    }
}

function validateNameReg (name) {
    if (name.value.length < 2) {
        text = "Please fill in the name";
        document.getElementById("validation-msg-name").innerHTML = text;
        name.classList.add("error-input");
    } else {
        document.getElementById("validation-msg-name").innerHTML = "";
        name.classList.remove("error-input");
        return true;
    }
}

function validateSurnameReg (surname) {
    if (surname.value.length < 2) {
        text = "Please fill in the surname";
        document.getElementById("validation-msg-surname").innerHTML = text;
        surname.classList.add("error-input");
    } else {
        document.getElementById("validation-msg-surname").innerHTML = "";
        surname.classList.remove("error-input");
        return true;
    }
}

function validatePassword (password) {
    if (password.value.length < 8) {
        text = "Please fill in the password";
        document.getElementById("validation-msg-passwordReg").innerHTML = text;
        password.classList.add("error-input");
    } else {
        document.getElementById("validation-msg-passwordReg").innerHTML = "";
        password.classList.remove("error-input");
        return true;
    }
}

function validatePasswordRepeat (password, passwordRepeat) {
    if (passwordRepeat.value === "") {
        text = "Please repeat the password";
        document.getElementById("validation-msg-passwordRepeat").innerHTML = text;
        passwordRepeat.classList.add("error-input");
    } else if (password.value !== passwordRepeat.value) {
        text = "Passwords does not match";
        document.getElementById("validation-msg-passwordRepeat").innerHTML = text;
        passwordRepeat.classList.add("error-input");
    } else {
        document.getElementById("validation-msg-passwordRepeat").innerHTML = "";
        passwordRepeat.classList.remove("error-input");
        return true;
    }
}

function validateEmailRepeat (email, emailRepeat) {
    if (emailRepeat.value === "") {
        text = "Please repeat the email";
        document.getElementById("validation-msg-emailRegRepeat").innerHTML = text;
        emailRepeat.classList.add("error-input");
    } else if (email.value !== emailRepeat.value) {
        text = "Email addresses do not match";
        document.getElementById("validation-msg-emailRegRepeat").innerHTML = text;
        emailRepeat.classList.add("error-input");
    } else {
        document.getElementById("validation-msg-emailRegRepeat").innerHTML = "";
        emailRepeat.classList.remove("error-input");
        return true;
    }
}

function validateFormRegAndRedirect () {
    
    validateNameReg(nameRegister);
    validateSurnameReg(surnameRegister);
    validateEmail(emailRegister, emailRegisterErrorElement);
    validateEmailRepeat(emailRegister, emailRegisterRepeat);
    validatePassword(passwordRegister);
    validatePasswordRepeat(passwordRegister, passwordRegisterRepeat);

    if (validateNameReg(nameRegister) &&
        validateSurnameReg(surnameRegister) &&
        validateEmail(emailRegister, emailRegisterErrorElement) &&
        validateEmailRepeat(emailRegister, emailRegisterRepeat) &&
        validatePassword(passwordRegister) &&
        validatePasswordRepeat(passwordRegister, passwordRegisterRepeat)
    ) {
        window.location.href = "home.html";
    }
}

function showFormRegister() {
    const formRegister = document.getElementById("form-register");
    const formSignIn = document.getElementById("form-signIn");
    const btnOpenFormRegister = document.getElementById("btn-openFormRegister");

    formRegister.style.display= "flex";
    formSignIn.style.display= "none";
    btnOpenFormRegister.style.display= "none";
}