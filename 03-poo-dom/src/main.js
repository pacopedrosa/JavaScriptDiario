// Implementar un perfil de login y actualizacion del perfil usando POO
//Objetivo: Crear una CLASE u OBJETO para modelar el inicio de sesion/perfil

import { Usuario } from "./components/Usuario";
import { UsuarioClases } from "./components/UsuarioClases.js";
import { UsuarioFabrica } from "./components/UsuarioFabrica.js"
import { Producto } from "./components/Producto.js"




// // Crear una instancia de la clase Usuario

// const usuario = new UsuarioFabrica("Ana", "ana@gmail.com", "12345");

// const app = document.getElementById("app");
// app.innerHTML = `
//     <h2>Gestion de Usuarios</h2>
//     <p>${usuario.getInfo()}</p>
//     <button id="btn-login"> Iniciar Sesion </button>
//     <button id="btn-actualizar-email"> Actualizar Email </button>
//     <div id="form-container" ></div>
// ` ;

// // gestion de eventos

// document.getElementById("btn-login").addEventListener("click", mostrarFormularioLogin)

// document.querySelector("#btn-actualizar-email").addEventListener("click", mostrarFormularioActualizarEmail)


// function mostrarFormularioLogin(){
//     const formContainer = document.getElementById("form-container")
//     formContainer.innerHTML= `
//     <input type="email" id="email-login" placeholder="Email">
//     <input type="password" id="password-login" placeholder="Contraseña">
//     <button id="btn-enviar-login">Enviar</button>

//     `
//     document.getElementById("btn-enviar-login").addEventListener("click", ()=>{
//         const email = document.getElementById("email-login").value.trim();
//         const password = document.getElementById("password-login").value.trim();
//         const resultadoLogin = usuario.login(email, password);
//         alert(resultadoLogin);
//     })
// }

// function mostrarFormularioActualizarEmail (){
//     const formContainer = document.getElementById("form-container")
//     formContainer.innerHTML= `
//     <input type="email" id="nuevo-email" placeholder="Nuevo Email">
//     <button id="btn-update-email">Enviar</button>
//     `
//     document.getElementById("btn-update-email")
//             .addEventListener("click", ()=>{
//                 const email = document.getElementById("nuevo-email").value.trim();
//                 alert(usuario.updateEmail(email))
//             })
// }

//Ejercicio2

//Gestion de productos: Implementar una funcion constructora que modele un producto, quiero saber el nombre, precio, stock e imagen o url
//Los metodos son obtenerInfo y actualizar stock pasando como parametro un stock siempre que haya stock suficiente.
//Genera un array de productos, renderizalos en el DOM añade un boton a cada producto que permita actualizar el stock

//DEBE ESTAR PINTADO COMO UNA LISTA (li), aplicar 2 de 3 formas posibles usadas de POO


const productos = [
    new Producto("producto1", 10, 2, "url"),
    new Producto("producto2", 11, 4, "url"),
    new Producto("producto3", 16, 7, "url")
];

const app = document.getElementById("app");
for(let i = 0; i<=productos.length; i++){
app.innerHTML = `
    <h2>Lista de productos</h2>
    <li>${productos[i].getInfo()}</li>
    <button id="btn-actualizar">Actualizar stock</button>
    <div id="form-container" ></div>
`;

    document.getElementById("btn-actualizar").addEventListener("click", actualizarProducto)
}

function actualizarProducto(){
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML= `
    <input type="number" id="nuevo-stock" placeholder="Nuevo Stock">
    <button id="btn-update-stock">Enviar</button>
    `;
    document.getElementById("btn-update-stock").addEventListener("click", ()=>{
        const stock = document.getElementById("nuevo-stock").value.trim();
        alert(productos.actualizarProducto(stock))
    })
}

//Ejercicio3

//Sistema bancario: 
    // - Objetivos: Implementar una clase privada llamada cuenta bancaria que tenga una prop privada llamada saldo y que permita depositar y 
    // retirar una cantidad siempre que se pueda. Genera en el DOM dos contenedores, 
    // uno para ingresar o retirar (Con radioButton) y otro para mostrar informacion de mi cuenta.


