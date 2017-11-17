function crearlienzo(){
    document.write("<div><table>");
    for (var x = 0; x < 100; x++){
        document.write("<tr>");
        for(var i = 0; i < 100; i++){
            document.write("<td onmousemove='pintar(event)' ></td>");
        }
        document.write("</tr>");
    }
    document.write("</table></div>");
}

function pintar(e){
    if (e.ctrlKey == true){
        e.target.style.backgroundColor = "red"
    }
    if (e.shiftKey == true){
        e.target.style.backgroundColor = "blue"
    }
}



function dibujar(){
    crearlienzo();
}