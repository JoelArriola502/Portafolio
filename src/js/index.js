let Mostrar=document.getElementById("Contenido-informacion");
function Inicio(){
    let html="";

    html=html+`
        
    <div class="Inicio-datos">
    <div class="Perfil">
     <div class="Foto-circular">
        <img class="Foto" src="../foto/Foto1.jpg" alt="">
     </div>
        <h2>Joél Arriola </h2>
        <p>Ingeniero en Sistemas, Administrador de Base datos, Desarrollador web.</p>
       <div class="Redes">
        <a href="https://www.instagram.com/joel_arriola_502?igsh=MTg4NzJnbTZueGF3Nw%3D%3D&utm_source=qr"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/joel.arriola.31?mibextid=LQQJ4d"> <i class="fa-brands fa-facebook"></i>
       </div>
    </div>
</div>
    `
    Mostrar.innerHTML=html;
}


///
function Informacion(){
    let html="";
    html=html+`
    <div>
    <div class="Informacion">
     <div class="acerca">
       <h1>Descripción personal</h1>
    </div>
       <p>Hola, soy Joél Eduardo Arriola Santos, un estudiante del noveno ciclo de la carrera de Ingeniería
         en Sistemas de la Universidad Mariano Gálvez de Guatemala. Me apasiona la administración de bases de datos 
         y el desarrollo web, áreas en las que he adquirido experiencia práctica. Mi habilidad para trabajar con lenguajes
          de programación como JavaScript, Java y C++ me permite abordar proyectos con eficiencia y precisión. 
        Estoy emocionado de aplicar mis conocimientos y habilidades para contribuir al éxito de futuros proyectos.</p>
    </div>
    <div class="Datos-personales">
        <div class="Datos">
          <div class="Datos_Titulo">
            <h3>Datos Personales</h3>
          </div>
            <ul>
            <li><span class="etiqueta">Edad:</span> <span class="valor">22</span></li>
            <li><span class="etiqueta">Teléfono:</span> <span class="valor">+502 4082-3888</span></li>
            <li><span class="etiqueta">Correo:</span> <span class="valor">joelarriola76@gmail.com</span></li>
            <li><span class="etiqueta">Profesión:</span> <span class="valor">Administrador de Empresas</span></li>
            <li><span class="etiqueta">Dirección:</span> <span class="valor">Aldea Versalles, Nuevo San Carlos, Retalhuleu</span></li>
            <li><span class="etiqueta">Fecha de Nacimiento:</span> <span class="valor">9 de julio de 2001</span></li>
        </ul>
        
        </div>
        <div class="Intereses">
          <div class="Interes_Titulo">
            <h3>Atracciones</h3>
          </div>
          <div class="Interes_Iconos">
            <h4><i class="fa-solid fa-gamepad"></i> JUEGOS</h4>
            <h4><i class="fa-solid fa-music"></i>MUSICA</h4>
            <h4><i class="fa-solid fa-pencil"></i>DIBUJAR</h4>
            <h4><i class="fa-solid fa-motorcycle"></i>MOTOCICLETAS</h4>
            </div>
            </div>
    </div>

</div>
    `
    Mostrar.innerHTML=html;
}

