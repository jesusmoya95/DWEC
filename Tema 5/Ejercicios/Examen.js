window.onload = function(){
    Ejercicio3("Prueba");
    }

function Ejercicio3(arg=null){
    if (arg != null){
        document.title = arg;
    }
    
    //Numero de imagenes que hay
    let imagenes = document.getElementsByTagName("img");
    let info = document.getElementById("num_imagenes");
    info.innerHTML = `Numero de imagenes: ${imagenes.length}`
    
    //Fecha actual
    mostrarhora();
    
}

var cont = 3

function mostrarhora(){
    if (cont != 0){
        cont = cont - 1;
        let fecha = new Date();
        document.getElementById("fecha").innerHTML = fecha.getSeconds();
        console.log(cont);
        setTimeout("mostrarhora()",1000);
    }
}

