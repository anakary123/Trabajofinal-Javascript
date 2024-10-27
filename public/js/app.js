// Función para crear y agregar tarjetas dinámicamente
function cargarDestinos() {
    // Hacemos una petición al archivo JSON para obtener los datos
    fetch('public/destinos.json')
        .then(response => response.json())  // Convertimos la respuesta a JSON
        .then(destinosJSON => {
            // Selecciona el contenedor donde se van a agregar las tarjetas
            const destinosContainer = document.getElementById('destinos-container');
            
            destinosJSON.forEach(destino => {
                const card = document.createElement('div');
                card.classList.add('destino-card');

                card.innerHTML = `
                    <img src="${destino.imagen}" alt="${destino.nombre}">
                    <h2>${destino.nombre}</h2>
                    <p>${destino.descripcion}</p>
                    <a href="views/presupuesto.html">
                        <button>Reservar</button>
                    </a>
                `;

                destinosContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

// Llamada para cargar los destinos cuando la página se carga
window.onload = cargarDestinos;

