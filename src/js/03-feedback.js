import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

const userForm = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextereaInput, 500)); 

formSavedInfoUser();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}

function onTextereaInput(evt) {
    userForm[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(userForm));
}

function formSavedInfoUser() {
    const messageUser = localStorage.getItem("feedback-form-state");
    const messageUserOut = JSON.parse(messageUser);
if (messageUserOut.message || messageUserOut.email) {
        textarea.value = messageUserOut.message;
    input.value = messageUserOut.email;
}
        }
