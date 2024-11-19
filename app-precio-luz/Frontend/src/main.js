
import { createLoadButton } from './components/LoadButton/loadButton.js';
import { createSpinner } from './components/spinner/spinner.js';
 

export const handleClick = () => {
    const app = document.getElementById('app');  
    const spinner = createSpinner();
    app.appendChild(spinner); // añadir spinner al DOM
};

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById("app");
    const loadPriceBtn = createLoadButton();
    app.appendChild(loadPriceBtn);
    
    loadPriceBtn.addEventListener("click",handleClick);
});

