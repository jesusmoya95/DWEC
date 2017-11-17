num = prompt('Número para adivinar');

num2 = prompt('¿Qué numero es?');
var i=true;

while (i==true){
    if (num2 < num){
        alert('El número es mayor');
        num2 = prompt('¿Qué numero es?');
    }
    if(num2 > num){
        alert('El número es menor');
        num2 = prompt('¿Qué numero es?');
    }
    if (num2 == num){
        alert('Has adivinado el número');
        i=false;
    }
}