import { Component, OnInit } from '@angular/core';
import {ServCircuitosService} from "../serv-circuitos.service";
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-circuitos',
  templateUrl: './circuitos.component.html',
  styleUrls: ['./circuitos.component.css']
})
export class CircuitosComponent implements OnInit {

  datos:any;

  constructor(private servicio:ServCircuitosService) { }

  ngOnInit() {this.servicio.obtenerdatosCircuitos().subscribe(
      
    data => {
    // Read the result field from the JSON response.
    console.log(data);    
    this.datos=data.MRData.CircuitTable.Circuits;

    })
  
  }



}
