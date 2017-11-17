document.write("<table border=0");
var i;
for (i = 0; i <= 100; i++) {
    document.write(`<tr> <td>${i}</td><td>${Math.sin(i)}</td></tr>`);
}
document.write("</table>")