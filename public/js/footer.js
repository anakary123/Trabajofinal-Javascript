function renderizarfooter()
{
    let rutas = {
        index: 'index.html',
        galeria: 'views/galeria.html',
        presupuesto: 'views/presupuesto.html',
        contacto: 'views/contacto.html'
    }
     
     const footer = document.getElementById('footer')

     const location = window.location.pathname;

     const separarLocation = location.split('/');

     const checarSiEsViews = separarLocation.includes('views');

     if  (checarSiEsViews){
        rutas = {
              index: '../index.html',
              galeria: 'galeria.html',
              presupuesto: 'presupuesto.html',
              contacto: 'contacto.html'
        }
    
     }

    footer.innerHTML = 
     `<footer>
        <div class="social-icons">
        <a href="https://www.facebook.com" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook">
        </a>
        <a href="https://wa.me/1234567890" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width: 40px;">
      </a>
      
        <a href="https://www.instagram.com" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">
        </a>
        <a href="https://www.youtube.com/c/tu_usuario" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" style="width: 100px;">
      </a>
    </div>
    
    <div class="company-info">
        <p>Dirección de la Empresa: Calle Mayor, 3, Madrid, Spain</p>
        <p>Teléfono: 612345879| Email: inspirateyviaja@empresa.com</p>
    </div>
    
    <div class="legal-notice">
        <p><a href="#">Aviso Legal</a> | <a href="#">Política de Privacidad</a></p>
    </div>
    
    <p>&copy; 2024 Inspirate y viaja. Todos los derechos reservados.</p>
     </footer>
     `

}

renderizarfooter();