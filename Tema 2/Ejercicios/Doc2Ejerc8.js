function numaleatorio() {
    var aleatorio = Math.round(Math.random()*2);
    switch (aleatorio){
        case 0:
            document.write('<img src="imagen1.jpg" width="700" height="500"');
            break;
        case 1:
            document.write('<img src="imagen2.jpg" width="700" height="500"');
            break;
        case 2:
            document.write('<img src="imagen3.jpg" width="700" height="500"');
            break;
           }
    
}

numaleatorio();