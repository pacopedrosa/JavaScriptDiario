export class Usuario {
    #email;

    constructor(nombre, email, rol) {
        this.nombre = nombre;
        this.#email = this.#validarEmail(email) ? email : null;
        this.rol = ["admin", "usuario"].includes(rol) ? rol : "usuario";
    }

    #validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    get email() {
        return this.#email;
    }

    set email(nuevoEmail) {
        if (this.#validarEmail(nuevoEmail)) {
            this.#email = nuevoEmail;
            console.log(`Email actualizado a: ${this.#email}`);
        } else {
            console.log("Email inválido.");
        }
    }

    actualizarRol(nuevoRol) {
        if (["admin", "usuario"].includes(nuevoRol)) {
            this.rol = nuevoRol;
            console.log(`Rol actualizado a: ${this.rol}`);
        } else {
            console.log("Rol inválido.");
        }
    }
}

export class UsuarioPremium extends Usuario {
    constructor(nombre, email) {
        super(nombre, email, "usuario");
        this.suscripciónActiva = false;
    }

    activarSuscripción() {
        this.suscripciónActiva = true;
        console.log("Suscripción activada.");
    }

    cancelarSuscripción() {
        this.suscripciónActiva = false;
        console.log("Suscripción cancelada.");
    }
}

//Falta comprobar si funciona
