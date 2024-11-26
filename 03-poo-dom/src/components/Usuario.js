export function Usuario (nombre, email, password){
    this.nombre = nombre;
    this.email = email;
    let _password = password;

    //Metodos
    this.login = function(emailIntroducido, passwordIntroducido){
        //comprobar el email

        if(this.email === emailIntroducido && _password === passwordIntroducido){
            return `Bienvenido ${this.nombre}`;
        }
        return "Error en las credenciales"
    }

    this.updateEmail = function(newEmail){
        if(this.email){
            this.email=newEmail;
            return "Email cambiado correctamente"
        }
            return "Error, no hay un email registrado"
    }

    //Obtener toda la informacion del usuario


    this.getInfo = function(){
        return `- Usuario: ${this.nombre} - email: ${this.email}`;
    }
}