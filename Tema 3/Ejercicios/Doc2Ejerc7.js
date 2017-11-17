var arr = [2, 6]

function cero(){
    for (x = 0; x < 0; x++){
        arr.push(0);
    }
    return arr;
}

function uno(){
    for (x = 0; x < 0; x++){
        arr[x] = 1;
    }
    return arr;
}

function mostrar(){
    return arr.join(" ");
}


console.log(cero());
console.log(uno());
console.log(mostrar());