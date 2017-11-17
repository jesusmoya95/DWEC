function numaleatoriosimple() {
    var numero = Math.random();
    alert("Número aleatorio entre 0 y 1:  "+ numero);
}




function numaleatorio() {
    var aleatorio = Math.round(Math.random()*10);
    alert("Número aleatorio entre 0 y 10: "+aleatorio);
}



function numeroaleatorio(a,b) {
    var n = Math.round(Math.random()*(b-a)+parseInt(a));
    alert("Número aleatorio entre 100 y 200: "+n);
         }



numaleatoriosimple();
numaleatorio();
numeroaleatorio(100,200)