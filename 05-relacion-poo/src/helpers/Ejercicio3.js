export function Empleado(nombre, edad, puesto){

    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;

    Empleado.prototype.calcularSalario = function(){
        const salarioBase = {
            junior: 1500,
            senior: 2500,
            master: 5000
        }

        return salarioBase[this.puesto] || 0;
    };

    Empleado.prototype.info = function(){
        console.log(`
                ${this.nombre} ${this.edad} ${this.puesto} - ${this.calcularSalario()}
            `);
    }

    
    
}

export function EmpleadoFreelance(nombre, edad, precioHora){
    Empleado.call(this, nombre, edad, "freelance");
    this.precioHora = precioHora;
    //tengo que heredar las propiedades de la clase constructora PADRE
    EmpleadoFreelance.prototype = Object.create(Empleado.prototype)
    //Y que el constructor sea el del padre
    EmpleadoFreelance.prototype.constructor = EmpleadoFreelance;
    //sobreescribimos el metodo calcular el salario

    EmpleadoFreelance.prototype.info = function(){
    
    }
}


