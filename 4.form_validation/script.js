let form = document.querySelector('.form');
let userName = document.querySelector('#userName');
let password = document.querySelector('#password');

let userNamePattern = /^[a-zA-Z][a-zA-Z._]{4,12}$/;

let ep = 0;
let up = false;

form.addEventListener('submit', event => {
    if (!(ep === 5 && up == true)){
        event.preventDefault();
        if (up !== true){
            form.username.classList.add('is-invalid');  
        }
        if (ep !== 5){
            form.password.classList.add('is-invalid');  
        }
    }
})

form.username.addEventListener('keyup', event => {
    userName.textContent = event.target.value;
    if (userNamePattern.test(event.target.value)){
        event.target.classList.add('is-valid');
        event.target.classList.remove('is-invalid');
        up = true;
    }else{
        event.target.classList.add('is-invalid');
        up = false;
    }
})

form.password.addEventListener('keyup', event => {
    // password.textContent = '*'.repeat(event.target.value.length);
    password.textContent = event.target.value;
    ep = 0;
    ep += /[A-Z]/.test(event.target.value) ? 1 : 0;
    ep += /[a-z]/.test(event.target.value) ? 1 : 0;
    ep += /[0-9]/.test(event.target.value) ? 1 : 0;
    ep += /\W/.test(event.target.value) ? 1 : 0;
    ep += event.target.value.length >= 6 ? 1 : 0;

    if (ep === 5){
        event.target.classList.add('is-valid');
        event.target.classList.remove('is-invalid');
    }else{
        event.target.classList.add('is-invalid');
    }

})