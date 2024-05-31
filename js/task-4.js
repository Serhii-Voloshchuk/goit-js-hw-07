const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event =>{

event.preventDefault();

const forms = event.currentTarget.elements;


const inputMailTrimmed = formElements.email.value.trim();
const inputPasswordTrimmed = formElements.password.value.trim();



if(!inputMailTrimmed || !inputPasswordTrimmed){
    alert ('All form fields must be filled in');
    return;
};

const formsValues = {
    email: inputMailTrimmed,
    password: inputPasswordTrimmed
};


console.log(formsValues);

forms.reset();


});