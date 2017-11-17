var id_ultimo = "";

function pon_gato(id_boton, id_imagen){
    esconder(id_ultimo);
    
    let cont = parseInt(document.getElementById(id_imagen).getAttribute("numero"));
    cont += 1;
    id_ultimo = id_imagen;
    document.getElementById(id_imagen).setAttribute("numero", cont);
    
    document.getElementById(id_imagen).style.display = "block"
    document.getElementById("tex_cont").innerHTML = `${id_boton} se ha pulsado ${cont}`
    
}

function esconder(id){
    if (id != ""){
        document.getElementById(id).style.display = "none";
    }
    else{
        return null;
    }
}



/*
function gato(id){
    let cont_gato = parseInt(document.getElementById(id).getAttribute("value"));
    cont_gato += 1;
    document.getElementById(id).setAttribute("value", cont_gato);
    document.getElementById(id).innerHTML = `Este gato se ha pulsado ${cont_gato} veces.`;
}

*/