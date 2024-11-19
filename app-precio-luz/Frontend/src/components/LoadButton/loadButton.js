export const createLoadButton = () => {
    const button = document.createElement('button');
    button.id = 'load-prices-btn';
    button.textContent = 'Cargar precios de la luz';
    button.classList.add('load-btn');
    return button;
}

