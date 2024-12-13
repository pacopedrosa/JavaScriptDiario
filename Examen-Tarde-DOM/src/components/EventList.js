import { EventManager } from "../clasess/EventManager.js";

export async function evenList() {
    const miDiv = document.createElement('div');
    miDiv.classList.add('card');

    const url = import.meta.env.VITE_URL_API;
    const manager = new EventManager(url);
    const importantEvents = manager.getImportantEvents();

    try {
        const events = await manager.fetchEvents();

        if (!Array.isArray(events)) {
            throw new Error('La respuesta no es un arreglo');
        }

        events.forEach(event => {
            const miDiv2 = document.createElement('div');
            if (importantEvents.includes(event.id)) {
                miDiv2.style.backgroundColor = 'orange';
            }
            const p1 = document.createElement('p');
            p1.textContent = 'Titulo: ' + event.title;
            const p2 = document.createElement('p');
            p2.textContent = 'Fecha: ' + event.date;
            const p3 = document.createElement('p');
            p3.textContent = 'Organizador: ' + event.organizer;

            miDiv2.append(p1, p2, p3);

            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.addEventListener('click', () => {
                manager.deleteEvent(event.id);
            });

            const botonImportante = document.createElement('button');
            botonImportante.textContent = importantEvents.includes(event.id) ? 'Desmarcar' : 'Marcar como importante';
            botonImportante.addEventListener('click', () => {
                manager.markAsImportant(event.id);
                if (miDiv2.style.backgroundColor === 'orange') {
                    miDiv2.style.backgroundColor = 'white';
                    botonImportante.textContent = 'Marcar como importante';
                } else {
                    miDiv2.style.backgroundColor = 'orange';
                    botonImportante.textContent = 'Desmarcar';
                }
            });

            miDiv2.append(botonEliminar, botonImportante);
            miDiv.appendChild(miDiv2);
        });
    } catch (error) {
        console.error('Error al obtener los eventos:', error);
    }

    return miDiv;
}
