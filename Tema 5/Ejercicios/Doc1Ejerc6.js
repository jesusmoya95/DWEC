var cont = 1;
function anterior(){
    if (cont == 1){
        return null;
    }
    else{
        cont -= 1;
        document.getElementById("imagen").setAttribute("src", `imagenes/${cont}.jpg`)
    }
    
}


function siguiente(){
    if (cont == 6){
        return null;
    }
    else{
        cont += 1;
        document.getElementById("imagen").setAttribute("src", `imagenes/${cont}.jpg`)
    }
    
}