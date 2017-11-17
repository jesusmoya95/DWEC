window.onload = function(){
    inicio_cookies()
}


function inicio_cookies(){
    if (!document.cookie){
        mostrar("inicio");
    }
    else if(document.cookie){
        if (leercookies("color") && leercookies("nombre")){
            cargar_todo();
        }
        else if (!leercookies("color") && leercookies("nombre")){
            cargar_colores();
        }
        else if (!leercookies("nombre") && leercookies("color")){
            cargar_inicio();
        }
    }
}

function cargar_todo(){
    usuario = leercookies("nombre");
    mostrar("usuario");
    mostrar("salirlb");
    document.getElementById("usuario").innerHTML = "Bienvenido " + usuario;
    color = leercookies("color");
    document.body.style.backgroundColor= color;
}

function cargar_colores(){
    usuario = leercookies("nombre");
    document.getElementById("usuario").innerHTML = "Bienvenido " + usuario;
    mostrar("usuario");
    mostrar("fondo");
    mostrar("salirlb");
}

function cargar_inicio(){
    color = leercookies("color");
    document.body.style.backgroundColor = color;
    mostrar("inicio");
}

function iniciar_sesion(){
    nombre = document.getElementById("nombre").value;
    document.cookie = 'nombre=' + nombre + "; max-age=60;";
    ocultar("inicio");
    mostrar("usuario");
    document.getElementById("usuario").innerHTML = "Bienvenido " + nombre;
    mostrar("salirlb");
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
    ocultar("salirlb");
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




function cambiar_color(){
    ctrl = document.fondo.colores;
    for(i = 0; i < ctrl.length; i++)
        if(ctrl[i].checked){
           color = ctrl[i].value; document.body.style.backgroundColor = color;
            document.cookie = "color=" + color + "; max-age = 60";
        }
}
