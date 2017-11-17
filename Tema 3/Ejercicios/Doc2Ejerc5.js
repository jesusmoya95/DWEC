function aleatorio() {
    return Math.floor(Math.random() * (1001 - 1)) + 1; 
}


function paresImpares(){
    let arr = [];
    let impar = [];
    let par = [];
    
    for (x = 0; x < 100; x++){
        arr.push(aleatorio());
    }
    arr.forEach(function(valor){
        switch (valor%2){
            case 1:
                impar.push(valor);
                break;
            case 0:
                par.push(valor);
                break;
                     }
    })
    arr = impar.concat(par)
    return arr;
}

console.log(paresImpares())