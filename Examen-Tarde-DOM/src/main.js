import { eventForm } from './components/EventForm.js';
import { NavBar } from './components/NavBar.js';
import { EventManager } from './clasess/EventManager.js';
import { evenList } from './components/EventList.js';

const url = import.meta.env.VITE_URL_API;
const eventManager = new EventManager(url);

const app = document.getElementById("app");

app.appendChild(NavBar({ nombre: "Saul", fecha: "12-11-2005" }));
app.appendChild(eventForm(eventManager));
evenList().then(eventListElement => {
    app.appendChild(eventListElement);
});

// import { eventForm } from './components/EventForm.js';
// import { NavBar } from './components/NavBar.js';
// import { EventManager } from './clasess/EventManager.js';
// import { evenList } from './components/EventList.js';

// const url = import.meta.env.VITE_URL_API;

// // Crear una instancia de EventManager

// const eventManager = new EventManager(url);

// const app = document.getElementById("app")
// app.appendChild(NavBar({nombre: "Saul", fecha: "12-11-2005"}));
// app.appendChild(eventForm(eventManager));
// app.appendChild(evenList())


