//seleccion de elementos del DOM
const appDiv = document.getElementById('app');

appDiv.innerText = "Hola mundo";
appDiv.innerHTML = "<h1>Hola Mundo</h1>";


// Añadir clases 
appDiv.classList.add('clase1', 'class2');

//Seleccion de clase
const items = document.getElementsByClassName('items');
let n=0;
for(const item of items) {
    //item.textContent = `Hola amigo ${n}`;
    item.textContent = `Hola amigo ${n}`;
    n++;
}

//Seleccion por clase
const saludo = document.querySelector('.saludo');
const saludos  = document.querySelectorAll('.saludo');

saludos.forEach((element, index) => {
    element.textContent = `Hola amiga ${index}`;
})

//Añadimos atributos 
const migit = document.getElementById('github');
migit.setAttribute("target", "_blank");

//Removemos atributos
migit.removeAttribute("target");

//poner text
migit.textContent = "Visita mi Github";