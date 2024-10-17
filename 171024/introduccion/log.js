document.title = 'Iniciar Sesión';


const container = document.createElement('div');
container.style.margin = '20px';


const title = document.createElement('h2');
title.textContent = 'Iniciar Sesion';
container.appendChild(title);

const form = document.createElement('form');


const usernamelabel = document.createElement('label');
usernamelabel.textContent = 'Nombre de Usuario';

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;         
form.appendChild(usernamelabel);
form.appendChild(usernameInput);


const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Contraseña';

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.required = true;    
form.appendChild(passwordLabel);
form.appendChild(passwordInput);


const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Iniciar Sesion';
form.appendChild(submitButton);

const message = document.createElement('p');
container.appendChild(form);
container.appendChild(message);


document.body.appendChild(container);


const validarUser = 'Juan';
const validarPassword = 'PerroAlcantarillaChinaLog123-';

//odzy 😈 reference
form.addEventListener('submit', (event) => {
    event.preventDefault();

    
    if(usernameInput.value == "Juan" && passwordInput.value == "PerroAlcantarillaChinaLog123-"){
        message.textContent = '¡BIENVENIDO!';
        message.style.color = 'green';
    }

})