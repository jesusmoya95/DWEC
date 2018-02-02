function validarUsuario(){
    let usuario = document.getElementById("usuario").value;
    let valido = document.getElementById('usuarioOk');
    let novalido = document.getElementById('usuarioError');
    let existe = document.getElementById("existe");
    let usuarioRegex = /^[A-Za-z]?[A-Za-z0-9]/;
    
    
    
    
    
    
    
    
    if (usuarioRegex.test(usuario) && usuario != "") {
        valido.style.display = "inline";
        novalido.style.display = "none";
        existe.style.display = "none";
    } else {
        existe.style.display = "inline";
        novalido.style.display = "inline";
        valido.style.display = "none";
    }
    
}


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("actualizar").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", `Doc2Ejerc4.php?param=${nombre}`, true);
  xhttp.send();
}