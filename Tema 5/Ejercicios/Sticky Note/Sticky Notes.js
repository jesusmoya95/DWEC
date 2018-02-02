//#########################################################
//#################       MODELO        ###################
//#########################################################

class Nota{
    constructor(titulo, contenido=""){
        this.titulo = titulo;
        this.contenido = contenido;
        this.fecha
    }
    
    // Fin de la clase Nota
}


class Bloc_de_notas{
    constructor(nombre){
        this.lista = [];
        this.nombre = nombre;
    }
    
    meter_nota(nota){
        this.lista.push(nota)
    }
    
    eliminar_nota(nota){
        let indice = this.lista.indexOf(nota);
        this.lista.splice(nota, 1)
    }
    // Fin de la clase Bloc_de_notas
}





//#########################################################
//##################       VISTA        ###################
//#########################################################

class Vista{
    constructor(controlador){
        this.bloc = document.getElementById("bloc_notas");
        this.div_boton = document.getElementById("crear_notas");
        this.controlador = controlador;
        this.poner_stilos();
        this.poner_boton();
    }
    
    poner_boton(){
        // Creación del boton de añador notas
        this.div_boton.innerHTML = '<input id="titulo" type="text" value="Nueva nota"> <textarea id="contenido" cols="30" rows="10" value=""> </textarea> <input type="button" class="añador_nota" value="+ Nueva nota" onclick="controlador.vista.nueva_nota()">';
    }
    
    mostrar_notas(nota){
        // Mostrar la ultima nota creada
            var item = document.createElement("div");
            item.id = nota.titulo;
            item.className = "nota";
            item.innerHTML = `<h3 class="titulo_nota">${nota.titulo} <img class="papelera" id="papelera" src="imagenes/papelera.png" heigt="20px" width="20px"></h3>`;
            item.innerHTML += `<p>${nota.contenido}</p>`;
        
            this.bloc.appendChild(item);
    }
    
    
    nueva_nota(){
        let titulo = document.getElementById("titulo").value;
        let contenido = document.getElementById("contenido").value;
        let nota = this.controlador.nueva_nota(titulo, contenido);
        this.mostrar_notas(nota);
        
    }
    //document.body.style.width
    poner_stilos(){
        let estilos = "<style>";
        let body = "body{background:url(imagenes/corcho.jpg) repeat}";
        let nota = ".nota{height:200px; width:200px; background-color:#C8FE2E; border:#AEB404 2px solid; text-align:center;}";
        let titulo = ".titulo_nota{background-color:#D7DF01; padding:0; margin:0;}";
        let crear_notas = ".crear_notas{}";
        let papelera = ".papelera:hover{heigt:30px; width:30px;}";
        
        
        
        let fin_estilos = "</style>";
        
        document.head.innerHTML += estilos + body + nota + titulo + crear_notas + papelera + fin_estilos;
    }
}




//#########################################################
//###############       CONTROLADOR       #################
//#########################################################

class Controlador{
    constructor(){
        this.modelo = new Bloc_de_notas("Mis_notas");
        this.vista = new Vista(this);
        
    }
    
    nueva_nota(nombre, contenido=""){
        // Crea una nueva nota y la introduce dentro del bloc.
        let nota = new Nota(nombre, contenido);
        this.modelo.meter_nota(nota);
        return nota;
    }
    
    borrar_nota(nombre){
        // Borra una nota del bloc
        this.modelo.eliminar_nota(nombre);
    }
    
    get get_notas(){
        return this.modelo.lista;
    }
    
    guardar_cookie(nota){
        document.cookie = `${nota.titulo} = ${nota.contenido}`;
    }
    
    // Fin de la clase Controlador
}





//#########################################################
//#################       VARIABLES        ################
//#########################################################

window.onload = () =>{
    controlador = new Controlador();
}





