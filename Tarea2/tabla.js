
const tablaDatos = document.getElementById("tablaInfo");

// Función para insertar la tabla
const insertarTabla = (users) => {
    const cards = users.map(user => `
                    <tr>
                        <th scope="row">${user.id}</th>
                        <td>${user.first_name}</td>
                        <td>${user.last_name}</td>
                        <td>@${user.email}</td>
                        <td><img src="${user.avatar}" class="img-fluid rounded-circle"  alt= ${user.name}></td>
                    </tr>
        ` );


    return cards.join("");
};

// Función para obtener los datos de la API
const getPersonas = (url) => {
    fetch(url) // petición / promesa // Hacer una solicitud GET
        
        .then((response) => {
            if (!response.ok) {
              throw new Error('La respuesta de la red no fue válida');
            }
            return response.json(); // La api nos da los datos en "crudo"
            // Convertir a formato JSON
          })
          .then((data) => {
            tablaDatos.innerHTML = insertarTabla(data.data); // Actualizar la tabla en el HTML
            
            loader.classList.add('d-none');
            content.classList.remove('d-none');
          })
          .catch((error) => console.error('Error:', error));
};

/// Le damos url de la api
tablaDatos.innerHTML = getPersonas("https://reqres.in/api/users?delay=3");









///////////

const spinner = document.getElementById('.visually-hidden');
setTimeout(()=>{
    spinner.style.opacity = '0';
},3000);


/* 
const loadButton = document.getElementById('loadButton');

loadButton.addEventListener('click', async () => {
  
  preloader.style.display = 'block'; // Muestra el preloader

  // Simula una carga de datos (puedes reemplazar esto con tu lógica real)
  await fetchData();

  // Oculta el preloader después de la carga
  preloader.style.display = 'none';

  // Abre otra página o realiza alguna acción
  window.open('welcome.html', '_self');
});
 */