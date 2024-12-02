import { initFormularioDinamico } from './components/eliminar.js';


// //Ejercicio 7

// // Lista de tareas
// const tareas = ['Tarea 1', 'Tarea 2', 'Tarea 3'];

// const ul = document.createElement('ul');
// ul.id = 'tareas';
// document.getElementById('app').appendChild(ul);

// // Función para crear y agregar las tareas
// function crearListaDeTareas() {
//   tareas.forEach((tarea, index) => {
//     const li = document.createElement('li');
//     li.textContent = tarea;

//     const btnEliminar = document.createElement('button');
//     btnEliminar.textContent = 'Eliminar';
//     btnEliminar.addEventListener('click', () => {
//       mostrarModal(index);  
//     });

//     li.appendChild(btnEliminar);
//     ul.appendChild(li);
//   });
// }

// const modal = document.createElement('div');
// modal.style.display = 'none';  // Inicialmente oculto


// const modalContent = document.createElement('div');
// modalContent.style.backgroundColor = 'white';
// modalContent.style.padding = '20px';
// modalContent.style.borderRadius = '5px';

// const mensaje = document.createElement('p');
// mensaje.textContent = '¿Seguro que deseas eliminar esta tarea?';

// const btnConfirmar = document.createElement('button');
// btnConfirmar.textContent = 'Confirmar';
// btnConfirmar.addEventListener('click', () => {
//   eliminarTarea(tareaAEliminar); 
//   modal.style.display = 'none';  
// });

// const btnCancelar = document.createElement('button');
// btnCancelar.textContent = 'Cancelar';
// btnCancelar.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// // Agregar los botones y el mensaje al modal
// modalContent.appendChild(mensaje);
// modalContent.appendChild(btnConfirmar);
// modalContent.appendChild(btnCancelar);
// modal.appendChild(modalContent);

// document.body.appendChild(modal);

// let tareaAEliminar;

// // Función para mostrar el modal de confirmación
// function mostrarModal(index) {
//   tareaAEliminar = tareas[index];
//   modal.style.display = 'flex';  
// }

// function eliminarTarea(tarea) {
//   const index = tareas.indexOf(tarea);
//   if (index !== -1) {
//     tareas.splice(index, 1); 
//     ul.innerHTML = ''; 
//     crearListaDeTareas(); 
//   }
// }

// // Inicializar la lista de tareas
// crearListaDeTareas();

//Ejercicio 13


document.addEventListener('DOMContentLoaded', () => {
  initFormularioDinamico('app'); // Se utiliza el ID del div en el HTML
});