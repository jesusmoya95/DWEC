function crearCuadrado(id, tamaño){
        let elemento = `<rect id="${id}" width="${tamaño}" height="${tamaño}" fill="blue" stroke="black" stroke-width="2" />`;
        let padre = document.getElementById("pintar");
        padre.innerHTML += elemento;
}


crearCuadrado(1, 100)


function animar(){
    window.addEventListener("load", ()=>{
    setInterval(agrandar, 10);
    })
}
    
function agrandar(){
        let ancho = document.getElementById(1).getAttribute("width");
        let suma = ancho + 10;
        if (ancho < 340){
            document.getElementById(1).setAttribute("width", suma);
            document.getElementById(1).setAttribute("height", suma);
            
        }
    
}