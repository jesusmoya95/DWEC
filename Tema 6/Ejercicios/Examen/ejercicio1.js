function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            this.getResponseHeader;
               
         document.getElementById("actualizar").innerHTML = this.responseText;
        }
      };
    xhttp.open("GET", "datos.xml", true);
    xhttp.send();
}


setInterval(loadDoc, 3000);
