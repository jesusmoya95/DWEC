

if ("geolocation" in navigator) {
  console.log("El servicio de geolocalización está activo")/* geolocation is available */
} else {
  console.log("El servicio de geolocalización NO está activo")/* geolocation IS NOT available */
}

var primeravez = true;
var poslatitud = 0;
var poslongitud = 0;
var poslatitud1 = 0;
var poslongitud1 = 0;

function obtenerposicion(){
    navigator.geolocation.getCurrentPosition(
    
        function (position) {
          document.write(position.coords.latitude + ' ' +  position.coords.longitude);
            poslatitud = position.coords.latitude;
            poslongitud = position.coords.longitude;
            if (primeravez){
                poslatitud1 = position.coords.latitude;
                poslongitud1 = position.coords.longitude;
                primeravez = false;
                console.log(poslatitud1);
                console.log(poslongitud1);
            }
        }
    );
    
    distance(poslatitud1, poslongitud1, poslatitud, poslongitud)
    
}

function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
    console.log(dist)
	return dist
}


setInterval(obtenerposicion , 3000);

