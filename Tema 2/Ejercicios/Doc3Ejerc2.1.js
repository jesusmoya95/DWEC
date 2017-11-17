function infocadena(cad){
    if (cad == cad.toUpperCase()){
        document.write('Cadena solo formada por mayusculas');
    }
    else if (cad == cad.toLowerCase()){
        document.write('Cadena solo formada por minuscula');
    }	
    else{
        document.write('La cadena tiene mayúsculas y minúsculas');
    }
}


a = prompt("Escribe una frase");
infocadena(a);