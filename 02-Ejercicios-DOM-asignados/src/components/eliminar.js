// Configuración de campos
const camposConfiguracion = [
    { tipo: 'text', placeholder: 'Nombre', requerido: true },
    { tipo: 'email', placeholder: 'Correo Electrónico', requerido: true },
    { tipo: 'number', placeholder: 'Edad', requerido: false },
    { tipo: 'password', placeholder: 'Contraseña', requerido: true },
  ];
  
  // Componente que genera y valida el formulario
  const definirFormularioDinamico = (configuracion) => {
    const crearFormulario = () => {
      const formulario = document.createElement('form');
      formulario.id = 'formulario-dinamico';
  
      configuracion.forEach((campo, index) => {
        const contenedorCampo = document.createElement('div');
        contenedorCampo.classList.add('campo');
  
        const input = document.createElement('input');
        input.type = campo.tipo;
        input.placeholder = campo.placeholder;
        input.required = campo.requerido;
        input.id = `campo-${index}`;
        input.name = `campo-${index}`;
  
        const mensajeError = document.createElement('span');
        mensajeError.classList.add('error');
        mensajeError.id = `error-${index}`;
  
        contenedorCampo.appendChild(input);
        contenedorCampo.appendChild(mensajeError);
        formulario.appendChild(contenedorCampo);
      });
  
      const botonSubmit = document.createElement('button');
      botonSubmit.type = 'submit';
      botonSubmit.textContent = 'Enviar';
      formulario.appendChild(botonSubmit);
  
      formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        validarFormulario(configuracion);
      });
  
      return formulario;
    };
  
    const validarFormulario = (configuracion) => {
      let esValido = true;
  
      configuracion.forEach((campo, index) => {
        const input = document.getElementById(`campo-${index}`);
        const mensajeError = document.getElementById(`error-${index}`);
        mensajeError.textContent = '';
  
        if (campo.requerido && !input.value.trim()) {
          mensajeError.textContent = `El campo '${campo.placeholder}' es obligatorio.`;
          esValido = false;
        } else if (campo.tipo === 'email' && input.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Buscado por internet
          if (!emailRegex.test(input.value)) {
            mensajeError.textContent = 'El correo electrónico no es válido.';
            esValido = false;
          }
        } else if (campo.tipo === 'number' && input.value) {
          if (isNaN(input.value)) {
            mensajeError.textContent = 'El valor debe ser un número.';
            esValido = false;
          }
        }
      });
  
      if (esValido) {
        alert('Formulario enviado con éxito.');
      }
    };
  
    return crearFormulario();
  };
  
  // Inicializar el formulario dinámico desde main.js
  export const initFormularioDinamico = (elementoPadreId) => {
    const elementoPadre = document.getElementById(elementoPadreId);
    if (elementoPadre) {
      const formulario = definirFormularioDinamico(camposConfiguracion);
      elementoPadre.appendChild(formulario);
    } else {
      console.error('Elemento padre no encontrado');
    }
  };
  