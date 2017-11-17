function nuevo_juego(){
    var nuevo = new Tablero(8);
    nuevo.crearTablero();
    nuevo.poner_bombas();
}

class Tablero{
    constructor(ancho){
        this.ancho = ancho;
        this.fila = new Array(this.ancho);
    }
    
    crearTablero(){
        for (var i = 0; i < this.ancho; i++){
            this.fila[i] = new Array(this.ancho);
            for (var j = 0; j < this.ancho; j++){
                this.fila[i][j] = new Celda()
            }
        }
        console.log(this.fila)
    }
    
    poner_bombas(){
        var bomba_x;
        var bomba_y;
        for (var i = 0; i < this.ancho; i++){
            bomba_x = (Math.floor(Math.random() * this.ancho));
            bomba_y = (Math.floor(Math.random() * this.ancho));
            this.fila[bomba_x][bomba_y].valor = "X";
            
            //Poner los numeros alrededor de las bombas
            this.numeros(bomba_x, bomba_y);
            
            // Poner numeros alrededor de las bombas
            // Esquina arriba izquierda
            /*if (bomba_x == 0 && bomba_y == 0){
                this.fila[bomba_x + 1][bomba_y].valor++;
                
                this.fila[bomba_x][bomba_y + 1].valor++;
                
                this.fila[bomba_x + 1][bomba_y + 1].valor++;
            }
            
            // Esquina arriba derecha
            else if (bomba_x == this.ancho - 1 && bomba_y == 0){
                this.fila[bomba_x - 1][bomba_y].valor ++;
                
                this.fila[bomba_x][bomba_y + 1].valor++;
                
                this.fila[bomba_x - 1][bomba_y + 1].valor++;
            }
            
            // Esquina abajo izquierda
            else if (bomba_x == 0 && bomba_y == this.ancho - 1){
                this.fila[bomba_x][bomba_y - 1].valor++;
                
                this.fila[bomba_x + 1][bomba_y].valor++;
                
                this.fila[bomba_x + 1][bomba_y - 1].valor++;
            }
            
            // Esquina abajo derecha
            else if (bomba_x == this.ancho - 1 && bomba_y == this.ancho - 1){
                this.fila[bomba_x - 1][bomba_y - 1].valor++;
                
                this.fila[bomba_x][bomba_y - 1].valor++;
                
                this.fila[bomba_x - 1][bomba_y].valor++;
            }
            
            
            // Filo arriba
            else if (bomba_x != 0 && bomba_x != this.ancho - 1 && bomba_y == 0){
                this.fila[bomba_x - 1][bomba_y].valor++;
                
                this.fila[bomba_x + 1][bomba_y].valor++;
                
                this.fila[bomba_x - 1][bomba_y + 1].valor++;
                
                this.fila[bomba_x][bomba_y + 1].valor++;
                
                this.fila[bomba_x + 1][bomba_y + 1].valor++;
            }
            
            // Filo abajo
            else if (bomba_x != 0 && bomba_x != this.ancho - 1 && bomba_y == this.ancho - 1){
                this.fila[bomba_x - 1][bomba_y - 1].valor++;
                
                this.fila[bomba_x][bomba_y - 1].valor++;
                
                this.fila[bomba_x + 1][bomba_y - 1].valor++;
                
                this.fila[bomba_x - 1][bomba_y].valor++;
                
                this.fila[bomba_x + 1][bomba_y].valor++;
            }
            
            
            // Filo izquierda
            else if (bomba_x == 0 && bomba_y != this.ancho - 1 && bomba_y == 0){
                this.fila[bomba_x][bomba_y - 1].valor++;
                
                this.fila[bomba_x + 1][bomba_y - 1].valor++;
                
                this.fila[bomba_x + 1][bomba_y].valor++;
                
                this.fila[bomba_x][bomba_y + 1].valor++;
                
                this.fila[bomba_x + 1][bomba_y + 1].valor++;
            }
            
            //Filo derecha
            else if (bomba_x == this.ancho - 1 && bomba_y != this.ancho - 1 && bomba_y == 0){
                this.fila[bomba_x - 1][bomba_y - 1].valor++;
                
                this.fila[bomba_x][bomba_y - 1].valor++;
                
                this.fila[bomba_x - 1][bomba_y].valor++;
                
                this.fila[bomba_x - 1][bomba_y + 1].valor++;
                
                this.fila[bomba_x][bomba_y + 1].valor++;
            }
            
            
            else if (bomba_x != this.ancho - 1 && bomba_y != this.ancho - 1 && bomba_y == 0 && bomba_x == 0){
            this.fila[bomba_x - 1][bomba_y - 1].valor++;
                
            this.fila[bomba_x][bomba_y - 1].valor++;
                
            this.fila[bomba_x + 1][bomba_y - 1].valor++;
                
            this.fila[bomba_x - 1][bomba_y].valor++;
                
            this.fila[bomba_x + 1][bomba_y].valor++;
                
            this.fila[bomba_x - 1][bomba_y + 1].valor++;
                
            this.fila[bomba_x][bomba_y + 1].valor++;
                
            this.fila[bomba_x + 1][bomba_y + 1].valor++;
            }*/
        }
        console.log(this.fila);
    }
    
    
    numeros(pos_x, pos_y){
        this.incrementa(pos_x - 1, pos_y - 1);
        this.incrementa(pos_x, pos_y - 1);
        this.incrementa(pos_x + 1, pos_y - 1);
        this.incrementa(pos_x - 1, pos_y);
        this.incrementa(pos_x + 1, pos_y);
        this.incrementa(pos_x - 1, pos_y + 1);
        this.incrementa(pos_x, pos_y + 1);
        this.incrementa(pos_x + 1, pos_y + 1);
    }
    
    incrementa(x, y){
        if (this.fila[x] && this.fila[x][y]){
            this.fila[x][y].valor++;
        }
    }
}


class Celda{
    constructor(){
        this.visible = false;
        this.valor = 0;
    }
    
    
}



nuevo_juego();