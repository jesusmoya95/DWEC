/* Ejercicio 1*/
function maximo(a, b, c, d){
    if (a > b && a > c && a > d){
        console.log("El valor maximo es" + a);
        return a;
    }
    else if (b > a && b > c && b > d){
        console.log("El valor maximo es" + b);
        return b;
    }
    else if (c > a && c > b && c > d){
        console.log("El valor maximo es" + c);
        return c;
    }
    else if (d > a && d > b && d > c){
        console.log("El valor maximo es" + d);
        return d;
    }
}


a = prompt("Primer valor: ");
b = prompt("Segundo alor: ");
c = prompt("Tercer valor: ");
d = prompt("Cuarto valor: ");

maximo(a, b, c, d)



