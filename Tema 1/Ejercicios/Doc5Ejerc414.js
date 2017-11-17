columnas = prompt('Numero de culumnas');
altura = prompt('Altura');
anchura = prompt('Anchura');
     
     
document.write("<table border='0' cellspacing='2' bgcolor='black' width='"+ anchura * columnas + "'>");
document.write("<tr height='" + altura + "'>");

var i=1
while (i<=columnas){
    if (i%2==0){
        document.write("<td width='"+ anchura + "' bgcolor='white'>&nbsp;</td>");
    }
    else {
        document.write("<td width='"+ anchura + "' bgcolor='black'>&nbsp;</td>");
    }
    i = i+1;
}
document.write("</tr>");
document.write("</table>")