export class UsuarioClases{
    #password; //Propiedad privada
    constructor(nombre, email, password){
        this.nombre = nombre;
        this.email = email;
        this.#password = password;
    }

    login(emailIntroducido, passwordIntroducido){
        //comprobar el email

        if(this.email === emailIntroducido && this.#password === passwordIntroducido){
            return `Bienvenido ${this.nombre}`;
        }
        return "Error en las credenciales"
    }

    updateEmail(newEmail){
        if(this.email){
            this.email=newEmail;
            return "Email cambiado correctamente"
        }
            return "Error, no hay un email registrado"
    }

    //Obtener toda la informacion del usuario


    getInfo(){
        return `- Usuario: ${this.nombre} - email: ${this.email}`;
    }
}