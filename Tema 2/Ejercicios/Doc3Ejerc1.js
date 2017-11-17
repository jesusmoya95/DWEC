function invierteCadena(cad_arg){
    let i = cad_arg.length;
    let invertida = "";
    for (x = 0; x < cad_arg.length; x++) {
        invertida = invertida + cad_arg[i - 1];
        i = i - 1;
    }
    document.write("<h4> La frase original para invertir es: " + cad_arg);
    document.write("<br>La frase invertida es: " + invertida + "</h4>");
    return invertida;
}

a = prompt("Escribe una frase para invertir");
invierteCadena(a);







function inviertePalabras(cad_arg){
    let separado = cad_arg.split(" ");
    let invertida = "";
    
    let i = separado.length;
    for (x = 0; x < separado.length; x++) {
        invertida = invertida + separado[i - 1] + " ";
        i = i - 1;
    }
    
    document.write("<h4>La frase original para invertir palabras es: " + cad_arg);
    document.write("<br>La frase invertida por palabras es: " + invertida + "</h4>");
}

b = prompt("Escribe una frase para invertir las palabras");
inviertePalabras(b);




function encuentraPalabraMasLarga(cad_arg){
    let palabras = cad_arg.split(" ");
    let longpalabralarga = 0;
    let posicionpalabra = 0;
    let i = palabras.length;
    for (x = 0; x < palabras.length; x++){
        //console.log( palabras[x].length);
        if (longpalabralarga < palabras[x].length){
            longpalabralarga = palabras[x].length;
            posicionpalabra = x;
        
        }
        
        
    }
    document.write("<h4>La frase para buscar palabra larga es: " + cad_arg);
    document.write("<br>La palabra más larga es: " + palabras[posicionpalabra] + "</h4>");
}

c = prompt("Escribe una frase para buscar la palabra más larga")
encuentraPalabraMasLarga(c);





//sin terminar esta función
 function fltraPalabrasMasLargas(cad_arg, longitud){
     let palabras = cad_arg.split(" ");
    let longpalabralarga = 0;
    let posicionpalabra = 0;
    let i = palabras.length;
    for (x = 0; x < palabras.length; x++){
        //console.log( palabras[x].length);
        if (longpalabralarga < longitud){
            longpalabralarga = palabras[x].length;
            posicionpalabra = x;
        
        }
        
        
    }
    document.write("La frase para buscar palabra larga es: " + cad_arg);
    document.write("La palabra más larga es: " + palabras[posicionpalabra]);
 }








