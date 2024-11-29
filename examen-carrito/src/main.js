// necesito crear instancias de carrito
// cargar el carrito del localStorage

import Carrito from "./components/Carrito";
const carrito = new Carrito()


//Crear un h1 con CREATE ELEMENT
//crear un contenedor form, inputs para nombre, cantidad, precio con INNER HTML
//crear boton de añadir al carrito


//funciones

const renderListaCarrito = () =>{
    //capturamos el ul

    const lista = document.getElementById("lista-productos");
    const totalCarrito = document.getElementById("total-carrito");
    lista.innerHTML = carrito.productos.map((producto, index)=>{
        return `
            <li data-id="${index}">
                ${producto.obtenerInfo()}
                <button class="btn-editar" data-id="${index}">Editar</button>
                <button class="btn-borrar" data-id="${index}">Borrar</button>
            </li>
        `;
    }).join();

    //Poner total
    totalCarrito.textContent = carrito.calcularTotal();
    lista.querySelector(".btn-borrar").addEventListener("click",()=>alert("has pulsado"));
}

const agregarProductoHandler = (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre-producto').value.trim();
    const cantidad = Number(document.getElementById('cantidad-producto').value);
    const precio = Number(document.getElementById('precio-producto').value);

    if(nombre && cantidad > 0  && precio > 0){
        carrito.agregarProducto(nombre, cantidad, precio);

        //para renderizar y pintar recorro el array de carritos y cada elemento se pinta en li
        renderListaCarrito()
        console.log(carrito);
    }else{
        alert("Error al reproducir los valores");
    }
    event.target.reset();
}

function renderCarrito() {
const app = document.getElementById('app');
const h1 = document.createElement('h1');
h1.textContent = 'Mi Carrito';
app.appendChild(h1);
app.innerHTML += `
    <form id="form-producto">
    <input type="text" placeholder="Nombre del producto" id="nombre-producto">
    <input type="number" placeholder="Escribe la cantidad" id="cantidad-producto">
    <input type="number" placeholder="Precio del producto" id="precio-producto">
    <button id="btn-agregar">Agregar al carrito</button>
    </form>
    <div id="container-productos">
        <ul id="lista-productos"></ul>
    </div>
    <footer>
        <p>Total del carrito: <strong id="total-carrito">0</strong></p>
    </footer>
`;

// capturamos eventos
    app.addEventListener("submit", agregarProductoHandler)
}


renderCarrito();