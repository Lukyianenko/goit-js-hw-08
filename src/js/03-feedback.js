import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

const userForm = {};

onSavedInfoReload();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextereaInput, 500)); 


function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(userForm);
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}

function onTextereaInput(evt) {
    userForm[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(userForm));
}

function onSavedInfoReload() {
    const userWrited = localStorage.getItem("feedback-form-state");
    const userWritedBack = JSON.parse(userWrited);
    if (userWrited) {
        if (userWritedBack.email) {
            input.value = userWritedBack.email;
        } 
    
        if (userWritedBack.message) {
            textarea.value = userWritedBack.message;
        }   
    }
     

}