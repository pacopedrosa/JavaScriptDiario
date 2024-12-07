class Pelicula {
    constructor(titulo, año, director = "Desconocido") {
        this.titulo = titulo;
        this.año = año;
        this.director = director;
    }

    // Método para mostrar detalles de la película
    info() {
        console.log(`Título: ${this.titulo}  - Año: ${this.año} - Director: ${this.director}`);
    }

    // Método estático para buscar películas por título usando la API OMDb (apikey demo)
    static async buscarPeliculas(titulo) {
        const url = "";

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Error al conectar con la API.");
            const data = await response.json();

            if (data.Response === "False") {
                console.warn(`No se encontraron películas con el título: ${titulo}`);
                return [];
            }

            // Transformar datos de la API en objetos Pelicula
            const peliculas = data.Search.map((item) => new Pelicula(item.titulo, item.año));
            
            // Guardar películas en LocalStorage
            localStorage.setItem("peliculas", JSON.stringify(peliculas));

            console.log("Películas obtenidas y guardadas en LocalStorage.");
            return peliculas;
        } catch (error) {
            console.error("Error al buscar películas:", error.message);
            console.log("Intentando cargar películas desde LocalStorage...");
            return Pelicula.cargarDesdeLocalStorage();
        }
    }

    // Método estático para cargar películas desde LocalStorage
    static cargarDesdeLocalStorage() {
        const peliculasGuardadas = localStorage.getItem("peliculas");
        if (peliculasGuardadas) {
            const peliculas = JSON.parse(peliculasGuardadas).map(
                (pelicula) => new Pelicula(pelicula.titulo, pelicula.año, pelicula.director)
            );
            console.log("Películas cargadas desde LocalStorage.");
            return peliculas;
        } else {
            console.warn("No hay películas disponibles en LocalStorage.");
            return [];
        }
    }
}

class ReservaPelicula {
    constructor(cliente, diasReservados, pelicula) {
        this.cliente = cliente;
        this.diasReservados = diasReservados;
        this.pelicula = pelicula;
    }

    // Método para mostrar los detalles de la reserva
    info() {
        console.log(`Cliente: ${this.cliente} - Película: ${this.pelicula.titulo} - Días Reservados: ${this.diasReservados}`);
    }
}

