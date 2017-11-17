function potencia(base, exponente){
    if (exponente == 0){
        return 1;
    }
    else {
        return base * potencia(base, exponente - 1);
    }
}

base = prompt("Escribe la base:");
exponente = prompt("Escribe el exponente:");

console.log(potencia(base, exponente));