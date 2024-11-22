//Dado un array de objetos con datos de usuarios, nombre, edad y email genera una tabla dinamicamente en la que cada fila corresponde a un usuario. añade funcionalidad 
//para ordenar filas por nombre y edad haciendo click en los encabezados de las columnas

//2p. Usando la lista de usuario añadir un input para que a medida que busquemos filtre los usuarios por su nombre en tiempo real 

const users = [
    {nombre: 'John Doe', edad: 30, email: 'john@example.com'},
    {nombre: 'Jane Smith', edad: 25, email: 'jane@example.com'},
    {nombre: 'Mike Johnson', edad: 35, email: 'mike@example.com'},
    {nombre: 'Sarah Wilson', edad: 28, email: 'sarah@example.com'},
    {nombre: 'David Brown', edad: 32, email: 'david@example.com'},
    {nombre: 'Emily Davis', edad: 27, email: 'emily@example.com'},
];

const dynamicTable = (data, headers) => {
    const table = document.createElement('table');
    table.id = 'table-data-users';
    table.style.border = '1px solid black';
    //creamos el thead
    const thead = document.createElement('thead');
    //creamos el tr
    const headerRow = document.createElement('tr');
    //recorremos los headers y los añadimos al tr
    headers.forEach(header => {
        //Creamos tantos th como vamos necesitando
        const th = document.createElement('th');
        th.textContent = header;

        //Aqui iria la logica de los tr y th

        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    //creamos el tbody
    const tbody = document.createElement('tbody');
    //Limpiamos la tabla
    table.innerHTML = '';
    //Recorremos los datos
    data.forEach(user => {
        //Creamos cada tr 
        const trUser = document.createElement('tr')
        //Recorremos los valores del usuario y los añadimos al tr
        trUser.innerHTML =`
            <td>${user.nombre}</td>
            <td>${user.edad}</td>
            <td>${user.email}</td>
        `;
        //si quiero usar un bucle(otra forma)
        //inyectamos las tr al tbody
        tbody.appendChild(trUser);
    })
    //Añadimos el thead y tbody al table
    table.appendChild(thead);
    table.appendChild(tbody);
    //Retornamos la tabla
    return table;

}

export default dynamicTable;
