import { emailForm, createTabs } from "./scripts";

emailForm();

const input = document.getElementById('email');
const mensajeError = input.nextElementSibling;
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const submitButton = input.nextElementSibling.nextElementSibling;

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (regex.test(input.value)) {
    mensajeError.style.display = 'none';
  } else {
    mensajeError.style.display = 'block';
  }
});

createTabs()