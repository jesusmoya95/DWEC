columnas = prompt('Numero de culumnas');
altura = prompt('Altura');
anchura = prompt('Anchura');
     
     
document.write("<table border='0' cellspacing='2' bgcolor='black' width='"+ anchura * columnas + "'>");
document.write("<tr bgcolor='white' height='" + altura + "'>");
var i=1
while (i<= columnas){
    document.write("<td width='"+ anchura + "'>&nbsp;</td>");
    i=i+1;
};
document.write("</tr>");
document.write("</table>")