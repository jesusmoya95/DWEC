var a = parseFloat(prompt("variable a"));
var b = parseFloat(prompt("variable b")); 
var c = parseFloat(prompt("variable c"));
var solucion1 = (-b + (Math.sqrt(b ** 2 - 4 * a * c))) / (2 * a);
var solucion2 = (-b - (Math.sqrt(b ** 2 - 4 * a * c))) / (2 * a);

document.write('<p>Las soluciones son:</p><p>    ' + solucion1 + '</p><p>    ' + solucion2 + '</p>');