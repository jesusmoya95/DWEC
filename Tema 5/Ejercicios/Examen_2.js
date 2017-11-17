class Gato{
    constructor(nombre, edad, tamaño, raza){
        this.nombre = nombre;
        this.edad = edad;
        this.tamaño = tamaño;
        this.raza = raza;
        
    }
    
    caracteristicas(){
        return `Me llamo ${this.nombre}, tengo ${this.edad} años, mido ${this.tamaño} cm y soy un ${this.raza}. `;
    }
}


class JaulaGatitos{
    constructor(){
        this.jaula = [];
    }
    
    añadirGato(gato){
        this.jaula.push(gato);
    }
    
    buscarGato(nombre_gato){
        let cont = 0;
        for (let i = 0; i < this.jaula.length; i++){
            if (this.jaula[i].nombre == nombre_gato){
                return this.jaula[i].caracteristicas();
            }
            else if (cont == parseInt(this.jaula.length) -1) {
                return "No lo encuentro";
            }
        }
    }
    
    mostrarGatos(){
        let info = `En la jaula hay ${this.jaula.length} gatos: `;
        for (let i = 0; i < this.jaula.length; i++){
            info += this.jaula[i].caracteristicas();
        }
        return info;
    }
}


window.onload = function(){
    var g = new Gato("misifu",2,24,"siames");
    var a = new Gato("roki",2,20,"siames");
    var b = new Gato("moreno",1,23,"persa");
    var jaula = new JaulaGatitos();
    jaula.añadirGato(g);
    jaula.añadirGato(a);
    jaula.añadirGato(b);
    var mostrar = document.getElementById("info");
    //mostrar.innerHTML = g.caracteristicas();
    //mostrar.innerHTML = jaula.mostrarGatos();
    mostrar.innerHTML = jaula.buscarGato("moeno");
    
    
}