function Habilidades(){
    let html=""
    html=html+` 
    <div class="Habilidades">
    <div class="Habilidades-Titulo">
        <h1>Habilidades</h2>
    </div>
    <div class="Habilidades-Actuales">
       <div class="Habilidades-Tecnicas">
       <div class="Habilidades-Tecnicas_Titulo">
            <h1>Habilidades Técnicas</h5>
    </div>
            <div class="Habilidades-Tecnicas-Lenguajes">
            <h2><i class="fa-brands fa-java"></i>Java </h2>
            <h2><i class="fa-brands fa-square-js"></i>JavaScript </h2>
            <h2><img src="../img/c++.png" alt="">c++ </h2>
            <h2> <i class="fa-brands fa-html5"></i>html & css</h2> 
        </div>    
       </div>
       <div class="Herramientas">
       <div class="Herramientas_Titulo">
           <h1>Herramientas</h1>
       </div> 
       <div class="Herramientas_Iconos">     
           <h2><i class="fa-brands fa-git-alt"></i>Git</h2>
           <h2><i class="fa-brands fa-node"></i>Node js</h2>
           <h2><img src="../img/mysql.png" alt="">Mysql </h2>
       </div>   
      </div>
    </div>
   

</div>
    `
    Mostrar.innerHTML=html;
}
function Portafolio(){
  let html="";
  html=html+` 
  <div class="Principal-Card">
  <h1>Mi Portafoli</h1>
  <div class="Card-Contenido-Proyectos">
    <div class="Card-contenedor">
      <img class="Card-img" src="../img/Series.png">
      <div class="Card-Titulo">
      </div>
      <div class="Card-Proyecto">
          <h2>Descripción Del Proyecto</h2>
          <div class="Descripcion" id="Descripcion">
          <p>gestor de catálogo de series. El sistema utiliza un array para almacenar información sobre diferentes series de televisión.</p>
        </div>
          <div class="Card-Iconos">
            <a href="https://github.com/JoelArriola502/TAREASERIES" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://joelarriola.neocities.org/Series/Principal" target="_blank"><i class="fa-brands fa-chrome"></i></a>
          </div>
    
      </div>
    </div>

    <div class="Card-contenedor">
      <img class="Card-img" src="../img/API.png">
      <div class="Card-Titulo">
      </div>
      <div class="Card-Proyecto">
          <h2>Descripción Del Proyecto</h2>
          <div class="Descripcion" id="Descripcion2">
          <p> he creado un catálogo interactivo de héroes de Marvel. Utilizando la API de Marvel Comics.</p>
        </div>
          <div class="Card-Iconos">
            <a href="https://github.com/JoelArriola502/ConsumoAPI" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://joelarriola.neocities.org/ConsumoAPI/Principal" target="_blank"><i class="fa-brands fa-chrome"></i></a>
          </div>
         
      </div>
    </div>
     

    <div class="Card-contenedor">
    <img class="Card-img" src="../img/Redsocial.png">
    <div class="Card-Titulo">
    </div>
    <div class="Card-Proyecto">
        <h2>Descripción Del Proyecto</h2>
        <div class="Descripcion" id="Descripcion2">
        <p>Mi proyecto consiste en una red social que permite a los usuarios seguir y dejar de seguir a otros, agregar amigos,
           realizar publicaciones y etiquetarlas. Además, las publicaciones pueden ser comentadas por otros usuarios.</p>
      </div>
        <div class="Card-Iconos">
          <a href="https://github.com/JoelArriola502/RedSocial" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="#"><i class="fa-brands fa-chrome"></i></a>
        </div>
       
    </div>
  </div>



  <div class="Card-contenedor">
      <img class="Card-img" src="../img/Portafolio.png">
      <div class="Card-Titulo">
      </div>
      <div class="Card-Proyecto">
          <h2>Descripción Del Proyecto</h2>
          <div class="Descripcion" id="Descripcion2">
          <p>Proyectos Destacados: Reflejan mi experiencia y habilidades en desarrollo web y de software, con dominio de 
            lenguajes como Java, JavaScript (Node.js), y C++..</p>
        </div>
          <div class="Card-Iconos">
            <a href="https://github.com/JoelArriola502/Portafolio" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="#"><i class="fa-brands fa-chrome"></i></a>
          </div>
         
      </div>
    </div>

    </div>


  
  </div>
`
Mostrar.innerHTML=html;
}

function Contacto(){
  let html="";
  html=html+`
  <div class="Contacto-Principal">
  <h1>Contacto</h1>
  <div class="Contacto-datos-enviar">
     <div class="Datos-Contacto">
        <h5> <i class="fa-solid fa-route"></i><span>Direccion:</span> Aldea Versalles Nuevo San Carlos Retalhuleu</h5>
        <h5> <i class="fa-solid fa-phone"></i><span>Telefono:</span> +502 40823888</h5>
        <h5> <i class="fa-solid fa-envelope"></i><span>Gmail:</span> joelarriola76@gmail.com</h5>
     </div>
     <div class="Datos-enviar">
     <form id="form">
       <label for="Nombre" class="Nombre-enviar"><i class="fa-solid fa-user"></i>
       <input type="text" name="Nombre" id="Nombre" placeholder="Nombre"></label>
       <label for="Correo" class="Nombre-enviar"><i class="fa-solid fa-envelope"></i>
       <input type="text" name="Correo" id="Correo"  placeholder="Correo"></label>
     
       <label for="Mensaje" class="Mensaje-enviar"><i class="fa-solid fa-message"></i>
       <input class="Mensaje-input" type="text" name="Mensaje" id="Mensaje"  placeholder="Mensaje"></label>
   
     <input class="Boton-enviar" type="submit" id="button" value="Enviar Mensaje" >
   </form>
   

     </div>
  </div>

</div>
  
  `
  Mostrar.innerHTML=html;
  Api();
}

function Api(){
  const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
 event.preventDefault();

 btn.value = 'Sending...';

 const serviceID = 'default_service';
 const templateID = 'template_b3qok72';

 emailjs.sendForm(serviceID, templateID, this)
  .then(() => {
    btn.value = 'Send Email';
    alert('Sent!');
  }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
  });
});
}
document.addEventListener("DOMContentLoaded",ev=>Inicio());

