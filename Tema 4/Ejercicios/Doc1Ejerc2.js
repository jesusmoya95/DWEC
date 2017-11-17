document.onmousemove = function(e)
   {
    var contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "Eje X: " + e.pageX + " " + "Eje Y: " + e.pageY;
   }