export class VehiculoClass {
    constructor(marca, modelo, kilometraje) {
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = kilometraje;
    }

    registrarViaje(kms) {
        this.kilometraje += kms;
    }
}

export class CamionClass extends VehiculoClass {
    constructor(marca, modelo, kilometraje, capacidadCarga) {
        super(marca, modelo, kilometraje);
        this.capacidadCarga = capacidadCarga;
    }

    registrarViaje(kms, peso) {
        this.kilometraje += kms;
        console.log(`El camión transportó ${peso} toneladas y ahora tiene ${this.kilometraje} kms.`);
    }
}

export class AutomovilClass extends VehiculoClass {
    constructor(marca, modelo, kilometraje, capacidadPasajeros) {
        super(marca, modelo, kilometraje);
        this.capacidadPasajeros = capacidadPasajeros;
    }

    registrarViaje(kms) {
        this.kilometraje += kms;
        console.log(`El automóvil viajó ${kms} kms y ahora tiene ${this.kilometraje} kms.`);
    }
}

export function Vehiculo(marca, modelo, kilometraje) {
    this.marca = marca;
    this.modelo = modelo;
    this.kilometraje = kilometraje;
}

Vehiculo.prototype.registrarViaje = function (kms) {
    this.kilometraje += kms;
};

export function Camion(marca, modelo, kilometraje, capacidadCarga) {
    Vehiculo.call(this, marca, modelo, kilometraje);
    this.capacidadCarga = capacidadCarga;
}

Camion.prototype = Object.create(Vehiculo.prototype);
Camion.prototype.constructor = Camion;

Camion.prototype.registrarViaje = function (kms, peso) {
    this.kilometraje += kms;
    console.log(`El camión transportó ${peso} toneladas y ahora tiene ${this.kilometraje} kms.`);
};

export function Automovil(marca, modelo, kilometraje, capacidadPasajeros) {
    Vehiculo.call(this, marca, modelo, kilometraje);
    this.capacidadPasajeros = capacidadPasajeros;
}

Automovil.prototype = Object.create(Vehiculo.prototype);
Automovil.prototype.constructor = Automovil;

Automovil.prototype.registrarViaje = function (kms) {
    this.kilometraje += kms;
    console.log(`El automóvil viajó ${kms} kms y ahora tiene ${this.kilometraje} kms.`);
};


export function crearVehiculo(tipo, marca, modelo, kilometraje, extraPropiedad) {
    if (tipo === "camion") {
        return {
            marca,
            modelo,
            kilometraje,
            capacidadCarga: extraPropiedad,
            registrarViaje(kms, peso) {
                this.kilometraje += kms;
                console.log(`El camión transportó ${peso} toneladas y ahora tiene ${this.kilometraje} kms.`);
            }
        };
    } else if (tipo === "automovil") {
        return {
            marca,
            modelo,
            kilometraje,
            capacidadPasajeros: extraPropiedad,
            registrarViaje(kms) {
                this.kilometraje += kms;
                console.log(`El automóvil viajó ${kms} kms y ahora tiene ${this.kilometraje} kms.`);
            }
        };
    } else {
        throw new Error("Tipo de vehículo no válido.");
    }
}



//Falta comprobar si funciona en el main.js