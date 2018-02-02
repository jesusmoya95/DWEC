///////////////////////////////////////////////////////////
//////                       CLASES                  //////
///////////////////////////////////////////////////////////

class Pelota{
    constructor(radio, color, nombre){ 
        this.nombre = nombre;
        this.radio = radio;
        this.color = color;
        
        //Tamaño del tablero
        let padre = document.getElementById("juego");
        this.x_max = parseInt(padre.getAttribute("width")) - radio - 5;
        this.x_min = radio + 5;
        this.y_max = parseInt(padre.getAttribute("height")) - radio - 5;
        this.y_min = radio + 5;
        
        //Velocidad de movimiento (aleatoriamente)
        this.movimiento_x = Math.floor(Math.random()*6+3);
        this.movimiento_y = Math.floor(Math.random()*6+3);
        
        this.posicionar_pelota();
        this.crear_pelota();
        
        /*//Posicion inicial de la pelota (aleatorio)
        this.pos_x = Math.floor(Math.random()*(this.x_max - radio + 10))+radio;
        this.pos_y = Math.floor(Math.random()*(this.y_max - radio + 10))+radio;
        
        //Velocidad de movimiento (aleatoriamente)
        //this.movimiento_x = 4;
        //this.movimiento_y = 4;
        this.movimiento_x = Math.floor(Math.random()*6+3);
        this.movimiento_y = Math.floor(Math.random()*6+3);
        
        //Crear el objeto en el html
        let elemento = `<circle id="${nombre}" cx="${this.pos_x}" cy="${this.pos_y}" r="${radio}" fill="${color}" stroke="black" stroke-width="2" />`;
        
        padre.innerHTML += elemento;
        */
        
    }
    
    posicionar_pelota(){
        //Posicion inicial de la pelota (aleatorio)
        this.pos_x = Math.floor(Math.random()*(this.x_max - this.radio + 10)) + this.radio;
        this.pos_y = Math.floor(Math.random()*(this.y_max - this.radio + 10)) + this.radio;
    }
    
    crear_pelota(){
        //Crear el objeto en el html
        let elemento = `<circle id="${this.nombre}" cx="${this.pos_x}" cy="${this.pos_y}" r="${this.radio}" fill="${this.color}" stroke="black" stroke-width="2" />`;
        let padre = document.getElementById("juego");
        padre.innerHTML += elemento;
    }

    mover(){
        this.pos_x = this.pos_x + this.movimiento_x;
        document.getElementById(this.nombre).setAttribute("cx", this.pos_x);

        this.pos_y = this.pos_y + this.movimiento_y;
        document.getElementById(this.nombre).setAttribute("cy", this.pos_y);

        //Condiciones para chocar en las paredes
        if (this.pos_x >= this.x_max){
            this.posicionar_pelota();
        }
        else if (this.pos_x <= this.x_min){
            this.posicionar_pelota();
        }
        else if (this.pos_y >= this.y_max){
            this.choca_y();
        }
        else if (this.pos_y <= this.y_min){
            this.choca_y();
        }
    }

    choca_x(){
        this.movimiento_x = this.movimiento_x * -1;
    }

    choca_y(){
       this.movimiento_y = this.movimiento_y * -1;
    }




    // Fin de la clase
}



class Jugador{
    constructor(nombre, jugador){
        this.nombre = nombre;
        this.ancho = 15;
        this.alto = 200
        this.jugador = jugador;
        this.puntos = 0;
        this.mover_arriba = false;
        this.mover_abajo = false;
        
        //Tamaño del tablero
        let padre = document.getElementById("juego");
        this.x_max = parseInt(padre.getAttribute("width"));
        this.x_min = 0;
        this.y_max = parseInt(padre.getAttribute("height"));
        this.y_min = 0;
        
        //Posición de las palas
        if (this.jugador == 1){
            this.pos_x = 3;
        }
        
        else if (this.jugador == 2){
            this.pos_x = this.x_max - this.ancho - 3;
        }
        
        this.pos_y = (this.y_max / 2) - (this.alto / 2);
        
        // Crear el objeto en html
        let elemento = `<rect id="${this.nombre}" x="${this.pos_x}" y="${this.pos_y}" height="${this.alto}px" width="${this.ancho}px" fill="grey" stroke="black" stroke-width="2"></rect>`;
        padre.innerHTML += elemento;
        
        // Puntos del jugador
        let puntos_jugador = document.getElementById(`puntos_j${this.jugador}`);
                                                     
        puntos_jugador.innerHTML= `Jugador ${this.jugador}: 0`
        // Movimiento de las palas
        this.movimiento_y = 10;
    }
    
