export function emailForm() {
    const app = document.getElementById('app');
    const form = document.createElement('form');
  
    const input = document.createElement('input');
    input.type = 'email';
    input.placeholder = 'Escribe tu correo';
    input.id = 'email';
    form.appendChild(input);
  
    const mensajeError = document.createElement('p');
    mensajeError.style.color = 'red';
    mensajeError.textContent = 'Por favor, introduce un correo correcto';
    mensajeError.style.display = 'none';
    form.appendChild(mensajeError);
  
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Validar';
    form.appendChild(submitButton);
  
    app.appendChild(form);
  }
  
  export function createTabs() {
    const app = document.getElementById('app');
    
    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('tabs-container');
  
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');
  
    const tabs = ['Deportes', 'Noticias', 'Cultura'];
    const contents = [
      'Contenido de Deportes',
      'Contenido de Noticias',
      'Contenido de Cultura'
    ];
  
    tabs.forEach((tab, index) => {
      const tabElement = document.createElement('button');
      tabElement.textContent = tab;
      tabElement.classList.add('tab');
      tabElement.dataset.index = index;
  
      tabsContainer.appendChild(tabElement);
  
      const contentElement = document.createElement('div');
      contentElement.textContent = contents[index];
      contentElement.classList.add('tab-content');
      contentElement.style.display = 'none'; // Ocultar contenido por defecto
  
      contentContainer.appendChild(contentElement);
    });
  
    app.appendChild(tabsContainer);
    app.appendChild(contentContainer);
  
    const tabButtons = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const index = button.dataset.index;
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        tabContents.forEach(content => {
          content.style.display = 'none';
        });
  
        tabContents[index].style.display = 'block';
      });
    });
  
    // Mostrar el contenido de la primera pestaña por defecto
    tabButtons[0].classList.add('active');
    tabContents[0].style.display = 'block';
  }
  