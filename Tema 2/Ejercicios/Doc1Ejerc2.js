var fechaHoy = new Date();
var fecha85 = new Date();
var fecha187 = new Date();
fecha85.setDate(fechaHoy.getDay() + 85);
fecha187.setDate(fechaHoy.getDay() - 187);

document.write(fecha85);
document.write('<br><br>');
document.write(fecha187);
document.write('<br><br><br>');

fecha85.setFullYear(fechaHoy.getFullYear() + 2);
fecha187.setDate(fechaHoy.getHours() - 24);
var fecharesto = new Date();
fecharesto.setDate(fecha85.getDate() - fecha187.getDate());


document.write(fecha85);
document.write('<br><br>');
document.write(fecha187);
document.write('<br><br>');
document.write(fecharesto);