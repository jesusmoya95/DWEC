if ("geolocation" in navigator) {
  console.log("El servicio de geolocalización está activo")/* geolocation is available */
} else {
  console.log("El servicio de geolocalización NO está activo")/* geolocation IS NOT available */
}

var poslatitud = 0;
var poslongitud = 0;

function obtenerposicion(){
    navigator.geolocation.getCurrentPosition(
    
        function (position) {
          //document.write(position.coords.latitude + ' ' +  position.coords.longitude);
            poslatitud = position.coords.latitude;
            poslongitud = position.coords.longitude;
        }
    );
}
obtenerposicion()

function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: poslatitud, lng: poslongitud},
          zoom: 8
        });
}

