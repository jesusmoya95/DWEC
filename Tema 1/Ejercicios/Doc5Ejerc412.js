columnas = prompt('Numero de culumnas');
altura = prompt('Altura');
anchura = prompt('Anchura');
     
     
document.write("<table border='0' cellspacing='2' bgcolor='black' width='"+ anchura * columnas + "'>");
document.write("<tr height='" + altura + "'>");

for (i=1; i<=(columnas); i++){
    if (i%2==0){
        document.write("<td width='"+ anchura + "' bgcolor='white'>&nbsp;</td>");
    }
    else {
        document.write("<td width='"+ anchura + "' bgcolor='black'>&nbsp;</td>");
    }
}
document.write("</tr>");
document.write("</table>")