    mueve_arriba(){
        if (this.mover_arriba == true){
            if (this.pos_y <= 0){
                return null;
            }
            else{
                this.pos_y = this.pos_y - this.movimiento_y;
                document.getElementById(this.nombre).setAttribute("y", this.pos_y);
            }
        }  
    }
    
    mueve_abajo(){
        if (this.mover_abajo == true){
            if (this.pos_y >= this.y_max - this.alto){
                return null;
            }
            else{
                this.pos_y = this.pos_y + this.movimiento_y;
                document.getElementById(this.nombre).setAttribute("y", this.pos_y);
            }
        }
    }
    // Fin de la clase jugador
}


///////////////////////////////////////////////////////////
//////                     FUNCIONES                 //////
///////////////////////////////////////////////////////////



function mover() {
    //chocando()
    pelota1.mover();
    //pelota2.mover();
    jugador1.mueve_arriba();
    jugador1.mueve_abajo();
    jugador2.mueve_arriba();
    jugador2.mueve_abajo();
    choca_pala();
    
}
window.addEventListener("load", ()=>{
    setInterval(mover, velocidad);
    // Jugador uno mover arriba "W"
    //onkeypress.keyCode(87)
    // Jugador 1 Mover abajo "S"
    //onkeypress.keyCode(83)
    // Jugador 2 Mover arriba (UP)
    //onkeypress.keyCode(38)
    // Jugador 2 Mover abajo (DOWN)
    //onkeypress.keyCode(40)
});



function chocando(){
    // Detecta y hace que reboten las dos pelotas
    // Calcular el punto de la circunferencia
    var p1x = pelota1.pos_x;
    var p2x = pelota2.pos_x;
    var p1y = pelota1.pos_y;
    var p2y = pelota2.pos_y;
    var dist = pelota1.radio + pelota2.radio;
    if (Math.sqrt((p1x - p2x)**2 + (p1y - p2y)**2) <= dist){
        pelota1.choca_x();
        pelota1.choca_y();
        pelota2.choca_x();
        pelota2.choca_y();
    }
}


function choca_pala(){
    // Cuando la pelota choca en las palas
    //Con el jugador 1
    if (pelota1.pos_x - pelota1.radio <= jugador1.pos_x + jugador1.ancho){
        if( pelota1.pos_y >= jugador1.pos_y && pelota1.pos_y <= jugador1.pos_y + jugador1.alto){
            pelota1.choca_x();
        }
    }
    // Con el jugador 2
    if (pelota1.pos_x + pelota1.radio >= jugador2.pos_x){
        if( pelota1.pos_y >= jugador2.pos_y && pelota1.pos_y <= jugador2.pos_y + jugador2.alto){
            pelota1.choca_x();
        }
    }
}

function mueve_pala(event){
    // Mueve las palas segun la tecla que pulsas. Se le pasa como pará metro el código de la tecla
    switch (event.keyCode){
        case 87:
            jugador1.mover_arriba = true;
            break;
        case 83:
            jugador1.mover_abajo = true;
            break;
        case 38:
            jugador2.mover_arriba = true;
            break;
        case 40:
            jugador2.mover_abajo = true;
            break;
    }
    
}

function para_pala(event){
    // Para las palas segun la tecla que pulsas. Se le pasa como pará metro el código de la tecla
    switch (event.keyCode){
        case 87:
            jugador1.mover_arriba = false;
            break;
        case 83:
            jugador1.mover_abajo = false;
            break;
        case 38:
            jugador2.mover_arriba = false;
            break;
        case 40:
            jugador2.mover_abajo = false;
            break;
    }
    
}


///////////////////////////////////////////////////////////
//////                     VARIABLES                 //////
///////////////////////////////////////////////////////////

// Declarar pelotas
var pelota1 = new Pelota(20, "pink", "pelota1");
//var pelota2 = new Pelota(40, "red", "pelota2");
var jugador1 = new Jugador("j1", 1);
var jugador2 = new Jugador("j2", 2);
var velocidad = 10;

