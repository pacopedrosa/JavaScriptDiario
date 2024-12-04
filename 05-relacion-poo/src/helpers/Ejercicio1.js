export function Tarea(nombre) {
    //estaticas
    Tarea.contador = 0;
    //propiedades privadas
    //Propiedades publicas
    this.id = Tarea.contador++;
    this.nombre = nombre;
    this.completada = false;


    //metodos publicos
    this.toggleCompletada = function() {
        this.comp
       this.completada = !this.completada;
    }


    function logEstado(){
        console.log(`
            La tarea ${this.nombre} esta: ${this.completada ? 'completada' : 'No completada'}
            `);
    }


    //crear una propiedad estatica del objeto

    Tarea.prototype.info = function(){
        console.log(`
            ID: ${this.id}
            Nombre: ${this.nombre}
            Completada: ${this.completada? 'Si' : 'No'}
            `);
    }
}

//Ejercicio1 con clases


export class TareaClass {
    //Variables de clase
    static contador = 1;

    //Privada
    #completada;


    constructor(nombre) {
        this.nombre = nombre;
        this.#completada = false;
    }

    //metodos publicos
    toggleCompletada() {
        this.#completada =!this.#completada;
    }


    info(){
        console.log(`
            La tarea ${this.nombre} esta: ${this.completada ? 'completada' : 'No completada'}
            `);
    }
}