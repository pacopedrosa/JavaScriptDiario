
export function NavBar({ nombre, fecha }) {
    
    const navBar = document.createElement("div");
    navBar.id = "navBar"
    
    const title = document.createElement("h2");
    title.textContent = "Examen JavaScript 2024";

    
    const info = document.createElement("p");
    info.textContent = `Nombre: ${nombre} | Fecha: ${fecha}`;

    // Botón Mostrar/Ocultar Formulario
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Mostrar Formulario";
    toggleButton.style.marginBottom = "10px";

    // Formulario dinámico (oculto inicialmente)
    const form = document.createElement("form");
    

    // Crear input para añadir eventos
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Nuevo Evento: ";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Escribe un evento";

    // Botón de envío
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Agregar Evento";
    submitButton.style.marginBottom = "10px";
    

    // Agregar input y botón al formulario
    form.appendChild(inputLabel);
    form.appendChild(input);
    form.appendChild(submitButton);

    // Lógica para mostrar/ocultar formulario
    toggleButton.addEventListener("click", () => {
        if (form.style.display === "none") {
            form.style.display = "block";
            toggleButton.textContent = "Ocultar Formulario";
        } else {
            form.style.display = "none";
            toggleButton.textContent = "Mostrar Formulario";
        }
    });

    // Agregar elementos al NavBar
    navBar.appendChild(title);
    navBar.appendChild(info);
    navBar.appendChild(toggleButton);
    navBar.appendChild(form);

    return navBar;

    
}

