var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function (req, res) {
  res.send('Magia negra');
});



app.get('/pepe', function (req, res) {
  res.send('Hola ');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('nuevoUsuario', function(nuevoMensaje){
    socket.broadcast.emit('nuevoUsuario');
    console.log('Se ha conectado el usuario: ' + nuevoMensaje);
  });
});