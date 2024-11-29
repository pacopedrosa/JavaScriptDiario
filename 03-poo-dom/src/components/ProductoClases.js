export class ProductoClases {
    constructor(nombre, precio, stock, url) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.url = url;
    }

    // Métodos
    getInfo() {
        return `- Producto: ${this.nombre} - Precio: ${this.precio} - Stock: ${this.stock} - Imagen: ${this.url}`;
    }

    actualizarStock(stockActualizado) {
        if (stockActualizado > 0 && stockActualizado <= this.stock) {
            this.stock = stockActualizado;
            return `Stock actualizado correctamente a ${this.stock}`;
        }
        return "No se puede actualizar el stock. Stock insuficiente";
    }
}
