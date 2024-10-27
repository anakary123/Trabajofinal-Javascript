
function obtenerReseñasDelJSON() {

    return fetch('public/reseñas.json')
            .then(response => response.json())
            .then(data => {
                return data;
            })
    
            .catch(error => {
                console.error('Error:', error);
            })
    } 
    


    function mostrarReseñas() {
        const reseñas = obtenerReseñasDelJSON()
    
        reseñas.then(data => {
            const reseñasContainer = document.getElementById('reseñascontainer')
    
            Object.values(data).forEach(cliente => {
                reseñasContainer.innerHTML +=
                    `<div class="col">
                         <div class ="card custom-card" style="width: 18rem;">
                          <img src=${cliente.imagen} class="card-img-top" alt="...">
                            <div class="custom-card-body">
                              <h5 class="card-title">${cliente.titulo}</h5>
                              <p class="card-text">${cliente.cuerpo}</p>
                              
                            </div>
                        </div>
                    </div>`
            });
    
        })
    
    }

    
    
    obtenerReseñasDelJSON()
    mostrarReseñas()

