class Usuario {
    constructor(id, nombre, email, rol) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
    }

    // Método para mostrar la información del usuario
    info() {
        console.log(`ID: ${this.id} - Nombre: ${this.nombre} - Email: ${this.email} - Rol: ${this.rol}`);
    }

    // Método estático para obtener usuarios desde la API
    static async fetchUsuarios() {
        const url = "https://jsonplaceholder.typicode.com/users";

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Error al conectar con la API.");
            const data = await response.json();

            // Transformar datos de la API en objetos Usuario
            const usuarios = data.map((usuario) => new Usuario(usuario.id, usuario.name, usuario.email, "usuario"));
            
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            console.log("Usuarios obtenidos de la API y almacenados en LocalStorage.");
            return usuarios;
        } catch (error) {
            console.error("Error al obtener usuarios de la API:", error.message);
            console.log("Intentando cargar usuarios desde LocalStorage...");
            return Usuario.cargarDesdeLocalStorage();
        }
    }

    // Método estático para cargar usuarios desde LocalStorage
    static cargarDesdeLocalStorage() {
        const usuariosGuardados = localStorage.getItem("usuarios");
        if (usuariosGuardados) {
            const usuarios = JSON.parse(usuariosGuardados).map(
                (usuario) => new Usuario(usuario.id, usuario.nombre, usuario.email, usuario.rol)
            );
            console.log("Usuarios cargados desde LocalStorage.");
            return usuarios;
        } else {
            console.log("No hay usuarios disponibles en LocalStorage.");
            return [];
        }
    }
}