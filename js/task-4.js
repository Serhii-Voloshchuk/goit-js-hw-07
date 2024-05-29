const loginForm = document.querySelector('login-form');

loginForm.addEventListener('submit', event =>{

event.preventDefault();

const forms = event.currentTarget;

const inputMail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');
const inputMailTrimmed = inputMail.elements.value.trim();
const inputPasswordTrimmed = inputPassword.elements.value.trim();



if(!inputMailTrimmed || !inputPasswordTrimmed){
    alert ('All form fields must be filled in');
    return;
}

const formsValues = {
    email: inputMailTrimmed,
    password: inputPasswordTrimmed
};

forms.reset();

});