class Publicacion {
    constructor(id, titulo, contenido, autor) {
        this.id = id;
        this.titulo = titulo;
        this.contenido = contenido;
        this.autor = autor;
    }

    // Método estático para obtener publicaciones desde la API JSONPlaceholder
    static async fetchPublicaciones() {
        const url = "https://jsonplaceholder.typicode.com/posts";

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Error al conectar con la API.");

            const data = await response.json();

            // Guardar en LocalStorage
            localStorage.setItem("publicaciones", JSON.stringify(data));

            console.log("Publicaciones obtenidas y guardadas en LocalStorage.");
            return data.map(
                (item) =>
                    new Publicacion(item.id, item.title, item.body, item.userId)
            );
        } catch (error) {
            console.error("Error al cargar publicaciones desde la API:", error.message);
            console.log("Intentando cargar publicaciones desde LocalStorage...");
            return Publicacion.cargarDesdeLocalStorage();
        }
    }

    // Método estático para cargar publicaciones desde LocalStorage
    static cargarDesdeLocalStorage() {
        const publicacionesGuardadas = localStorage.getItem("publicaciones");
        if (publicacionesGuardadas) {
            const publicaciones = JSON.parse(publicacionesGuardadas).map(
                (item) =>
                    new Publicacion(item.id, item.title, item.body, item.userId)
            );
            console.log("Publicaciones cargadas desde LocalStorage.");
            return publicaciones;
        } else {
            console.warn("No hay publicaciones disponibles en LocalStorage.");
            return [];
        }
    }

    // Método para mostrar información de la publicación
    info() {
        console.log(`
            ID: ${this.id}
            Título: ${this.titulo}
            Autor: ${this.autor}
            Contenido: ${this.contenido}
        `);
    }
}

class Blog {
    constructor() {
        this.publicaciones = [];
    }

    // Método para cargar publicaciones al blog
    async cargarPublicaciones() {
        this.publicaciones = await Publicacion.fetchPublicaciones();
        console.log("Publicaciones cargadas en el blog.");
    }

    // Método para filtrar publicaciones por autor
    filtrarPorAutor(autorId) {
        const publicacionesAutor = this.publicaciones.filter(
            (pub) => pub.autor === autorId
        );
        if (publicacionesAutor.length > 0) {
            console.log(`Publicaciones del autor ${autorId}:`);
            publicacionesAutor.forEach((pub) => pub.info());
        } else {
            console.warn(`No se encontraron publicaciones del autor ${autorId}.`);
        }
    }

    // Método para buscar publicaciones por palabra clave en el título o contenido
    buscarPorPalabraClave(palabraClave) {
        const resultados = this.publicaciones.filter(
            (pub) =>
                pub.titulo.includes(palabraClave) ||
                pub.contenido.includes(palabraClave)
        );
        if (resultados.length > 0) {
            console.log(`Publicaciones que contienen "${palabraClave}":`);
            resultados.forEach((pub) => pub.info());
        } else {
            console.warn(`No se encontraron publicaciones con "${palabraClave}".`);
        }
    }
}