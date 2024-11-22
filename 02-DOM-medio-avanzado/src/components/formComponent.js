//Inicio de sesion

export default function formComponent() {
    const divFormLogin = document.createElement('div');
    divFormLogin.classList.add('form-container-login');
    divFormLogin.id = 'form-container-login';
    
    const formEmail = document.createElement('form');
    formEmail.id = 'form-login';
    const labelUsername = document.createElement('label');
    labelUsername.textContent = 'Username:';
    const inputUsername = document.createElement('input');
    inputPassword.id = 'username';
    inputUsername.setAttribute('type', 'text');
    inputUsername.setAttribute('name', 'Username');
    inputUsername.setAttribute('placeholder', 'Username');
    const labelPassword = document.createElement('label');
    labelPassword.textContent = 'Password:';
    const inputPassword = document.createElement('input');
    inputPassword.id = 'password';
    inputPassword.setAttribute('type', 'password');
    inputPassword.setAttribute('name', 'Password');
    inputPassword.setAttribute('placeholder', 'Password');
    const submit = createElement('input');
    submit.id ='submit';
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Login');
    submit,setAttribute('name', 'submit');
    
    formEmail.append(labelUsername, inputUsername, labelPassword, inputPassword, submit);
    divFormLogin.appendChild(formEmail);

    return divFormLogin;

}