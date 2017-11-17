function greaterNum(a, b)
    {
        if (a > b){
            document.write(a);
            console.log(a + ' es mayor que '+ b);
        } else if (a < b){
            document.write(b);
            console.log(b + ' es mayor que ' + a);
            
        }
        else {
            document.write('Son iguales');
        }
    };


num1 = prompt('Pon el primer número');
num2 = prompt('Pon el segundo número');
greaterNum(num1, num2);




