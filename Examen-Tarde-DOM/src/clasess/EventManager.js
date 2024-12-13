import { MyEvent } from "../clasess/Event.js";

export class EventManager {
    #events;
    #apiURL;

    constructor(apiUrl) {
        this.#events = [];
        this.#apiURL = apiUrl;
    }

    async fetchEvents() {
        try {
            const response = await fetch(this.#apiURL);
            if (!response.ok) {
                throw new Error("Error al cargar la data");
            }
            const data = await response.json();
            const events = data || []; 
            this.#events = events.map(event => {
                if (event.id && event.title && event.date) {
                    return new MyEvent(event.id, event.title, event.date, event.organizer || 'Sin organizador');
                } else {
                    console.warn('Evento con datos incompletos:', event);
                    return null;
                }
            }).filter(event => event !== null);
            return this.#events;
        } catch (error) {
            console.log("Error al cargar: ", error);
        }
    }

    async addEvent(event) {
        try {
            const response = await fetch(this.#apiURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: event.title,
                    date: event.date,
                    organizer: event.organizer
                })
            });
            
            const newEvent = await response.json();
            const createdEvent = new MyEvent(newEvent.id, event.title, event.date, event.organizer);
            this.#events.push(createdEvent);
            
            return this.#events;
        } catch (error) {
            console.log("Error al añadir el evento:", error);
        }
    }

    async deleteEvent(eventId) {
        try {
            console.log('Deleting event with ID:', eventId);
            const response = await fetch(`${this.#apiURL}/${eventId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!response.ok) {
                throw new Error('no se ha podido eliminar');
            }
            const deleteEvent = await response.json();
            this.#events = this.#events.filter(event => event.id !== eventId);
            return deleteEvent;
        } catch (error) {
            console.log("Error al eliminar", error);
        }
    }

    markAsImportant(eventId) {
        let importantEvents = JSON.parse(localStorage.getItem("importantEvents")) || [];
        if (!importantEvents.includes(eventId)) {
            importantEvents.push(eventId);
        } else {
            importantEvents = importantEvents.filter(id => id !== eventId);
        }
        localStorage.setItem("importantEvents", JSON.stringify(importantEvents));
    }

    getImportantEvents() {
        const importantEvents = JSON.parse(localStorage.getItem("importantEvents")) || [];
        return importantEvents;
    }

    getEvents() {
        return this.#events;
    }
}
