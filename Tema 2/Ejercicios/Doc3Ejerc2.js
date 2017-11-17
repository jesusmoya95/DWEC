
function infocadena(arg){
    let palabras = arg.split(" ");
    let letrasmayusculas = "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z";
    let letrasminusculas = "a b c d e f g h i j k l m n ñ o p q r s t u v w x y z";
    let mayuscula = false;
    let minuscula = false;
    for (x = 0; x < palabras.length; x++){
        for (j = 0; j < palabras[x].length; j++){
            if (palabras[x][j] in letrasmayusculas){
                mayuscula = true;
            }
            if (palabras[x][j] in letrasminusculas){
                minuscula = true;
            }
        }
    }
    if (letrasmayusculas &! letrasminusculas){
        document.write("<h4>La frase contiene solo letras mayúsculas</h4>");
    }
    else if (letrasminusculas &! letrasmayusculas){
        document.write("<h4> La frase contiene solo letras minúsculas</h4>");
    }
    else if (letrasmayusculas & letrasminusculas){
        document.write("<h4>La frase contiene mayúsuculas y minúsculas</h4>")
    }
}


a = prompt("Escribe una frase");
infocadena(a);