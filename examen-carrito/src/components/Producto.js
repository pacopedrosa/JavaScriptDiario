export class Producto {
    constructor(nombre, cantidad, precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    calcularTotal(){
        return this.cantidad * this.precio;
    }
    obtenerInfo(){
        return `nombre: ${this.nombre} --- cantidad: ${this.cantidad} --- precio: ${this.precio} --- total: ${this.calcularTotal()}`;
    }
}