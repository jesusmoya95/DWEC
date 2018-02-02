import { Component, OnInit } from '@angular/core';
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})
export class NuevoComponenteComponent implements OnInit {

  constructor(private servicio:ServicioService) { }

  ngOnInit() {console.log(this.servicio.obtenerdatos().subscribe(
      
      data => {
      // Read the result field from the JSON response.
      console.log(data.page.items[0].anteTitle);    


      })
    );
  }

}
