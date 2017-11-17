window.onload = function() {
    var info = document.getElementById("informacion");
    enlaces();
    
}

function enlaces(){

    // Numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName("a");
    var info = document.getElementById("informacion");
    
    info.innerHTML = "Numero de enlaces = " + enlaces.length;

    // Direccion del penultimo enlace
    var mensaje = "La dirección del penultimo enlace es: "+enlaces[enlaces.length-2].href;
    info.innerHTML = info.innerHTML + "<br/>" + mensaje;

 
  // Numero de enlaces que llevan a http://google.es
  var contador = 0;
  for(var i = 0; i < enlaces.length; i++) {
    // Es necesario comprobar los enlaces http://google.es 
    if(enlaces[i].href == "http://google.es/") {
      contador++;
    }
  }
  info.innerHTML = info.innerHTML + "<br/> Los enlaces llevan a http://google.es son: " + contador;
 
  // Numero de enlaces del tercer párrafo
  var parrafos = document.getElementsByTagName("p");
  enlaces = parrafos[2].getElementsByTagName("a");
  info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = " + enlaces.length;
}