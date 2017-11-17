function invierteCadena(cad_arg){
    let i = cad_arg.length;
    let invertida = "";
    for (x = 0; x < cad_arg.length; x++) {
        invertida = invertida + cad_arg[i - 1];
        i = i - 1;
    }
    return invertida;
}

function palindromos(arg){
    let invertida = invierteCadena(arg)
    if (arg == invertida){
        document.write("Es un palíndromo");
    }
    else{
        document.write("No es un palíndromo");
    }
}


a = prompt("Escribe una frase para invertir");
palindromos(a);