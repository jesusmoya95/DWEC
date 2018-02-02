localStorage.facebook = "<a href=https://facebook.com>${facebook}</a>";


function crearEnlace(url, texto, nodo){
    let enlaces = document.getElementById(nodo);
    let nuevo_enlace = `<a href=${url}>${texto}</a>`;
    if (!localStorage.getItem(texto)){
        enlaces.innerHTML += nuevo_enlace;
        localStorage.texto = nuevo_enlace;
    }
    
    
}

function comprueba(){
    for (var i=0; localStorage.length; i++){
        let clave = localStorage.key(i);
        let valor = localStorage.key;
        let enlaces = document.getElementById("enlaces");
        let nuevo_enlace = `<a href=${valor}>${clave}</a>`;
        enlaces.innerHTML += nuevo_enlace;
        
    }
}
comprueba();
crearEnlace("http://www.google.es", "google", "enlaces");


