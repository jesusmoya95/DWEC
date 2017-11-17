function lanzamiento(){
    return Math.floor(Math.random() * (7 - 1)) + 1; 
}

var ocurrencia1 = 0;
var ocurrencia2 = 0;
var ocurrencia3 = 0;
var ocurrencia4 = 0;
var ocurrencia5 = 0;
var ocurrencia6 = 0;

function tiradas(){
    for (x=0; x <=6000; x++){
        switch (lanzamiento()){
            case 1:
                ocurrencia1++;
                break;
            case 2:
                ocurrencia2++;
                break;
            case 3:
                ocurrencia3++;
                break;
            case 4:
                ocurrencia4++;
                break;
            case 5:
                ocurrencia5++;
                break;
            case 6:
                ocurrencia6++;
                break;
                                }
    }
    
}
tiradas();
console.log("Número 1: " + ocurrencia1);
console.log("Número 2: " + ocurrencia2);
console.log("Número 3: " + ocurrencia3);
console.log("Número 4: " + ocurrencia4);
console.log("Número 5: " + ocurrencia5);
console.log("Número 6: " + ocurrencia6);