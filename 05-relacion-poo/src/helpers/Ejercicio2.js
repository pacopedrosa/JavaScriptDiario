export class ProductoClass {
    // Variable de clase estática
    static contador = 0;

    constructor(nombre, precio, stock) {
        this.id = ProductoClass.contador++;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    actualizarStock(cantidad) {
        if (this.stock !== null) {
            this.stock += cantidad;
        } else {
            console.log("Los productos digitales no tienen stock.");
        }
    }

    info() {
        console.log(`
            ID: ${this.id}
            Nombre: ${this.nombre}
            Precio: ${this.precio} €
            Stock: ${this.stock !== null ? this.stock : "No aplica"}
        `);
    }
}

export class ProductoFisicoClass extends ProductoClass {
    constructor(nombre, precio, stock, dimensiones) {
        super(nombre, precio, stock);
        this.dimensiones = dimensiones;
    }

    info() {
        console.log(`
            ID: ${this.id}
            Nombre: ${this.nombre}
            Precio: ${this.precio} €
            Stock: ${this.stock}
            Dimensiones: Alto ${this.dimensiones.alto}, Ancho ${this.dimensiones.ancho}, Profundo ${this.dimensiones.profundo}
        `);
    }
}

export class ProductoDigitalClass extends ProductoClass {
    constructor(nombre, precio) {
        super(nombre, precio, null);
    }

    actualizarStock() {
        console.log("Los productos digitales no tienen stock.");
    }

    info() {
        console.log(`
            ID: ${this.id}
            Nombre: ${this.nombre}
            Precio: ${this.precio} €
            Stock: No aplica
        `);
    }
}


export function Producto(nombre, precio, stock) {
    // Propiedades estáticas
    Producto.contador = Producto.contador || 0;

    this.id = Producto.contador++;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

    this.actualizarStock = function (cantidad) {
        if (this.stock !== null) {
            this.stock += cantidad;
        } else {
            console.log("Los productos digitales no tienen stock.");
        }
    };

    // Método privado
    function logEstado() {
        console.log(`
            El producto ${this.nombre} tiene stock: ${this.stock !== null ? this.stock : "No aplica"}
        `);
    }

    Producto.prototype.info = function () {
        console.log(`
            ID: ${this.id}
            Nombre: ${this.nombre}
            Precio: ${this.precio} €
            Stock: ${this.stock !== null ? this.stock : "No aplica"}
        `);
    };
}

export function ProductoFisico(nombre, precio, stock, dimensiones) {
    Producto.call(this, nombre, precio, stock);
    this.dimensiones = dimensiones;

    ProductoFisico.prototype.info = function () {
        console.log(`
            ID: ${this.id}
            Nombre: ${this.nombre}
            Precio: ${this.precio} €
            Stock: ${this.stock}
            Dimensiones: Alto ${this.dimensiones.alto}, Ancho ${this.dimensiones.ancho}, Profundo ${this.dimensiones.profundo}
        `);
    };
}

export function ProductoDigital(nombre, precio) {
    Producto.call(this, nombre, precio, null);

    ProductoDigital.prototype.info = function () {
        console.log(`
            ID: ${this.id}
            Nombre: ${this.nombre}
            Precio: ${this.precio} €
            Stock: No aplica
        `);
    };
}
