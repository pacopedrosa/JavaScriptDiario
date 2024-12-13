import { MyEvent } from "../clasess/Event.js";

export function eventForm(eventos) {
    const form = document.createElement("form");
    const labelTitulo = document.createElement("label");
    labelTitulo.textContent = "Titulo: ";
    const inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.id = "inputTitulo";
    const labelFecha = document.createElement("label");
    labelFecha.textContent = "Fecha: ";
    const inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.id = "inputFecha";
    const labelOrganizador = document.createElement("label");
    labelOrganizador.textContent = "Organizador: ";
    const inputOrganizador = document.createElement("input");
    inputOrganizador.type = "text";
    const boton = document.createElement("button");
    boton.type = "submit";
    boton.textContent = "Agregar Evento";

    form.appendChild(labelTitulo);
    form.appendChild(inputTitulo);
    form.appendChild(labelFecha);
    form.appendChild(inputFecha);
    form.appendChild(labelOrganizador);
    form.appendChild(inputOrganizador);
    form.appendChild(boton);

    function botonGuardarFunction(event) {
        event.preventDefault();
        const title = document.getElementById("inputTitulo").value;
        const date = document.getElementById("inputFecha").value;
        const newEvent = new MyEvent(title, date);
        eventos.addEvent(newEvent);  
        inputTitulo.value = '';
        inputFecha.value = '';
        inputOrganizador.value = '';
    }

    boton.addEventListener("click", botonGuardarFunction);

    return form;
}


// import { MyEvent } from "../clasess/Event.js";



// export function eventForm(eventos){
//     const form = document.createElement("form")
//     const labelTitulo = document.createElement("label");
//     labelTitulo.textContent = "Titulo: ";

//     const inputTitulo = document.createElement("input");
//     inputTitulo.type = "text";
//     inputTitulo.id = "inputTitulo";
    
//     const labelFecha = document.createElement("label");
//     labelFecha.textContent = "Fecha: ";
    

//     const inputFecha = document.createElement("input");
//     inputFecha.type = "date";
//     inputFecha.id = "inputFecha";

//     const labelOrganizador = document.createElement("label");
//     labelOrganizador.textContent = "Organizador: ";

//     const inputOrganizador = document.createElement("input");
//     inputOrganizador.type = "text";

//     const boton = document.createElement("button");
//     boton.type = "submit";
//     boton.textContent = "Agregar Evento";

//     form.appendChild(labelTitulo);
//     form.appendChild(inputTitulo);
//     form.appendChild(labelFecha);
//     form.appendChild(inputFecha);
//     form.appendChild(labelOrganizador);
//     form.appendChild(inputOrganizador);
//     form.appendChild(boton);

//     const toggleButton = document.createElement("button");
//     toggleButton.textContent = "Mostrar Formulario";
//     toggleButton.style.marginBottom = "10px";

//     toggleButton.addEventListener("click", () => {
//         if (form.style.display === "none") {
//             form.style.display = "block";
//             toggleButton.textContent = "Ocultar Formulario";
//         } else {
//             form.style.display = "none";
//             toggleButton.textContent = "Mostrar Formulario";
//         }
//     });

//     const nav = document.getElementById("navBar")

//     nav.appendChild(toggleButton);

//     function botonGuardarFunction(event){
//         event.preventDefault();
//         const title = document.getElementById("inputTitulo").value;
//         const date = document.getElementById("inputFecha").value;

//         const newEvent = new MyEvent(title,date);
//         eventos.addEvent(newEvent);  

//         inputTitulo.value = '';
//         inputFecha.value = '';
//         inputOrganizador.value = '';
//     }

//     boton.addEventListener("click", botonGuardarFunction);

//     return form;


// }