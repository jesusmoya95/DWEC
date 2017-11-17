window.onload = function(){
    inicio_cookies()
}


function inicio_cookies(){
    if (!document.cookie){
        mostrar("inicio");
    }
    else if(document.cookie){
        usuario = leercookies("nombre")
        mostrar("usuario");
        document.getElementById("usuario").innerHTML = "Bienvenido " + usuario;
    }
}

function iniciar_sesion(){
    nombre = document.getElementById("nombre").value;
    document.cookie = 'nombre=' + nombre + "; max-age=60;";
    ocultar("inicio");
    mostrar("usuario");
    document.getElementById("usuario").innerHTML = "Bienvenido " + nombre;
    mostrar("salir");
}

function ocultar(elemento){
    document.getElementById(elemento).style.display = "none";
}

function mostrar(elemento){
    document.getElementById(elemento).style.display = "block";
}

function cerrar_sesion(){
    usuario = leercookies(nombre)
    document.cookie = "nombre=" + usuario + "; max-age=0";
    ocultar("salir");
    ocultar("usuario");
    inicio_cookies();
}

function leercookies(name){

  var nameEQ = name + "="; 
  var cookies = document.cookie.split(';');

  for(var i = 0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) {
      return decodeURIComponent( c.substring(nameEQ.length,c.length) );
    }

  }

  return null;


}