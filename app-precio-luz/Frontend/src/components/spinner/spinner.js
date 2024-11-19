/**Spinner con 3 estados -->
 * crear el spinner
 * Mostrar el spinner
 * Ocultar el spinner 
 */

export const createSpinner = () => {
    const spinner = document.createElement('div');
    spinner.id='spinner';
    spinner.classList.add('hidden', 'spinner');
    spinner.textContent = 'Cargando...';
    return spinner;
}

export const showSpinner = () => {
    //Mostrar el spinner
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden');
}

export const hideSpinner = () => {
    //Ocultar el spinner
    const spinner = document.getElementById('spinner');
    spinner.classList.add('hidden');
}