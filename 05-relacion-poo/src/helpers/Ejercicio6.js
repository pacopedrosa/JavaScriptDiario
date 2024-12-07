export class Habitacion {
    #reservada = false;

    constructor(numero, tipo, precio) {
        this.numero = numero;
        this.tipo = tipo;
        this.precio = precio;
    }

    reservar() {
        if (!this.#reservada) {
            this.#reservada = true;
            console.log(`Habitación ${this.numero} reservada.`);
        } else {
            console.log(`La habitación ${this.numero} ya está reservada.`);
        }
    }

    liberar() {
        if (this.#reservada) {
            this.#reservada = false;
            console.log(`Habitación ${this.numero} liberada.`);
        } else {
            console.log(`La habitación ${this.numero} ya está disponible.`);
        }
    }

    get reservada() {
        return this.#reservada;
    }
}

export class Reserva {
    static idCounter = 1;

    constructor(habitacion, cliente, dias) {
        this.id = Reserva.idCounter++;
        this.habitacion = habitacion;
        this.cliente = cliente;
        this.dias = dias;
    }

    calcularTotal() {
        return this.habitacion.precio * this.dias;
    }
}

export class GestorReservas {
    constructor() {
        this.reservas = [];
    }

    crearReserva(cliente, numeroHabitacion, dias, habitaciones) {
        const habitacion = habitaciones.find((h) => h.numero === numeroHabitacion);
        if (!habitacion) {
            console.log("Habitación no encontrada.");
            return;
        }
        if (habitacion.reservada) {
            console.log("La habitación ya está reservada.");
            return;
        }
        habitacion.reservar();
        const reserva = new Reserva(habitacion, cliente, dias);
        this.reservas.push(reserva);
        console.log("Reserva creada:", reserva);
    }

    cancelarReserva(id) {
        const index = this.reservas.findIndex((r) => r.id === id);
        if (index !== -1) {
            this.reservas[index].habitacion.liberar();
            this.reservas.splice(index, 1);
            console.log(`Reserva con ID ${id} cancelada.`);
        } else {
            console.log("Reserva no encontrada.");
        }
    }

    listarReservas() {
        return this.reservas;
    }
}

export function Habitacion(numero, tipo, precio) {
    let reservada = false;

    this.numero = numero;
    this.tipo = tipo;
    this.precio = precio;

    this.reservar = function () {
        if (!reservada) {
            reservada = true;
            console.log(`Habitación ${numero} reservada.`);
        } else {
            console.log(`La habitación ${numero} ya está reservada.`);
        }
    };

    this.liberar = function () {
        if (reservada) {
            reservada = false;
            console.log(`Habitación ${numero} liberada.`);
        } else {
            console.log(`La habitación ${numero} ya está disponible.`);
        }
    };

    this.isReservada = function () {
        return reservada;
    };
}

export function Reserva(id, habitacion, cliente, dias) {
    this.id = id;
    this.habitacion = habitacion;
    this.cliente = cliente;
    this.dias = dias;
}

Reserva.prototype.calcularTotal = function () {
    return this.habitacion.precio * this.dias;
};

export function GestorReservas() {
    const reservas = [];
    let reservaId = 1;

    this.crearReserva = function (cliente, numeroHabitacion, dias, habitaciones) {
        const habitacion = habitaciones.find((h) => h.numero === numeroHabitacion);
        if (!habitacion) {
            console.log("Habitación no encontrada.");
            return;
        }
        if (habitacion.isReservada()) {
            console.log("La habitación ya está reservada.");
            return;
        }
        habitacion.reservar();
        const nuevaReserva = new Reserva(reservaId++, habitacion, cliente, dias);
        reservas.push(nuevaReserva);
        console.log("Reserva creada:", nuevaReserva);
    };

    this.cancelarReserva = function (id) {
        const index = reservas.findIndex((r) => r.id === id);
        if (index !== -1) {
            reservas[index].habitacion.liberar();
            reservas.splice(index, 1);
            console.log(`Reserva con ID ${id} cancelada.`);
        } else {
            console.log("Reserva no encontrada.");
        }
    };

    this.listarReservas = function () {
        return reservas;
    };
}

export function crearHabitacion(numero, tipo, precio) {
    let reservada = false;

    return {
        numero,
        tipo,
        precio,
        reservar() {
            if (!reservada) {
                reservada = true;
                console.log(`Habitación ${numero} reservada.`);
            } else {
                console.log(`La habitación ${numero} ya está reservada.`);
            }
        },
        liberar() {
            if (reservada) {
                reservada = false;
                console.log(`Habitación ${numero} liberada.`);
            } else {
                console.log(`La habitación ${numero} ya está disponible.`);
            }
        },
        isReservada() {
            return reservada;
        },
    };
}

export function crearReserva(id, habitacion, cliente, dias) {
    return {
        id,
        habitacion,
        cliente,
        dias,
        calcularTotal() {
            return habitacion.precio * dias;
        },
    };
}

export function crearGestorReservas() {
    const reservas = [];
    let reservaId = 1;

    return {
        crearReserva(cliente, numeroHabitacion, dias, habitaciones) {
            const habitacion = habitaciones.find((h) => h.numero === numeroHabitacion);
            if (!habitacion) {
                console.log("Habitación no encontrada.");
                return;
            }
            if (habitacion.isReservada()) {
                console.log("La habitación ya está reservada.");
                return;
            }
            habitacion.reservar();
            const nuevaReserva = crearReserva(reservaId++, habitacion, cliente, dias);
            reservas.push(nuevaReserva);
            console.log("Reserva creada:", nuevaReserva);
        },
        cancelarReserva(id) {
            const index = reservas.findIndex((r) => r.id === id);
            if (index !== -1) {
                reservas[index].habitacion.liberar();
                reservas.splice(index, 1);
                console.log(`Reserva con ID ${id} cancelada.`);
            } else {
                console.log("Reserva no encontrada.");
            }
        },
        listarReservas() {
            return reservas;
        },
    };
}