export function UsuarioFabrica(nombre, email, password){

    let _password = password;
    return {
        nombre,
        email,
        login(emailIntroducido, passwordIntroducido){
            if(this.email === emailIntroducido && _password === passwordIntroducido){
                return `Bienvenido ${this.nombre}`;
            }
            return "Error en las credenciales"
        
        },
        updateEmail(newEmail){
            if(this.email){
                this.email=newEmail;
                return "Email cambiado correctamente"
            }
                return "Error, no hay un email registrado"
        },
        //Obbtener toda la informacion del usuario
        getInfo(){
            return `- Usuario: ${this.nombre} - email: ${this.email}`;
        }
    }
}