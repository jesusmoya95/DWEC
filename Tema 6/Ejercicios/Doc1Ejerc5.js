function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("actualizar").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "Doc1Ejerc5.txt", true);
  xhttp.send();
}

setInterval(loadDoc, 2000);