columnas = prompt('Numero de culumnas');
altura = prompt('Altura');
anchura = prompt('Anchura');
     
     
document.write("<table border='0' cellspacing='2' bgcolor='black' width='"+ anchura * columnas + "'>");
document.write("<tr bgcolor='white' height='" + altura + "'>");

for (i=1; i<=(columnas); i++){
    document.write("<td width='"+ anchura + "'>&nbsp;</td>");
};
document.write("</tr>");
document.write("</table>")