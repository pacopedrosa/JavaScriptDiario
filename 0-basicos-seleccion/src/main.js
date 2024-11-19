// # Ejercicios básicos de selección del DOM

// ### Ejercicio 1:
// Selecciona el elemento `h1` por su ID.

const tituloPrincipalH1 = document.getElementById('contenedorPrincipal').querySelector('h1');
console.log(tituloPrincipalH1);
tituloPrincipalH1.style.color = 'red';
tituloPrincipalH1.textContent = 'Hola mundo!';

// ### Ejercicio 2:
// Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorPrincipal`.

const parrafos = document.getElementById('contenedorPrincipal').querySelectorAll('#contenedorPrincipal .parrafo');
console.log('---------------------');
console.log(parrafos);


// ### Ejercicio 3:
// Selecciona el elemento `img` por su atributo `src`.

console.log("------------------------");
const imagen = document.querySelector("img[src='imagen.png']");
console.log(imagen);

// ### Ejercicio 4:
// Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.

console.log('---------------------');
const span = document.querySelectorAll('#contenedorSecundario span');
console.log(span);

// ### Ejercicio 5:

// Selecciona e primer párrafo con la clase "importante".

console.log('-------------------------');
const primerParrafo = document.querySelector('.parrafo.importante');
console.log(primerParrafo);

// ### Ejercicio 6:
// Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".

console.log('-------------------------');
const parrafoConContenedorPrincipal = document.querySelectorAll('#contenedorPrincipal p');
console.log(parrafoConContenedorPrincipal);
// ### Ejercicio 7:
// Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".


//Esto devuelve un nodeList
console.log('-------------------------');
const elementosConAtributo = document.querySelectorAll('[data-atributo="valor1"]');
console.log(elementosConAtributo);

// ### Ejercicio 8:
// Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".

console.log('-------------------------');
const parrafoImportantes = document.querySelectorAll('.parrafo.importante');
const segundoParrafo = parrafoImportantes.length > 1 ? parrafoImportantes[1] : null;
console.log(segundoParrafo);
// ### Ejercicio 9:
// Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".

console.log('-------------------------');
const spanContenedor = document.querySelectorAll('.contenedor span');
console.log(spanContenedor);

// ### Ejercicio 10:

// Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".

console.log('-------------------------');
const parrafosConClaseParrafo = document.querySelectorAll('#contenedorPrincipal .parrafo');
const tercerParrafo = parrafosConClaseParrafo.length > 2 ? parrafosConClaseParrafo[2] : null;
console.log(tercerParrafo);