export class MyEvent {
    #id;
    #title;
    #date;
    #organizer;

    constructor(id, title, date, organizer) {
        this.#id = id;
        this.#title = title;
        this.#date = date;
        this.#organizer = organizer;
    }

    updateDate(newDate) {
        this.#date = newDate;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get date() {
        return this.#date;
    }

    get organizer() {
        return this.#organizer;
    }
}
