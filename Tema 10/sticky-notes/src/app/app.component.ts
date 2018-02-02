import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contenidoTitulo: string = "Nueva nota";
  contenidoTexto: string;
  array: any;
  constructor(){
    this.array =[];
  }

  nueva_nota(){
    this.array.push({titulo:this.contenidoTitulo, texto:this.contenidoTexto})
    
    }
}
