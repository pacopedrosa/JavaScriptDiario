const divForm = () => {
    const divForm = document.createElement('div');
    divForm.classList.add('form-container');
    const formEmail = document.createElement('form');
    //Crear el label
    const label = document.createElement('label');
    label.textContent = 'Email:';
    formEmail.appendChild(label);
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('name', 'email');
    inputEmail.id='email';
    inputEmail.setAttribute('placeholder', 'Escribe tu email');
    formEmail.appendChild(inputEmail);
    divForm.appendChild(formEmail);
    app.appendChild(divForm);
    const pEmailCheck = document.createElement('p');
    pEmailCheck.id='email-check';
    pEmailCheck.textContent = 'Email no valido';
    pEmailCheck.style.color='red';
    // pEmailCheck.style.display='none';
    divForm.appendChild(pEmailCheck);


    //Logica de validacion del email
    //Necesito una expresion regular para validar el email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    inputEmail.addEventListener('input', function(e) {
        const isValidEmail = emailRegex.test(inputEmail.value);
        pEmailCheck.style.display = isValidEmail ? 'none': 'block'; 
    });
    return divform;
}

export default divForm;