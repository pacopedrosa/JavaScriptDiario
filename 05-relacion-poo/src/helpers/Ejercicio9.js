class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    // Método estático para cargar productos desde la API Fake Store
    static async cargarDesdeAPI() {
        const url = "https://fakestoreapi.com/products";

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Error al conectar con la API.");

            const data = await response.json();

            const productos = data.map(
                (item) => new Producto(item.id, item.title, item.price, item.category)
            );

            // Guardar productos en LocalStorage
            localStorage.setItem("productos", JSON.stringify(productos));

            console.log("Productos obtenidos y guardados en LocalStorage.");
            return productos;
        } catch (error) {
            console.error("Error al cargar productos desde la API:", error.message);
            console.log("Intentando cargar productos desde LocalStorage...");
            return Producto.cargarDesdeLocalStorage();
        }
    }

    // Método estático para cargar productos desde LocalStorage
    static cargarDesdeLocalStorage() {
        const productosGuardados = localStorage.getItem("productos");
        if (productosGuardados) {
            const productos = JSON.parse(productosGuardados).map(
                (item) => new Producto(item.id, item.nombre, item.precio, item.categoria)
            );
            console.log("Productos cargados desde LocalStorage.");
            return productos;
        } else {
            console.warn("No hay productos disponibles en LocalStorage.");
            return [];
        }
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    // Método para agregar un producto al carrito
    agregarProducto(producto) {
        this.productos.push(producto);
        console.log(`Producto "${producto.nombre}" agregado al carrito.`);
    }

    // Método para eliminar un producto por ID
    eliminarProducto(id) {
        const index = this.productos.findIndex((producto) => producto.id === id);
        if (index !== -1) {
            const eliminado = this.productos.splice(index, 1);
            console.log(`Producto "${eliminado[0].nombre}" eliminado del carrito.`);
        } else {
            console.warn(`Producto con ID ${id} no encontrado en el carrito.`);
        }
    }

    // Método para calcular el total del carrito
    calcularTotal() {
        const total = this.productos.reduce((acum, producto) => acum + producto.precio, 0);
        console.log(`Total del carrito: ${total.toFixed(2)} €`);
        return total;
    }

    // Método para mostrar los productos en el carrito
    mostrarProductos() {
        if (this.productos.length === 0) {
            console.log("El carrito está vacío.");
        } else {
            console.log("Productos en el carrito:");
            this.productos.forEach((producto) => {
                console.log(`- ${producto.nombre}: ${producto.precio.toFixed(2)} €`);
            });
        }
    }
}

