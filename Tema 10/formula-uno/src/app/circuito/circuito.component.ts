import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ServCircuitosService} from "../serv-circuitos.service";

@Component({
  selector: 'app-circuito',
  templateUrl: './circuito.component.html',
  styleUrls: ['./circuito.component.css']
})
export class CircuitoComponent implements OnInit {

  datos:any;

  constructor(private route: ActivatedRoute, private servicio:ServCircuitosService) { }

  ngOnInit() {
    this.servicio.obtenerdatosCircuito(this.route.snapshot.params["idcircuito"]).subscribe(
      
      data => {
      // Read the result field from the JSON response.
      console.log(data);    
      this.datos=data.MRData.CircuitTable.Circuits[0];
      console.log(this.datos);
  
      });

  }

}
   