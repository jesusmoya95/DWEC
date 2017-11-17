function crearlienzo(){
    document.write("<div><table>");
    for (var x = 0; x < 100; x++){
        document.write("<tr>");
        for(var i = 0; i < 100; i++){
            document.write("<td onmousemove='pintar(event)' onmousedown='borrar(event)'></td>");
        }
        document.write("</tr>");
    }
    document.write("</table></div>");
}

function pintar(e){
    if (e.ctrlKey == true){
        e.target.style.backgroundColor = "red";
    }
    else if (e.shiftKey == true){
        e.target.style.backgroundColor = "blue";
    }
    else if (e.altKey == true){
        e.target.style.backgroundColor = "white"
    }
}





function dibujar(){
    crearlienzo();
}